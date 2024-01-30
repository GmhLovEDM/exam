import { useState } from 'react';
import { showToast, reLaunch } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import headSculptureIcon from '@/static/icon/head-sculpture.png';
import nextIcon from '@/static/icon/next.png';
import { loginOut } from '@/api/login';

/** 我的页 */
export default () => {
  /** 错题本 */
  const clickExamReview = () => {};

  /** 考试回顾 */
  const clickWrongQuestion = () => {};

  /** 退出登录 */
  const clickLoginOut = async () => {
    try {
      const res = await loginOut({});
      if (res.code == 200) {
        showToast({
          title: '退出成功！'
        });
        setTimeout(() => {
          reLaunch({
            url: '/pages/login/index'
          });
        }, 800);
      }
    } catch (error) {}
  };

  return (
    <View className='index'>
      <View className='search'>
        <Image className='head' src={headSculptureIcon}></Image>
        <Text className='name'>GmhLovEDM</Text>
      </View>
      <View className='tab'>
        <View className='item' onClick={() => clickWrongQuestion()}>
          <View className='item-left'>错题本</View>
          <View className='item-right'>
            <Image className='icon' src={nextIcon}></Image>
          </View>
        </View>
        <View className='item' onClick={() => clickExamReview()}>
          <View className='item-left'>考试回顾</View>
          <View className='item-right'>
            <Image className='icon' src={nextIcon}></Image>
          </View>
        </View>
        <View className='item' onClick={() => clickLoginOut()}>
          <View className='item-left'>退出登录</View>
          <View className='item-right'>
            <Image className='icon' src={nextIcon}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};
