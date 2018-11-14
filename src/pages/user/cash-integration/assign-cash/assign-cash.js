const config = require('../../../../utils/config.js');
const reg = /^1\d{10}$/;
const https = require('../../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integra: "",
    phones: "",
    titles:"",
    types:""
  },
  integra(e) {
    this.data.integra = e.detail.value;
  },
  phones(e) {
    this.data.phones = e.detail.value;
  },
  ajaxTo(urls, query,pages){
    https.wxRequest({
      url: urls,
      data: query,
      success: res => {
        let r = res.data;
        wx.showToast({
          title: r.msg,
          icon: "none",
          duration: 2000
        });
        if (r.returnvalue == "true") {
          wx.navigateTo({
            url: pages,
          })
        }

      }
    });
  },
  confirm() {
    let self = this.data;
    let clientbm = wx.getStorageSync("clientbm");
    console.log(self.integra)
    if (self.integra == "") {
      wx.showToast({
        title: "请输入积分",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (self.phones == "") {
      wx.showToast({
        title: "请输入手机号",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (!reg.test(self.phones)) {
      wx.showToast({
        title: "手机号格式有误，请重新输入",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (self.types==1){
      let query = {
        clientbm: clientbm,
        transmobile: self.phones,
        integral: self.integra
      }
      this.ajaxTo("/member_integral_send/", query, '/pages/user/normal-integration/normal-integration');
    } else if (self.types ==2){
      console.log("转让现金积分")
      let query = {
        clientbm: clientbm,
        transmobile: self.phones,
        money: self.integra
      }
      this.ajaxTo("/member_money_send/", query, '/pages/user/cash-integration/cash-integration')
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      types: options.type,
      titles: options.type==1?'普通':'现金'
    });
    
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