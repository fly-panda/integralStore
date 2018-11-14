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
  getPrice(e){
    this.setData({
      price: e.detail.value
    })
  },
  setCard(){
    wx.navigateTo({
      url: '/pages/user/user-set/change-userinfo/bank-card/bank-card',
    })
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
    if (this.data.price > this.data.balance){
      wx.showToast({
        title: "余额不足",
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
  onShow: function (e) {
    console.log(e)
    let userObj = wx.getStorageSync("userObj");
    this.setData({
      names: userObj.cardname,
      balance: userObj.nowyue,//余额
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
