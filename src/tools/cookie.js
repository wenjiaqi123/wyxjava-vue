/**
 * 设置 cookie 键值对，默认7天
 * @param key
 * @param value
 */
export function setCookie(key, value, Days = 7) {
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";expires=" + exp.toGMTString();
}

/**
 * 根据 cookie 键 获取 对应值
 * @param name
 * @returns {*}
 */
export function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return arr[2];
  else
    return null;
}

/**
 * 根据 cookie 的键 删除 值
 * @param name
 */
export function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
