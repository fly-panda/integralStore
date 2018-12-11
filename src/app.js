//app.js

// 获取设备信息
const sysInfo = wx.getSystemInfoSync();

let statusBarHeight = sysInfo.statusBarHeight !== undefined ? sysInfo.statusBarHeight : 20;

let navigationBarHeight = statusBarHeight + 44;

App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null,
    statusBarHeight,
    navigationBarHeight,
    hybmUrl: ''
  }
})