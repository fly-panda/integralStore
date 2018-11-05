const app = getApp();

Component({
  properties: {
    backgroundColor: {
      type: String,
      value: 'linear-gradient(0deg, #2C2D31 1%, #101013 100%)'
    },
    borderColor: {
      type: String,
      value: '#eee'
    },
    textColor: {
      type: String,
      value: '#fff'
    },
    title: {
      type: String,
      value: ''
    },
    isIndex: {
      type: Boolean,
      value: false
    },
    isShowBack: {
      type: Boolean,
      value: true
    },
    isJiantou: {
      type: Boolean,
      value: true
    },
    isPlaceholder: {
      type: Boolean,
      value: true
    },
    titleColor: {
      type: String,
      value: '#333'
    },
    navBorderBottom: {
      type: Boolean,
      value: true
    }
  },
  data: {
    versionStatus: true
  },
  methods: {
    index() {
      wx.switchTab({
        url: "/pages/index/index"
      })
    },
    back() {
      // 获取前一个页面，调用onLoad和onReady方法
      let pageList = getCurrentPages();
      let pageLength = pageList.length;

      // 如果pageLength 大于1时，跳转到前一页
      if (pageLength > 1) {
        let prevPage = pageList[pageLength - 2];
        prevPage.onReady();
        wx.navigateBack();
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }

    }
  },
  ready() {
    // 判断微信版本适配状态栏，要求最低版本6.6.0
    // let versonStatus = verson.isSysVersionEqualOrHigher('6.6.0');
    
    // if (versonStatus) {
      // 获取设备信息
      let paddingTop = app.globalData.statusBarHeight + 12;
      this.setData({
        navigationBarHeight: app.globalData.navigationBarHeight,
        paddingTop
      })
    // } else {
    //   this.setData({
    //     versionStatus: false
    //   })
    // }

  }
})