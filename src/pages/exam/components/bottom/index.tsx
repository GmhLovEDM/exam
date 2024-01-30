import { useEffect, useState, Fragment } from 'react';
import { View, Text, Input, Image, BaseEventOrig, InputProps, Swiper, SwiperItem, Button } from '@tarojs/components';
import { usePullDownRefresh, stopPullDownRefresh, navigateTo, useReachBottom, setNavigationBarTitle, useLoad } from '@tarojs/taro';
import { AtTabs, AtTabsPane, AtButton, AtFloatLayout, AtIcon } from 'taro-ui';
import './index.scss';

import collectIcon from '@/static/icon/collect.png';
import type { BottomBarProps } from './type';

/** 考试页 - 底部栏 */
export default ({ paper, activeIndex, setActiveIndex }: BottomBarProps) => {
  const [isShowAnswerSheet, setIsShowAnswerSheet] = useState(false);
  const [selectedQuId, setSelectedQuId] = useState<string | null>(null);
  const flatPaper = paper?.BigQuestionList.flatMap(bigqu => bigqu.bigquQuList) || [];

  /** 根据当前选中题目的索引更新 selectedQuId */
  useEffect(() => {
    if (paper) {
      const quId = paper.BigQuestionList.flatMap(bigqu => bigqu.bigquQuList)[activeIndex]?.quId;
      setSelectedQuId(quId || null);
    }
  }, [activeIndex, paper]);

  const clickTopic = (quId: string) => {
    setIsShowAnswerSheet(false);
    const index = paper?.BigQuestionList.flatMap(bigqu => bigqu.bigquQuList).findIndex(item => item.quId === quId);
    if (index !== undefined && index !== -1) {
      setActiveIndex(index);
      setSelectedQuId(quId);
    }
  };

  return (
    <View className='bottom'>
      <View className='bottom-detail' onClick={() => setIsShowAnswerSheet(true)}>
        {/* <Text className='left'>当前为第1题/总题数为50题</Text> */}
        <Text className='left'>
          {activeIndex + 1 || 0}/{flatPaper.length || 0}
        </Text>
        <View className='right'>
          <Image src={collectIcon} className='collect'></Image>
          <AtButton size='small' type='primary' className='paper'>
            交卷
          </AtButton>
        </View>
      </View>
      <AtFloatLayout scrollY isOpened={isShowAnswerSheet} title='答题卡' onClose={() => setIsShowAnswerSheet(false)}>
        <View className='answer-sheet'>
          {/* <View className='title'>
            <Text>答题卡</Text>
            <AtIcon value='close' size='20' color='#f6f6f6' onClick={() => setIsShowAnswerSheet(false)}></AtIcon>
          </View> */}
          <View className='detail'>
            {paper?.BigQuestionList.map((bigItem, bigIndex) => (
              <Fragment key={bigIndex}>
                <View className='big-title'>{bigItem.bigquName}</View>
                <View className='big-detail'>
                  {bigItem.bigquQuList.map((smallItem, smallIndex) => (
                    <View onClick={() => clickTopic(smallItem.quId)} className={`topic ${smallItem.isAnswer ? 'answer ' : 'no-answer '} ${selectedQuId == smallItem.quId ? 'selected' : 'no-selected'}`}>
                      {smallIndex + 1}
                    </View>
                  ))}
                </View>
              </Fragment>
            ))}
          </View>
        </View>
      </AtFloatLayout>
    </View>
  );
};
