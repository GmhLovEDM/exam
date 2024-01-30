export default defineAppConfig({
  pages: ['pages/index/index', 'pages/my/index', 'pages/login/index', 'pages/detail/index', 'pages/exam/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#2c2c2c',
    selectedColor: '#6190e8',
    // custom: true,
    list: [
      {
        iconPath: 'static/icon/home.png',
        selectedIconPath: 'static/icon/home-select.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'static/icon/my.png',
        selectedIconPath: 'static/icon/my-select.png',
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
});
