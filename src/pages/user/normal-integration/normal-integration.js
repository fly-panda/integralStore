const config = require('../../../utils/config.js');
const https = require('../../../utils/https.js');
const reg = /^1\d{10}$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: config.imgUrl + "head-bg.png",
    normal: 0,//当前积分
    hbImg: config.imgUrl + "ico_hongbao_dis@2x.png",
    integra:"",
    phones:"",
    listData:[
      
    ]
  },
  confirm(){
    let self=this.data;
    wx.navigateTo({
      url: '/pages/user/cash-integration/assign-cash/assign-cash?type=1',
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
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm
    }
    https.wxRequest({
      url: "/member_integral_list/",
      data: query,
      success: res => {
        let r = res.data;
        this.setData({
          normal:r.nowintegral,
          listData: r.integrallist
        });
        // "itage"//类型（1、购买会员级别获得 2、积分转入获得 3、积分转出扣除 4、购买会员抵扣使用）

      }
    });
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