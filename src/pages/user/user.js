// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: "http://47.93.13.54:333/zhangjiu/images/ico_touxiang@2x.png",
    ewmImg: "http://47.93.13.54:333/zhangjiu/images/ico_erweima@2x.png",
    userName:"杨先生",
    isLogin:false,
    cash:0,//现金积分
    ordinary:0,//普通积分
    icon1: "http://47.93.13.54:333/zhangjiu/images/ico_wodetuandui_dis@2x.png",
    icon2: "http://47.93.13.54:333/zhangjiu/images/ico_wodedingdan_dis@2x.png",
    icon3: "http://47.93.13.54:333/zhangjiu/images/Group 7@2x.png",
  },
  jumpLogin() {
    console.log("去登录")
    // wx.navigateTo({
    //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
    // })
  },
  jumpMa(){
    if (!this.isLogin){
      wx.showToast({
        title:"请登录",
        icon:"none",
        duration:2000
      })
    }else{
       // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
    }
  },
  jumpOrdinary(){
    if (!this.isLogin) {
      wx.showToast({
        title: "请登录",
        icon: "none",
        duration: 2000
      })
    } else {
      // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
    }
  },
  jumpCash(){
    if (!this.isLogin) {
      wx.showToast({
        title: "请登录",
        icon: "none",
        duration: 2000
      })
    } else {
      // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
    }
  },
  myTeam(){
    if (!this.isLogin) {
      wx.showToast({
        title: "请登录",
        icon: "none",
        duration: 2000
      })
    } else {
      // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
    }
  },
  myDan() {
    if (!this.isLogin) {
      wx.showToast({
        title: "请登录",
        icon: "none",
        duration: 2000
      })
    } else {
      // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
    }
  },
  userAcc() {
    if (!this.isLogin) {
      wx.showToast({
        title: "请登录",
        icon: "none",
        duration: 2000
      })
    } else {
      // wx.navigateTo({
      //   // url: '/pages/index/cargoApplyFor/cargoApplyFor',
      // })
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