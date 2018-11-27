const app = getApp();
const https = require('../../../utils/https.js');
const config = require('../../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  name: '',
  address: '',
  phoneNum: '',
  phoneNum1: '',
  sex: '0',
  photo: '',
  data: {
    region: ['地址', '信', '息'],
    items: [
      { value: '先生', name: '0', checked: 'true' },
      { value: '女士', name: '1' },  
      { value: '保密', name: '2' },                
    ],
    buttonDisabled: true
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
    if (this.name && this.address && this.data.region.join('') != '地址信息') {
      this.setData({
        buttonDisabled: false
      })
    } else {
      this.setData({
        buttonDisabled: true
      })
    }
  },
  radioChange(e) {
    this.sex = e.detail.value
  },
  getInputValue(e) {
    let type = e.currentTarget.dataset.type 
    let value = e.detail.value.trim()
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
    } else {
      this.setData({
        buttonDisabled: true
      })
    }

  },
  getUserInfo(e) {
    console.log(e)
    // 授权获取头像
    if (e.detail.errMsg == "getUserInfo:ok") {
      this.photo = e.detail.userInfo.avatarUrl
      this.submitInfo()      
    }
    // 未授权获取不到头像
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {
      this.submitInfo()            
    }
  },
  submitInfo(e) {
    // wx.navigateBack(2)
    
    console.log(this.name)
    console.log(this.data.region)
    console.log(this.address)
    console.log(this.sex)
    wx.showLoading({
      title: '注册中',
      mask: true
    })
    https.wxRequest({
      url: 'reg_send_message/',
      data: {
        mobile: this.phoneNum,
        tjrmobile: this.phoneNum1,
        nickname: this.name,
        sex: this.sex,
        province: this.data.region[0],
        city: this.data.region[1],
        county: this.data.region[2],
        address: this.address,
        photo: this.photo
      },
      success: res => {
        console.log(res)
        wx.hideLoading()
        if (res.statusCode == '200') {
          if (res.data.returnvalue == 'true') {
            wx.setStorageSync('clientbm', res.data.clentbm)
            console.log(res.data.clientbm)
            // app.globalData.clentbm = res.data.clentbm
            wx.showToast({
              title: '注册成功',
              mask: true
            })
            setTimeout(()=>{
              wx.switchTab({
                url: '/pages/index/index'
              })
            }, 1500)
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.phoneNum = options.phoneNum ? options.phoneNum : ''
    this.phoneNum1 = options.phoneNum1 ? options.phoneNum1 : ''
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