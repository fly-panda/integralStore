// pages/index/vip/vip.js

const https = require('../../../utils/https.js');

Page({

  /**
   * 页面的初始数据
   */
  clientbm: '',
  levelid: '',  
  needmoney: '',
  levellogo: '',
  levelname: '',
  jddescr: '',
  data: {
    imgUrls: [], 
    indicatorDots: true,
    indicatorColor: '#ccc',
    indicatorActiveColor: '#fff',
    autoplay: false,
    interval: 5000,
    duration: 1000,
    info: {},
    isShowLoading: true,
    detailInfo: ''
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

  },
  goPay() {
    let levelid = this.levelid
    let needmoney = this.needmoney
    
    let sendintegral = this.data.info.sendintegral
    console.log(this.clientbm)
    if(!this.clientbm) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }

    wx.navigateTo({
      url: '/pages/confirmation-oder/confirmation-oder?levelid=' + levelid + '&needmoney=' + needmoney + '&jddescr=' + this.jddescr + '&levellogo=' + this.levellogo + '&levelname=' + this.levelname + '&sendintegral=' + sendintegral + '&clientbm=' + this.clientbm,
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
    this.clientbm = wx.getStorageSync("clientbm");
    console.log(this.clientbm)
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
            let imgUrls = res.data.imglist
            this.needmoney = res.data.needmoney
            this.jddescr = res.data.jddescr
            this.levellogo = res.data.levellogo
            this.levelname = res.data.levelname
            let detailInfo = res.data.descr
            this.setData({
              info,
              isShowLoading: false,
              imgUrls,
              detailInfo
            })
          }
        }
      }
    })
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