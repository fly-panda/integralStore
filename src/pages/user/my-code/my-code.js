// pages/user/my-code/my-code.js
const app = getApp();
const config = require('../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: config.imgUrl + "ico_touxiang@2x.png",
    codeImg: '',
    username: "杨先生",
    address: "北京朝阳"

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
    let userObj = wx.getStorageSync('userObj');
    let clientbm = wx.getStorageSync("clientbm");
    let codeImg = `https://zj.meych.com/erweima/${clientbm}.jpg`
    this.setData({
      headImg: userObj.photo,
      username: userObj.nickname,
      address: userObj.province + " " + userObj.country,
      codeImg
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