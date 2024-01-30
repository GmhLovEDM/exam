import { useEffect, useState } from 'react';
import { View, Text, Input, Image, BaseEventOrig, InputProps } from '@tarojs/components';
import { usePullDownRefresh, stopPullDownRefresh, navigateTo, useReachBottom } from '@tarojs/taro';
import { AtTabs, AtTabsPane } from 'taro-ui';
import './index.scss';
import nextIcon from '@/static/icon/next.png';
import searchIcon from '@/static/icon/search.png';
import nullDataIcon from '@/static/icon/null-data.png';
import { getExamList } from '@/api/index';
import type { GetExamList } from '@/api/index/type';

/** 首页 */
export default () => {
  /** 搜索 */
  const [searchText, setSearchText] = useState('');
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  /** 顶部tab */
  const [currentTab, setCurrentTab] = useState<0 | 1 | 2 | 3>(0);
  const [tabList] = useState([{ title: '全部' }, { title: '考试中' }, { title: '未开始' }, { title: '已结束' }]);
  /** 列表 */
  const [list, setList] = useState<GetExamList.Result>([]);
  const [isNullList, setIsNullList] = useState(false);
  const [isDownList, setIsDownList] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10
  });

  useEffect(() => {
    getExamListEntity();
  }, [pagination]);

  /** 获取首页列表 */
  const getExamListEntity = async () => {
    setIsLoadingList(true);
    try {
      const res = await getExamList({
        ...pagination,
        examTitile: searchText,
        filterState: currentTab
      });
      setList(prevList => {
        const newList = [...prevList, ...res.rows];
        setIsDownList(() => res.total <= newList.length);
        setIsNullList(() => res.rows.length <= 0);
        return newList;
      });
    } catch (error) {
      setIsNullList(() => true);
    } finally {
      setIsLoadingList(false);
      stopPullDownRefresh();
    }
  };

  /** 下拉刷新的功能 */
  usePullDownRefresh(() => {
    setList([]);
    setSearchText('');
    setIsDownList(false);
    setIsSearchFocus(false);
    setPagination(prevPagination => ({ ...prevPagination, pageNum: 1 }));
  });

  /** 页面触底分页 */
  useReachBottom(() => {
    if (isDownList) return;
    setPagination(prevPagination => ({ ...prevPagination, pageNum: prevPagination.pageNum + 1 }));
  });

  /** 列表搜索 */
  const searchList = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    setList([]);
    setSearchText(e.detail.value);
    setPagination(prevPagination => ({ ...prevPagination, pageNum: 1 }));
  };

  /** 取消搜索 */
  const cancelSearch = () => {
    if (!searchText) return setIsSearchFocus(false);
    setList([]);
    setSearchText('');
    setIsSearchFocus(false);
    setPagination(prevPagination => ({ ...prevPagination, pageNum: 1 }));
  };

  /** 切换tab */
  const changeTab = (e: 0 | 1 | 2 | 3) => {
    setList([]);
    setCurrentTab(e);
    setPagination(prevPagination => ({ ...prevPagination, pageNum: 1 }));
  };

  /** 点击列表项 */
  const clickItem = (id: string) => {
    navigateTo({
      url: '/pages/detail/index?id=' + id
    });
  };

  return (
    <View className='index'>
      <View className='search'>
        <Image className='icon' src={searchIcon}></Image>
        <Input
          // onBlur={() => setIsSearchFocus(false)}
          onClick={() => setIsSearchFocus(true)}
          value={searchText}
          onInput={e => searchList(e)}
          className='input'
          placeholder='搜索考试'
          placeholderClass='input-placeholder'
        ></Input>
        {isSearchFocus && (
          <Text className='cancel' onClick={() => cancelSearch()}>
            取消
          </Text>
        )}
      </View>
      <View className='tab'>
        <AtTabs animated={false} swipeable={false} current={currentTab} tabList={tabList} onClick={e => changeTab(e as 0 | 1 | 2 | 3)}>
          {tabList.map((_item, index) => (
            <AtTabsPane key={index} current={currentTab} index={index}>
              {list.map((val, _key) => (
                <View key={val.examId} className='item' hoverClass='click-item' onClick={() => clickItem(val.examId)}>
                  <View className='item-left'>
                    <Text className='title'>{val.examTitile || '-'}</Text>
                    <Text className='date'>发布时间：{val.createTime || '-'}</Text>
                  </View>
                  <View className='item-right'>
                    <Image className='icon' src={nextIcon}></Image>
                  </View>
                </View>
              ))}
              {isNullList ? (
                <View className='null-data'>
                  <Image className='img' src={nullDataIcon}></Image>
                  <Text className='txt'>暂无数据</Text>
                </View>
              ) : (
                <View className='loading'>{isLoadingList ? <Text>正在加载...</Text> : <Text>没有更多数据了</Text>}</View>
              )}
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    </View>
  );
};
