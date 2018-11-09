const https = require('./https.js')

// 获取验证码
const getPhoneCode = (mobile) => {
  return new Promise((resolve, reject) => {
    https.wxRequest({
      url: 'api/reg_get_checkcode/?' + mobile,
      method: 'GET',
      success: res => { resolve(res) },
      fail: res => { reject(res) }
    })
  })
}


module.exports = {
  getPhoneCode
}