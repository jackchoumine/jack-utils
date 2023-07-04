/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-07-04 09:58:27
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-04 10:03:34
 * @Description :
 */
import { describe, it, expect } from 'vitest'

import { clone } from './clone'

describe('clone', () => {
  it('复制对象', () => {
    const obj = { a: 1, b: 2 }
    const obj2 = clone(obj)
    expect(obj).toEqual(obj2)
  })
  it('复制数组', () => {
    const arr = [1, 2, { a: 1, b: 2 }]
    const arr2 = clone(arr)
    expect(arr).toEqual(arr2)
  })
})
