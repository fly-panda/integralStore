// pages/user/user-set/change-address/change-address.js
const https = require('../../../../utils/https.js');
const rgexpPhone = /^1\d{10}$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    region: ["北京市", "北京","东城"],
    address:""
  },
  getname(e){
    this.setData({
      name:e.detail.value
    })
  },
  getphone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getaddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindRegionChange(e){
    this.setData({
      region: e.detail.value
    })
  },
  submitInfo(e) {
    let datas=this.data;
    if (datas.name==""){
      wx.showToast({
        title: '请输入收货人',
        icon: 'none'
      })
      return false;
    }
    if (datas.phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return false;
    }
    if (rgexpPhone.test(datas.phone) == false) {
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none'
      })
      return
    }

    if (datas.address == "") {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none'
      })
      return false;
    }
    this.updateAddress();
  },
  updateAddress(){
    let datas=this.data;
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm,
      shman: datas.name,
      shmobile: datas.phone,
      province: datas.region[0],
      city: datas.region[1],
      country: datas.region[2],
      address: datas.address
    }
    https.wxRequest({
      url: "/member_modify_address/",
      data: query,
      success: res => {
        let r = res.data;
        if (res.data.returnvalue == 'true') {
          wx.showToast({
            title:"成功",
            icon: 'none',
            duration: 2000
          })
          wx.navigateBack(1)
          // wx.navigateTo({
          //   url: '/pages/user/user-set/user-set',
          // })
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
    let userObj = wx.getStorageSync("userObj");
    this.setData({
      name: userObj.shman,
      phone: userObj.shmobile,
      region: [userObj.province, userObj.city, userObj.country],
      address: userObj.address
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
  onShareAppMessage: function () {

  }
})