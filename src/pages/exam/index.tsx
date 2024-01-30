import { useEffect, useState } from 'react';
import { View, Text, Input, Image, BaseEventOrig, InputProps, Swiper, SwiperItem, Button } from '@tarojs/components';
import { usePullDownRefresh, stopPullDownRefresh, navigateTo, useReachBottom, setNavigationBarTitle, useLoad } from '@tarojs/taro';
import { AtTabs, AtTabsPane } from 'taro-ui';
import './index.scss';
import nextIcon from '@/static/icon/next.png';
import searchIcon from '@/static/icon/search.png';
import nullDataIcon from '@/static/icon/null-data.png';
import useCountdown from '@/hooks/useCountdown/index';

import Single from '@/components/exam/Single';
import Multiple from '@/components/exam/Multiple';
import Judge from '@/components/exam/Judge';

import BottomBar from './components/bottom';

import { getQuestionnaireInfo } from '@/api/test';
import { QuestionnaireInfo } from '@/types/exam';

/** 考试页 */
export default () => {
  /** 试卷 */
  const [paper, setPaper] = useState<QuestionnaireInfo.ExamInfo>();
  const flatPaper = paper?.BigQuestionList.flatMap(bigqu => bigqu.bigquQuList) || [];
  const [activeIndex, setActiveIndex] = useState(0); // 当前选中的题目索引

  /** 获取试卷 */
  const getQuestionnaireInfoEntity = async () => {
    const res = await getQuestionnaireInfo();
    setPaper(res.data);
  };
  useLoad(() => {
    getQuestionnaireInfoEntity();
  });

  /** 考试倒计时 */
  const countdown = useCountdown(3600, () => {
    console.log('结束了');
  });
  useEffect(() => {
    setNavigationBarTitle({ title: countdown });
    // console.log(countdown, paper, flatPaper);
  }, [countdown]);

  // useEffect(() => {
  //   console.log('渲染了:', paper, flatPaper);
  // });

  /** 点击单选题 */
  const clickSingleItem = (item: QuestionnaireInfo.SmallQuestion, selectedItem: QuestionnaireInfo.AnswerOption | null) => {
    item.isAnswer = selectedItem ? true : false;
  };

  /** 点击多选题 */
  const clickMultipleItem = (item: QuestionnaireInfo.SmallQuestion, selectedItemList: QuestionnaireInfo.AnswerOption[]) => {
    item.isAnswer = selectedItemList?.length > 0 ? true : false;
  };

  /** 点击判断题 */
  const clickJudgeItem = (item: QuestionnaireInfo.SmallQuestion, selectedItem: QuestionnaireInfo.AnswerOption | null) => {
    item.isAnswer = selectedItem ? true : false;
  };

  return (
    <View className='index'>
      <Swiper className='exam' duration={300} onChange={e => setActiveIndex(e.detail.current)} current={activeIndex}>
        {flatPaper.map((item, index) => (
          <SwiperItem key={index}>
            {item.quType == '1' && <Single {...item} clickItem={selectedItem => clickSingleItem(item, selectedItem)}></Single>}
            {item.quType == '2' && <Multiple {...item} clickItem={selectedItemList => clickMultipleItem(item, selectedItemList)}></Multiple>}
            {item.quType == '3' && <Judge {...item} clickItem={selectedItem => clickJudgeItem(item, selectedItem)}></Judge>}
          </SwiperItem>
        ))}
      </Swiper>
      <BottomBar paper={paper} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></BottomBar>
    </View>
  );
};
