const https = require('./https.js')

// 获取验证码
const getPhoneCode = (url, mobile) => {
  return new Promise((resolve, reject) => {
    https.wxRequest({
      url,
      method: 'GET',
      data: {mobile},
      success: res => { resolve(res) },
      fail: res => { reject(res) }
    })
  })
}


module.exports = {
  getPhoneCode
}