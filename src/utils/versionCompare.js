function versionCompare(a, b) {
  if (a === b) {
    return 0;
  }

  var a_components = a.split(".");
  var b_components = b.split(".");

  var len = Math.min(a_components.length, b_components.length);

  // loop while the components are equal
  for (var i = 0; i < len; i++) {
    // A bigger than B
    if (parseInt(a_components[i]) > parseInt(b_components[i])) {
      return 1;
    }

    // B bigger than A
    if (parseInt(a_components[i]) < parseInt(b_components[i])) {
      return -1;
    }
  }

  // If one's a prefix of the other, the longer one is greater.
  if (a_components.length > b_components.length) {
    return 1;
  }

  if (a_components.length < b_components.length) {
    return -1;
  }

  // Otherwise they are the same.
  return 0;
};

/*
 *  判断当前系统版本是否更高 
 */
function isSysVersionEqualOrHigher(v) {

  const sysInfo = wx.getSystemInfoSync();
  // console.log(sysInfo)
  // toFix: 修正开发者工具bug
  // if (sysInfo.platform == 'devtools') {
  //   sysInfo.version = '6.6.0';
  // }

  let status = versionCompare(sysInfo.version, v);
  if (status >= 0) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  versionCompare,
  isSysVersionEqualOrHigher
};