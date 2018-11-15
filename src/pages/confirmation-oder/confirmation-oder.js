// pages/confirmation-oder/confirmation-oder.js
const app = getApp();
const config = require('../../utils/config.js');
const https = require('../../utils/https.js');

Page({

  /**
   * 页面的初始数据
   */
  clientbm: wx.getStorageSync("clientbm"),
  data: {
    imgUrl: config.imgUrl,
    payType: 0, // 支付方式 0-微信支付，1-现金支付
    isUserJf: false,
    jcInfo: {},
    totalPrice: 0,
    isShowXj: true,
    isShowLoading: true,
    sendintegral: '',
    needmoney: ''
  },
  // 选择支付方式
  selectPayType(e) {
    let type = e.currentTarget.dataset.type 

    if (type == '1' && this.data.isShowXj) {
      this.setData({
        payType: type
      })
    }
    if(type == '0') {
      this.setData({
        payType: type
      })
    }
  },
  // 是否使用积分
  selectJf() {
    let isUserJf = !this.data.isUserJf
    // 积分抵扣的部分
    let kyjf = this.data.jcInfo.needmoney * 0.01    
    let totalPrice = isUserJf ? this.data.totalPrice - kyjf : this.data.totalPrice + kyjf
    this.setData({
      isUserJf, totalPrice
    })
  },
  changeAddress() {
    wx.navigateTo({
      url: '/pages/user/user-set/change-address/change-address',
    })
  },
  getAddress() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    https.wxRequest({
      url: 'member_basic_info/',
      data: { clientbm: this.clientbm},
      success: res => {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            let jcInfo = res.data
            jcInfo.shmobile = jcInfo.shmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')

            let isShowXj = jcInfo.needmoney * 0.01 + jcInfo.nowyue > this.data.totalPrice ? true : false
            
            this.setData({
              jcInfo,
              isShowXj,
              isShowLoading: false
            })
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)    
    let levellogo = options.levellogo ? options.levellogo : ''
    let levelname = options.levelname 
    let needmoney = options.needmoney
    let jddescr = options.jddescr
    let levelid = options.levelid
    let sendintegral = options.sendintegral
    this.setData({
      levellogo, levelname, needmoney, jddescr, levelid, sendintegral,
      totalPrice: needmoney
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
    this.getAddress()
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
  onShareAppMessage: function () {

  }
})