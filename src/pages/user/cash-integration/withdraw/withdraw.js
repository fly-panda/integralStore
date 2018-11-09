const config = require('../../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardNum: "6222231399234234234",
    names: "杨先生",
    balance: "230",//余额
    price: "",
  },
  txFun() {
    if (this.data.price == "") {
      wx.showToast({
        title: "请输入提现金额",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    console.log(this.data.price)
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
