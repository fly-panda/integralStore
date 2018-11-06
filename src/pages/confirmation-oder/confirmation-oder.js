// pages/confirmation-oder/confirmation-oder.js
const app = getApp();
const config = require('../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: config.imgUrl,
    payType: 0, // 支付方式 0-微信支付，1-现金支付
    isUserJf: false 
  },
  selectPayType(e) {
    let type = e.currentTarget.dataset.type
    
    this.setData({
      payType: type
    })
  },
  selectJf() {
    let isUserJf = !this.data.isUserJf
    this.setData({
      isUserJf
    })
  },
  changeAddress() {
    wx.navigateTo({
      url: '/pages/user/user-set/change-address/change-address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  }
})