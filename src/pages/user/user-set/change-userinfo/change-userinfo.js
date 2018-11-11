// pages/user/user-set/user-set.js
const app = getApp();
const https = require('../../../../utils/https.js');
const config = require('../../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: config.imgUrl,
    username:"",
    sex:""
  },
  link(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
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
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm
    }
    https.wxRequest({
      url: "/member_basic_info/",
      data: query,
      success: res => {
        let r = res.data;
        this.setData({
          userName: r.nickname,
          headImg: r.photo,
          cash: r.nowyue,//现金积分
          ordinary: r.nowintegral,//普通积分
        });
        wx.setStorageSync("userObj", r);
        let userObj = wx.getStorageSync("userObj");
        this.setData({
          username: userObj.nickname,
          sex: userObj.sex == 0 ? '男' : (userObj.sex == 1 ? '女' : '保密')
        });
      }
    });
    

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