/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-29 23:59:27
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-04 09:50:05
 * @Description :
 */
/**
 * 获取类型
 * @param {unknown} value 需要检查类型的值
 * @returns {string} 返回类型
 */
function type(value: unknown) {
  const typeStr = Object.prototype.toString.call(value)
  // console.log(typeStr)
  return typeStr.slice(8, -1).toLowerCase()
}

export { type }
