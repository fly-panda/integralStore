// pages/login/login.js
const app = getApp();
const config = require('../../utils/config.js');
const https = require('../../utils/https.js');
const utils = require('../../utils/util.js');
const rgexpPhone = /^1\d{10}$/


Page({

  /**
   * 页面的初始数据
   */
  maxTime: 60,
  currentTime: 60,  // 倒计时时间（单位：秒）
  interval: null,
  phoneNum: '',
  code: '',
  data: {
    txtMsg: '获取验证码',
    imgUrl: config.imgUrl,
    submitDisabled: true,
    codeStatus: true    
  },
  // 获取验证码
  getCode() {
    if (this.data.codeStatus) {
      if (!this.phoneNum) {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none'
        })
        return
      }

      if (rgexpPhone.test(this.phoneNum) == false) {
        wx.showToast({
          title: '手机号格式不正确',
          icon: 'none'
        })
        return
      }

      utils.getPhoneCode('login_send_code/', this.phoneNum).then((res) => {
        console.log(res)
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            console.log('成功')
            this.setData({
              codeStatus: false,
              txtMsg: this.currentTime + 's后重发'
            });
            this.interval = setInterval(() => {
              if (this.currentTime > 1) {
                this.currentTime--;
                this.setData({
                  txtMsg: this.currentTime + 's后重发'
                });
              } else {
                clearInterval(this.interval);
                this.currentTime = this.maxTime;
                this.setData({
                  codeStatus: true,
                  txtMsg: '免费获取'
                });
              }
            }, 1000);
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: "none"
            })
          }
        }
      })



    }
  },
  getPhoneNum(e) {
    this.phoneNum = e.detail.value
    let submitDisabled = this.phoneNum != '' && this.code != '' ? false : true
    console.log(submitDisabled)
    this.setData({
      submitDisabled
    })  
  },
  getCodeInput(e) {
    this.code = e.detail.value    
    let submitDisabled = this.phoneNum != '' && this.code != '' ? false : true
    this.setData({
      submitDisabled
    })    
  },
  login(e) {
    console.log(e)
    let phoneNum = e.detail.value.phoneNum
    let code = e.detail.value.code
    if (!phoneNum) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return
    }
    if (rgexpPhone.test(phoneNum) == false) {
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none'
      })
      return
    }
    if (!code) {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '登录中',
      mask: true
    })
    https.wxRequest({
      url: 'login/',
      data: {
        mobile: phoneNum,
        checkcode: code
      },
      success: res => {
        wx.hideLoading()
        console.log(res)
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            wx.setStorageSync('clientbm', res.data.clientbm)
            // 获取前一个页面，调用onLoad和onReady方法
            let pageList = getCurrentPages();
            let pageLength = pageList.length;

            // 如果pageLength 大于1时，跳转到前一页
            // if (pageLength > 1) {
            //   let prevPage = pageList[pageLength - 2];
            //   prevPage.onReady();
            //   wx.navigateBack();
            // } else {
              wx.switchTab({
                url: '/pages/index/index'
              })
            // }
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              mask: true
            })
          }
        }
      }
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
  signUp() {
    wx.navigateTo({
      url: '/pages/sign-up/sign-up',
    })
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