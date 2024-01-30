import { useState } from 'react';
import { showToast, reLaunch, setStorageSync } from '@tarojs/taro';
import { View, Text, Input, Checkbox, CheckboxGroup, Button } from '@tarojs/components';
import type { InputProps, BaseEventOrig, ButtonProps } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { normalLogin } from '@/api/login';
import './index.scss';

/** 登录页 */
export default () => {
  const [form, setForm] = useState<{
    username: string;
    password: string;
  }>({
    username: 'admin',
    password: 'ccicjn@2023'
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  /** 输入用户名和密码 */
  const inputEvent = (e: BaseEventOrig<InputProps.inputEventDetail>, type: 'username' | 'password') => {
    setForm({
      ...form,
      [type]: e.detail.value
    });
  };

  /** 点击登录 */
  const clickLogin = async () => {
    if (isLoadingLogin) return;
    if (!isChecked) {
      return showToast({
        title: '请同意隐私协议和用户协议后继续',
        icon: 'none'
      });
    }
    setIsLoadingLogin(true);
    try {
      const res = await normalLogin({
        username: form.username,
        password: form.password
      });
      if (res.code == 200) {
        setStorageSync('token', res.data.token);
        showToast({
          title: '登录成功！',
          icon: 'none'
        });
        setTimeout(() => {
          reLaunch({
            url: '/pages/index/index'
          });
        }, 800);
      }
      console.log(res);
    } catch (error) {
    } finally {
      setIsLoadingLogin(false);
    }
  };

  const getPhoneNumber = (e: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>) => {
    console.log(e);
    console.log(e);
    console.log(e);
  };

  return (
    <View className='index'>
      <View className='body'>
        <View className='flex'>
          <Text className='name'>登录账号：</Text>
          <Input value={form.username} onInput={e => inputEvent(e, 'username')} type='text' className='input' placeholder='请输入账号' placeholderClass='input-placeholder'></Input>
        </View>
        <View className='flex'>
          <Text className='name'>登录密码：</Text>
          <Input value={form.password} onInput={e => inputEvent(e, 'password')} password className='input' placeholder='请输入密码' placeholderClass='input-placeholder'></Input>
        </View>

        <AtButton type='primary' loading={isLoadingLogin} className='login' onClick={() => clickLogin()}>
          <Text className='login-text'>{isLoadingLogin ? '' : '登录'}</Text>
        </AtButton>

        <View className='privacy'>
          <CheckboxGroup onChange={() => setIsChecked(!isChecked)}>
            <Checkbox checked={isChecked} className='checkbox' value='privacy'></Checkbox>
          </CheckboxGroup>
          <Text className='text'>
            请阅读并勾选我们的 <Text className='blue'>隐私协议</Text> 和 <Text className='blue'>用户协议</Text>
          </Text>
        </View>

        <View className='wechat-login'>
          <View className='text'>或</View>
          <Button openType={'getPhoneNumber'} onGetPhoneNumber={e => getPhoneNumber(e)} plain className='blue text'>
            微信授权登录
          </Button>
        </View>
      </View>
    </View>
  );
};
