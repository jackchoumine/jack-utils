/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-29 20:19:57
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-03 17:29:00
 * @Description : 深复制
 */
import { type } from './type'
// import from from 'core-js/features/array/from'
/**
 * 深度复制
 * @param {any} source
 * @returns
 */
function clone(source) {
  const t = type(source)
  if (!['object', 'array'].includes(t)) return source
  let target
  if (t === 'array') {
    target = []
    const len = source.length
    let i = 0
    while (i < len) {
      target[i] = clone(source[i])
      i++
    }
  } else if (t === 'object') {
    target = {}
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = clone(source[key])
      }
    }
  }
  return target
}

function last(arr) {
  return arr.at(-1)
}

export { last, clone }
