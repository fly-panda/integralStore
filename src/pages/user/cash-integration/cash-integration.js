const config = require('../../../utils/config.js');
const https = require('../../../utils/https.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: config.imgUrl + "head-bg.png",
    integral: 0,//当前积分
    hbImg: config.imgUrl + "ico_hongbao_dis@2x.png",
    suImg: config.imgUrl + "Groupsuc.png",
    isCard: "",
    listData: [
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/28" },
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/29" },
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/30" },
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/28" },
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/29" },
      // { title: "悠果果成为事业合伙人", price: 20, date: "2018/10/30" }
    ]
  },
  goAssign() {
    wx.navigateTo({
      url: '/pages/user/cash-integration/assign-cash/assign-cash?type=2',
    })
  },
  goWithdraw() {
    if (this.data.isCard == "") {
      wx.navigateTo({
        url: '/pages/user/user-set/change-userinfo/bank-card/bank-card',
      })
    } else {
      wx.navigateTo({
        url: '/pages/user/cash-integration/withdraw/withdraw',
      })
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
  getData() {
    wx: wx.showLoading({
      title: '加载中',
      mask: true
    })
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm
    }
    https.wxRequest({
      url: "/member_money_list/",
      data: query,
      success: res => {
        if (res.statusCode == '200') {
          wx.hideLoading()
          if (res.data.returnvalue == 'true') {
            this.setData({
              integral: res.data.nowyue,
              listData: res.data.list
            })
          }
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // let userObj = wx.getStorageSync("userObj");
    // this.setData({

    //   isCard: userObj.cardnumber
    // });
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    let clientbm = wx.getStorageSync("clientbm");
    let query = {
      clientbm: clientbm
    }
    https.wxRequest({
      url: "/member_basic_info/",
      data: query,
      success: res => {
        wx.hideLoading()
        let r = res.data;
        wx.setStorageSync("userObj", r);
        this.setData({
          isCard: r.cardnumber ? r.cardnumber : ''
        });
      }
    });


    this.getData();
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