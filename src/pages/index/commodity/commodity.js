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
    ],
    vipData: [],
    indicatorDots: true,
    indicatorColor: '#ccc',
    indicatorActiveColor: '#fff',
    autoplay: false,
    interval: 5000,
    duration: 1000,
    info: {},
    isShowLoading: true,
    detailInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    this.prodcode = options.prodcode ? options.prodcode : ''
    // let vipData = JSON.parse(options.vipData)
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    https.wxRequest({
      url: 'prod_show/',
      data: {
        prodcode: this.prodcode
      },
      success: res => {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            let resInfo = res.data
            let imgUrls = res.data.imglist 
            let detailInfo = res.data.proddescr
            console.log(res.data.imglist )        
            this.setData({
              vipData: resInfo.levellist,
              info: resInfo,
              isShowLoading: false,
              imgUrls,
              detailInfo
            })
          }
        }
      }
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