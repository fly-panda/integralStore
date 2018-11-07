// pages/user/user-set/change-userinfo/change-sex/change-sex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      { key: "1", value: "男" },
      { key: "2", value: "女" },
      { key: "0", value: "保密" }
    ]
  },
  readKey(e) {
    var $data = e.currentTarget.dataset;
    console.log($data)  
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