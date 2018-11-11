//index.js
//获取应用实例
const app = getApp()
const config = require('../../utils/config.js');
const sysInfo = wx.getSystemInfoSync();
const https = require('../../utils/https.js');

Page({
  data: {
    isShowLoading: true,
    videoSrc: 'https://ziker-static.yun.pingan.com/static/share/wx-app/static-resource/imgs/huiduoduo/MidAutumnFestival/3b477cf8.mp4',
    imgUrl: config.imgUrl,
    navImgUrl: config.imgUrl + "Background_dis@2x.png",
    vipData: [],
    prodlist: []
  },
  commodity(e) {
    let prodcode = e.currentTarget.dataset.prodcode
    // let vipData = JSON.stringify(this.data.vipData)  
    wx.navigateTo({
      url: '/pages/index/commodity/commodity?prodcode=' + prodcode
    })
  },
  vipDetail(e) {
    console.log(e)
    let levelid = e.currentTarget.dataset.levelid
    wx.navigateTo({
      url: '/pages/index/vip/vip?levelid=' + levelid
    })
  },
  onLoad: function () {
    let scrollViewHeight = sysInfo.screenHeight - app.globalData.navigationBarHeight
    let navImgUrl = app.globalData.navigationBarHeight == 64 ? config.imgUrl + "Background_dis@2x.png" : config.imgUrl + "Background_dis Copy@2x.png"

    this.setData({
      scrollViewHeight,
      navImgUrl
    })
    this.getData()
    wx.setStorageSync("clientbm", "15627");
  },
  getData() {
    wx:wx.showLoading({
      title: '加载中',
      mask: true
    })
    https.wxRequest({
      url: 'index_show/',
      data: {},
      success: res => {
        console.log(res)
        if (res.statusCode == '200') {
          wx.hideLoading()
          if (res.data.returnvalue == 'true') {
            let vipData = res.data.levellist
            let prodlist = res.data.prodlist
            let videoSrc = res.data.adlink
            this.setData({
              vipData, prodlist, videoSrc,
              isShowLoading: false
            })
          }
        }
      },
      fail: res => {

      }
    })
  }
})
