// pages/confirmation-oder/confirmation-oder.js
const app = getApp();
const config = require('../../utils/config.js');
const https = require('../../utils/https.js');

Page({

  /**
   * 页面的初始数据
   */
  clientbm: '',
  data: {
    imgUrl: config.imgUrl,
    payType: 1, // 支付方式 0-微信支付，1-现金支付
    isUserJf: true,
    jcInfo: {},
    totalPrice: 0,
    isShowXj: true,
    isShowLoading: true,
    sendintegral: '',
    needmoney: 0, // 金额
    levelname: '',
    keyongJf: 0,  // 可以积分
    nowintegral: 0,  // 总积分
  },
  // 选择支付方式
  // selectPayType(e) {
  //   let type = e.currentTarget.dataset.type 

  //   if (type == '1' && this.data.isShowXj) {
  //     this.setData({
  //       payType: type
  //     })
  //   }
  //   if(type == '0') {
  //     this.setData({
  //       payType: type
  //     })
  //   }
  // },
  pay() {
    let PayType = ''
    let payType = this.data.payType
    let isUserJf = this.data.isUserJf

    if (payType == "0" && !isUserJf) { PayType = '1' }
    if (payType == "1" && !isUserJf) { PayType = '2' }
    if (payType == "0" && isUserJf) { PayType = '3' }
    if (payType == "1" && isUserJf) { PayType = '4' }

    console.log(PayType)
    wx.showLoading({
      title: '支付中',
      mask: true
    })
    https.wxRequest({
      url: 'member_confirm_order/',
      data: {
        clientbm: this.clientbm,
        levelId: this.data.levelid,
        PayType: PayType
      },
      success: res => {
        wx.hideLoading()
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            let orderbm = res.data.orderbm
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              mask: true
            })
            // 支付api
            // wx.requestPayment({
            //   timeStamp: '',
            //   nonceStr: '',
            //   package: '',
            //   signType: 'MD5',
            //   paySign: '',
            //   success(res) { },
            //   fail(res) { }
            // })

          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              mask: true
            })
          }
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: true
          })
        }
      }
    })
  },
  // 是否使用积分
  selectJf() {
    let isUserJf = !this.data.isUserJf
    if (this.data.nowintegral <= 0) { 
      this.setData({
        isUserJf
      })
      return 
    }
    let needmoney = parseInt(this.data.needmoney)
    // 积分抵扣的部分
    let keyongJf = this.keyongJfTools(needmoney) * 0.1 > this.data.nowintegral ? this.data.nowintegral : this.keyongJfTools(needmoney) * 0.1   
    // console.log(keyongJf)
    let totalPrice = isUserJf ? this.data.needmoney - keyongJf : this.data.needmoney
    this.setData({
      isUserJf, 
      totalPrice
    })
  },
  changeAddress() {
    wx.navigateTo({
      url: '/pages/user/user-set/change-address/change-address',
    })
  },
  getAddress() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    https.wxRequest({
      url: 'member_basic_info/',
      data: { clientbm: this.clientbm},
      success: res => {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            let jcInfo = res.data
            let nowintegral = jcInfo.nowintegral
            let keyongJf = 0
            jcInfo.shmobile = jcInfo.shmobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')

            // let isShowXj = jcInfo.needmoney * 0.01 + jcInfo.nowyue > this.data.totalPrice ? true : false

            if (nowintegral > 0) {
              let needmoney = parseInt(this.data.needmoney)
              keyongJf = this.keyongJfTools(needmoney) * 0.1 > nowintegral ? nowintegral : this.keyongJfTools(needmoney) * 0.1
              let totalPrice = this.data.needmoney - keyongJf
              this.setData({
                totalPrice,
                keyongJf
              })
            }

            this.setData({
              jcInfo,
              keyongJf,
              nowintegral,
              isShowLoading: false
            })
          }
        }
      }
    })
  },
  keyongJfTools(str) {
    let str1 = str + ''
    if (str1.length > 0) {
      let arr = str1.split('')
      arr.map((v, i) => {
        arr[i] = i > 0 ? 0 : v 
      })
      return parseInt(arr.join(''))
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)    
    let levellogo = options.levellogo ? options.levellogo : ''
    let levelname = options.levelname 
    let needmoney = options.needmoney
    let jddescr = options.jddescr
    let levelid = options.levelid
    let sendintegral = options.sendintegral
    this.clientbm = options.clientbm
    this.setData({
      levellogo, levelname, needmoney, jddescr, levelid, sendintegral,
      totalPrice: needmoney
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
    this.getAddress()
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