// pages/user/user-set/change-userinfo/bank-card/bank-card.js
const https = require('../../../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitDisabled: false,
    cardNum:"",
    name:"",
    bankInfo:""
  },
  getCardNum(e){
    this.setData({
      cardNum: e.detail.value
    })
  },
  getBankInfo(e) {
    this.setData({
      bankInfo: e.detail.value
    })
  },
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  clearFun(){
    this.setData({
      cardNum: ""
    })
  },
  updateBank(){
    let datas=this.data;
    console.log(datas)
    let query = {
      clientbm: 15627,
      cardnumber: datas.cardNum,
      cardname: datas.name,
      cardbank: datas.bankInfo
    }
    https.wxRequest({
      url: "/member_modify_bankinfo/",
      data: query,
      success: res => {
        let r = res.data;
        if(r.returnvalue){
          wx.showToast({
            title: "成功",
            icon: "none",
            duration: 2000
          })
        }
        wx.navigateTo({
          url: '/pages/user/user-set/change-userinfo/change-userinfo',
        })
      }
    })
  },
  submitInfo(){
    let datas=this.data;
    console.log(datas)
    if (datas.cardNum==""){
      wx.showToast({
        title: "请输入卡号",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (datas.name == "") {
      wx.showToast({
        title: "请输入姓名",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (datas.bankInfo == "") {
      wx.showToast({
        title: "请输入开户行",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    this.updateBank();
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
      cardNum: userObj.cardnumber,
      name: userObj.cardname,
      bankInfo: userObj.cardbank,
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