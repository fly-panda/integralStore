// pages/user/user-set/change-userinfo/change-username/change-username.js
const https = require('../../../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleTxt: '修改用户名',
    inputValue: '',
    disabledButton: false
  },
  getInputValue(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  updateName(){
    if (this.data.inputValue==""){
      wx.showToast({
        title: "请输入用户名",
        icon: "none",
        duration: 2000
      })
    }
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm,
      nickname: this.data.inputValue
    }
    https.wxRequest({
      url: "/member_modify_nickname/",
      data: query,
      success: res => {
        let r = res.data;
        if (res.data.returnvalue == 'true') {
          wx.showToast({
            title: "成功",
            icon: 'none',
            duration: 2000
          })
          wx.navigateTo({
            url: '/pages/user/user-set/change-userinfo/change-userinfo',
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: true
          })
        }
      }
    })
  },
  clearInput() {
    this.setData({
      inputValue: ''
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
    let userObj = wx.getStorageSync("userObj");
    this.setData({
      inputValue: userObj.nickname
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
  onShareAppMessage: function () {

  }
})