// pages/index/commodity/commodity.js
const config = require('../../../utils/config.js');
const https = require('../../../utils/https.js');

Page({

  /**
   * 页面的初始数据
   */
  prodcode: '',
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    vipData: [],
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
    console.log(options)
    
    this.prodcode = options.prodcode ? options.prodcode : ''
    let vipData = JSON.parse(options.vipData)

    https.wxRequest({
      url: 'index_showprod_show/',
      data: {
        prodcode: this.prodcode
      },
      success: res => {
        console.log(res)
      }
    })

    this.setData({
      vipData
    })
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