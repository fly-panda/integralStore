// pages/index/commodity/commodity.js
const config = require('../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    vipData: [
      {
        imgUrl: config.imgUrl + 'images/ico_vip_dis@2x.png',
        title: 'VIP',
        color: '#F26132',
        tip: '价值1299的红酒一瓶\n获得20%的销售返利',
        prize: '399'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_tianshihehuoren_dis@2x.png',
        title: '天使合伙人',
        color: '#118BD9',
        tip: '价值2299的红酒一瓶\n获得20%的销售返利',
        prize: '1300'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_gaojihehuoren_dis@2x.png',
        title: '高级合伙人',
        color: '#B7905A',
        tip: '价值3299的红酒一瓶\n获得全部销售的20%返利',
        prize: '3900'
      },
      {
        imgUrl: config.imgUrl + 'images/ico_shiyehehuoren_dis@2x.png',
        title: '事业合伙人',
        color: '#06865D',
        tip: '价值3299的红酒一瓶\n获得全部销售的20%返利',
        prize: '3900'
      }
    ],
    indicatorDots: true,
    indicatorColor: '#ccc',
    indicatorActiveColor: '#fff',
    autoplay: false,
    interval: 5000,
    duration: 1000
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