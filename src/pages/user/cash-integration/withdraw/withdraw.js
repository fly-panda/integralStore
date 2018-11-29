const config = require('../../../../utils/config.js');
const https = require('../../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  clientbm: '',
  data: {
    cardNum: "6222231399234234234",
    names: "杨先生",
    balance: "",//余额
    price: "",
  },
  getPrice(e){
    this.setData({
      price: e.detail.value
    })
  },
  setCard(){
    wx.navigateTo({
      url: '/pages/user/user-set/change-userinfo/bank-card/bank-card',
    })
  },
  txFun() {
    if (this.data.price == "") {
      wx.showToast({
        title: "请输入提现金额",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (this.data.price == "0") {
      wx.showToast({
        title: "转让金额不能为0！",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (this.data.price > this.data.balance){
      wx.showToast({
        title: "余额不足",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (this.data.price < 300) {
      wx.showToast({
        title: "提现金额必须为300元以上",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    console.log(this.data.price)
    wx.showModal({
      title: '提示',
      content: '确认提现' + this.data.price + '元，提现收取千分之五手续费',
      success: res => {
        if (res.confirm) {
          wx.showLoading({
            title: '提现中',
            mask: true
          })
          https.wxRequest({
            url: 'member_apply_cash/',
            data: {
              clientbm: this.clientbm,
              money: this.data.price
            },
            success: res => {
              wx.hideLoading()
              console.log(res)
              if (res.statusCode == '200') {
                if (res.data.returnvalue == 'true') {
                  wx.showToast({
                    title: res.data.msg,
                    mask: true,
                    icon: 'none'
                  })
                  this.setData({
                    balance: this.data.balance - this.data.price
                  })
                }
              } else {
                wx.showToast({
                  title: res.data.msg,
                  mask: true,
                  icon: 'none'
                })
              }
            }
          })
        }
      },
      fail: res => {

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
  onShow: function (e) {
    console.log(e)
    // let userObj = wx.getStorageSync("userObj");
    // console.log(userObj)
    // this.setData({
    //   names: userObj.cardname,
    //   balance: userObj.nowyue,//余额
    //   cardNum: userObj.cardnumber
    // })
    this.clientbm = wx.getStorageSync("clientbm")
    // console.log(clientbm)
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    https.wxRequest({
      url: "/member_basic_info/",
      data: {
        clientbm: this.clientbm
      },
      success: res => {
        wx.hideLoading()
        let r = res.data;
        this.setData({
          names: r.cardname,
          balance: r.nowyue,//余额
          cardNum: r.cardnumber
        });
        wx.setStorageSync("userObj", r);
      }
    })

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
