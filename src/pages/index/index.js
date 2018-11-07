//index.js
//获取应用实例
const app = getApp()
const config = require('../../utils/config.js');
const sysInfo = wx.getSystemInfoSync();

Page({
  data: {
    videoSrc: '/',
    imgUr: config.imgUrl,
    vipData: [
      {
        imgUrl: config.imgUrl + 'images/ico_vip_dis@2x.png',
        title: 'VIP',
        color: '#F26132',
        tip: '价值1299的红酒一瓶\n获得20%的销售返利',
        prize: '399'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_tianshihehuoren_dis@2x.png',
        title: '天使合伙人',
        color: '#118BD9',
        tip: '价值2299的红酒一瓶\n获得20%的销售返利',
        prize: '1300'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_gaojihehuoren_dis@2x.png',
        title: '高级合伙人',
        color: '#B7905A',
        tip: '价值3299的红酒一瓶\n获得全部销售的20%返利',
        prize: '3900'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_shiyehehuoren_dis@2x.png',
        title: '事业合伙人',
        color: '#06865D',
        tip: '价值3299的红酒一瓶\n获得全部销售的20%返利',
        prize: '3900'
      }
    ]
  },
  commodity() {
    wx.navigateTo({
      url: '/pages/index/commodity/commodity'
    })
  },
  vipDetail() {
    wx.navigateTo({
      url: '/pages/index/vip/vip'
    })
  },
  onLoad: function () {
    let scrollViewHeight = sysInfo.screenHeight - app.globalData.navigationBarHeight
    this.setData({
      scrollViewHeight
    })
  }
})
