const config = require('../../../utils/config.js');
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
    phones:""
  },
  integra(e){
    this.data.integra = e.detail.value;
  },
  phones(e) {
    this.data.phones = e.detail.value;
  },
  confirm(){
    let self=this.data;
    console.log(self.integra)
    if (self.integra==""){
      wx.showToast({
        title: "请输入积分",
        icon: "none",
        duration: 2000
      })
      return false;
    }
    if (self.phones == "") {
      wx.showToast({
        title: "请输入手机号",
        icon: "none",
        duration: 2000
      })
      return false;
    }else{
      if (!reg.test(self.phones)){
        wx.showToast({
          title: "手机号格式有误，请重新输入",
          icon: "none",
          duration: 2000
        })
        return false;
      }else{
        console.log("可以提交")
      }
    }
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
    let userObj=wx.getStorageSync("userObj");
    this.setData({
      normal:userObj.nowintegral
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