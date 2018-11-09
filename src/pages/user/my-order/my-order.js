const config = require('../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImgUrl: config.imgUrl + "ico_kongzhuangtai_dis@2x.png",
    orderImg: config.imgUrl + "ico_tianshihehuoren_dis@2x.png",
    listData:[
      {title:"天使合伙人",type:"微信支付+积分",status:"已发货",price:"1300",date:"2018/10/31"},
      { title: "天使合伙人", type: "微信支付+积分", status: "已发货", price: "1300", date: "2018/10/31" },
      { title: "天使合伙人", type: "微信支付+积分", status: "已发货", price: "1300", date: "2018/10/31" },
    ]
  },
  goto(){
    wx.switchTab({
      url: '/pages/index/index',
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