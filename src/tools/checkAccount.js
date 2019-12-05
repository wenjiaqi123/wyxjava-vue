/**
 * 校验手机号
 * @param iphoneNo
 * @returns {boolean} true表示是规范的手机号
 */
export function checkIphoneNo(iphoneNo) {
  if (!(/^1[3456789]\d{9}$/.test(iphoneNo))) {
    return false;
  }
  return true;
}

/**
 * 校验邮箱
 * @param email
 * @returns {boolean} true表示是规范的邮箱号
 */
export function checkEmail(email) {
  if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email))) {
    return false;
  }
  return true;
}

