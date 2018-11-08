const config = require('../../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: config.imgUrl +"images/head-bg.png",
    integral:125,//当前积分
    hbImg: config.imgUrl + "images/ico_hongbao_dis@2x.png",
    listData:[
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/28" },
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/29" },
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/30" },
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/28" },
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/29" },
      { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/30" }
    ]
  },
  goAssign(){
    wx.navigateTo({
      url: '/pages/user/cash-integration/assign-cash/assign-cash',
    })
  },
  goWithdraw(){
    wx.navigateTo({
      url: '/pages/user/cash-integration/withdraw/withdraw',
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