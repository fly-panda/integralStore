const app = getApp();
const https = require('../../../utils/https.js');
const config = require('../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  name: '',
  address: '',
  data: {
    region: ['地址', '信', '息'],
    items: [
      { value: '先生', name: '0', checked: 'true' },
      { value: '女士', name: '1' },      
    ],
    buttonDisabled: true
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    if (this.name && this.address && this.data.region.join('') != '地址信息') {
      this.setData({
        buttonDisabled: false
      })
    }
  },
  getInputValue(e) {
    let type = e.currentTarget.dataset.type 
    let value = e.detail.value.trim()
    console.log(value)
    if(type == 'name') {
      this.name = value
    }
    if(type == 'address') {
      this.address = value
    }

    if (this.name && this.address && this.data.region.join('') != '地址信息') {
      this.setData({
        buttonDisabled: false
      })
    }

  },
  getUserInfo(e) {
    console.log(e)
    // 授权
    if (e.detail.errMsg == "getUserInfo:ok") {

    }
    // 未授权
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {

    }
  },
  submitInfo() {

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