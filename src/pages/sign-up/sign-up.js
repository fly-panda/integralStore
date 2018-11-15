// pages/login/login.js
const app = getApp();
const config = require('../../utils/config.js');
const utils = require('../../utils/util.js');
const https = require('../../utils/https.js');

const rgexpPhone = /^1\d{10}$/


Page({

  /**
   * 页面的初始数据
   */
  maxTime: 60,
  currentTime: 60,  // 倒计时时间（单位：秒）
  interval: null,
  phoneNum: '',
  phoneNum1: '',
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



      utils.getPhoneCode('reg_get_checkcode/', this.phoneNum).then((res) => {
        console.log(res)

        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
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
              icon: 'none'
            })
          }
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      })
    }
  },
  getPhoneNum(e) {
    this.phoneNum = e.detail.value
    let submitDisabled = this.phoneNum != '' && this.code != '' && this.phoneNum1 != '' ? false : true
    this.setData({
      submitDisabled
    })
  },
  getPhoneNum1(e) {
    this.phoneNum1 = e.detail.value
    let submitDisabled = this.phoneNum != '' && this.code != '' && this.phoneNum1 != '' ? false : true
    this.setData({
      submitDisabled
    })
  },
  getCodeInput(e) {
    this.code = e.detail.value
    let submitDisabled = this.phoneNum != '' && this.code != '' && this.phoneNum1 != ''  ? false : true
    this.setData({
      submitDisabled
    })
  },
  signUp(e) {
    console.log(e)
    let phoneNum = e.detail.value.phoneNum
    let code = e.detail.value.code
    let phoneNum1 = e.detail.value.phoneNum1

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

    if (!phoneNum1) {
      wx.showToast({
        title: '推荐人手机号不能为空',
        icon: 'none'
      })
      return
    }

    if (rgexpPhone.test(phoneNum1) == false) {
      wx.showToast({
        title: '推荐人手机号格式不正确',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '提交中',
      mask: true
    })
    https.wxRequest({
      url: 'reg_check_code/',
      data: {
        mobile: phoneNum,
        checkcode: code,
        tjrmobile: phoneNum1
      },
      success: res => {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode == '200') {
          wx.hideLoading()
          if (res.data.returnvalue == 'true') {
            wx.navigateTo({
              url: '/pages/sign-up/sign-up-info/sign-up-info?phoneNum=' + phoneNum + '&phoneNum1=' + phoneNum1,
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
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