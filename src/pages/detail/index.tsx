import { useEffect, useState } from 'react';
import { showToast, getCurrentInstance, navigateTo } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import { getExamDetail } from '@/api/detail';
import type { GetExamDetail } from '@/api/detail/type';

/** 考试详情页 */
export default () => {
  const [id] = useState<string | undefined>(getCurrentInstance().router?.params.id);
  const [detail, setDetail] = useState<GetExamDetail.Result>();
  const [isLoadingNext, setIsLoadingNext] = useState(false);

  useEffect(() => {
    if (id) {
      getExamDetailEntity();
    } else {
      showToast({
        title: '获取实验室详情失败！',
        icon: 'none'
      });
    }
  }, [id]);

  /** 获取考试详情 */
  const getExamDetailEntity = async () => {
    setIsLoadingNext(() => true);
    try {
      const res = await getExamDetail({
        examId: id || ''
      });
      setDetail(res.data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoadingNext(() => false);
    }
  };

  /** 点击开始考试 */
  const clickNext = () => {
    if (isLoadingNext) return;
    navigateTo({
      url: '/pages/exam/index?id=' + 123
    });
  };

  return (
    <View className='index'>
      <View className='detail'>
        <View className='title'>{detail?.examTitile || '-'}</View>
        <View className='item'>
          <Text className='bold'>考试描述：</Text>
          <Text className='light'>{detail?.examDesc || '-'}</Text>
        </View>
        <View className='item'>
          <Text className='bold'>考试时长：</Text>
          <Text className='light'>{detail?.timeLimit == '0' ? <>不限时</> : <>{detail?.duration || '-'}分钟</>}</Text>
        </View>
        <View className='item'>
          <Text className='bold'>试卷总分：</Text>
          <Text className='light'>{detail?.score || '-'}</Text>
        </View>
        <View className='item'>
          <Text className='bold'>及格分数：</Text>
          <Text className='light'>{detail?.passLine || '-'}</Text>
        </View>
        <View className='item'>
          <Text className='bold'>考试状态：</Text>
          <Text className='light'>{detail?.examStatus == '1' ? '未开始' : detail?.examStatus == '2' ? '正在进行' : detail?.examStatus == '3' ? '已结束' : '-'}</Text>
        </View>

        <AtButton type='primary' loading={isLoadingNext} className='next' onClick={() => clickNext()}>
          <Text className='next-text'>{isLoadingNext ? '' : '开始考试'}</Text>
        </AtButton>
      </View>
    </View>
  );
};
