// pages/index/vip/vip.js

const https = require('../../../utils/https.js');

Page({

  /**
   * 页面的初始数据
   */
  levelid: '',  
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ], 
    indicatorDots: true,
    indicatorColor: '#ccc',
    indicatorActiveColor: '#fff',
    autoplay: false,
    interval: 5000,
    duration: 1000,
    info: {},
    isShowLoading: true
  },
  backPage() {
    let pageList = getCurrentPages();
    let pageLength = pageList.length;

    // 如果pageLength 大于1时，跳转到前一页
    if (pageLength > 1) {
      let prevPage = pageList[pageLength - 2];
      prevPage.onReady();
      wx.navigateBack();
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.levelid = options.levelid ? options.levelid : ''
    wx.showLoading({
      title: '加载中',
    })
    https.wxRequest({
      url: 'level_show/',
      data: {
        levelid: this.levelid
      },
      success: res => {
        console.log(res)
        if (res.statusCode == '200') {
          wx.hideLoading()
          if (res.data.returnvalue == 'true') {
            let info = res.data
            let imgUrls =  res.data.imglist
            this.setData({
              info,
              isShowLoading: false,
              imgUrls
            })
          }
        }
      }
    })
  },
  goPay() {
    let levelid = this.levelid
    let clientbm = wx.getStorageSync("clientbm");

    if(!clientbm) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }

    wx.navigateTo({
      url: '/pages/confirmation-oder/confirmation-oder?levelid=' + levelid,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})