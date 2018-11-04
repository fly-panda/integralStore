// ci环境接口
// const url = 'https://ck-static.yun.pingan.com/static/ci/backend/esg'; 
// 生产环境接口
const url = 'https://ziker-static.yun.pingan.com/static/backend/esg';

const wxRequest = function (param) {

  if (!param.method) {
    param.method = 'POST';
  }

  const method = param.method.toUpperCase();

  wx.request({
    url: url,
    method: method,
    data: param.data || {},
    success(res) {
      if (param.success) {
        param.success(res);
      }
    },
    fail(res) {
      wx.getNetworkType({
        success: function (res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          if (res.networkType == 'none') {
            wx.showModal({
              title: '网络异常',
              content: '当前网络不可用，请检查网络连接'
            })
          }
        }
      })
      if (param.fail) {
        param.fail(res);
      }
    },
    complete(res) {
      if (param.complete) {
        param.complete(res);
      }
    }
  });
}

module.exports = {
  wxRequest
};

