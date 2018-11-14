// pages/user/my-team/my-team.js
const app = getApp();
const sysInfo = wx.getSystemInfoSync();
const config = require('../../../utils/config.js');
const https = require('../../../utils/https.js');
const utils = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  clientbm: '',
  data: {
    imgUrl: config.imgUrl +"ico_kongzhuangtai_dis@2x.png",
    scrollViewHeight: '',
    isShowLoading: true,
    leftData: [],
    rightData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let scrollViewHeight = sysInfo.screenHeight - app.globalData.navigationBarHeight
    this.setData({
      scrollViewHeight
    })
    this.clientbm = wx.getStorageSync("clientbm")

    this.getData(this.clientbm).then((res) => {
      console.log(res)
      if (res.statusCode == '200') {
        if (res.data.returnvalue == 'true') {
          let leftData = res.data.list
          leftData.map((v, i) => {
            if (i == 0) {
              v.select = true
            }
          })
          this.setData({
            leftData
          })

          let secondClientbm = leftData[0].clientbm
          this.getData(secondClientbm).then((res1) => {
            console.log(res1)
            if (res1.statusCode == '200') {
              wx.hideLoading()
              if (res1.data.returnvalue == 'true') {
                let rightData = res1.data.list
                this.setData({
                  rightData,
                  isShowLoading: false
                })
              }
            }
          })
        }
      }

    })

  },
  secondData(e) {
    console.log(e)
    let clientbm = e.currentTarget.dataset.clientbm
    let index = e.currentTarget.dataset.index
    let leftData = this.data.leftData

    leftData.map((v, i) => {
      v.select = i == index ? true : false
    })
    this.setData({ 
      leftData,
      rightData: []
    })

    this.getData(clientbm).then((res1) => {
      if (res1.statusCode == '200') {
        wx.hideLoading()
        if (res1.data.returnvalue == 'true') {
          let rightData = res1.data.list
          this.setData({
            rightData
          })
        }
      }
    })

  },
  getData(clientbm) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    return new Promise((resolve, reject) => {
      https.wxRequest({
        url: 'member_team/',
        data: {
          clientbm
        },
        success: res => {
          resolve(res)
        },
        fail: res => {
          reject(res)
        }
      })
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
  // onShareAppMessage: function () {

  // }
})