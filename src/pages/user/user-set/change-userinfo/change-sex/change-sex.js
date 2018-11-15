// pages/user/user-set/change-userinfo/change-sex/change-sex.
const https = require('../../../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      { key: 0, value: "男" },
      { key: 1, value: "女" },
      { key: 2, value: "保密" }
    ],
    typeId:2
  },
  readKey(e) {
    var $data = e.currentTarget.dataset;
    this.setData({
      typeId: $data.id
    })
    this.updateSex();
    console.log($data)  
  },
  updateSex(){
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm,
      sex: this.data.typeId
    }
    https.wxRequest({
      url: "/member_modify_sex/",
      data: query,
      success: res => {
        let r = res.data;

        if (res.data.returnvalue == 'true') {
          wx.showToast({
            title: "成功",
            icon: 'none',
            duration: 2000
          })
          wx.navigateBack(-1)
          // wx.navigateTo({
          //   url: '/pages/user/user-set/change-userinfo/change-userinfo',
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
      typeId: userObj.sex
    })
    console.log(this.data.typeId)
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