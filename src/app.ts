import { PropsWithChildren } from 'react';
import { useLaunch, useDidShow } from '@tarojs/taro';
import './app.scss';
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  useDidShow(() => {
    console.log('进入页面');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
