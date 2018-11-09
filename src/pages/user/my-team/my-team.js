// pages/user/my-team/my-team.js
const app = getApp();
const sysInfo = wx.getSystemInfoSync();
const config = require('../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: config.imgUrl +"ico_kongzhuangtai_dis@2x.png",
    scrollViewHeight: '',
    leftData: [
      {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      },
      {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      }, {
        name: '张三',
        job: 'vip',
        time: '2018/02/15'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let scrollViewHeight = sysInfo.screenHeight - app.globalData.navigationBarHeight
    this.setData({
      scrollViewHeight
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
  onShareAppMessage: function () {

  }
})