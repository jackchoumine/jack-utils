import { describe, it, expect } from 'vitest'
import { type } from './type'

describe('基础类型测试', () => {
  // 基础类型测试
  it('string', () => {
    expect(type('1')).toBe('string')
  })
  it('new String', () => {
    const str = new String('1')
    expect(type(str)).toBe('string')
  })
  it('number', () => {
    expect(type(1)).toBe('number')
  })
  it('number', () => {
    const num = new Number(1)
    expect(type(num)).toBe('number')
  })
  it('number', () => {
    const num = Number(1)
    expect(type(num)).toBe('number')
  })
  it('true', () => {
    expect(type(true)).toBe('boolean')
  })
  it('undefined', () => {
    expect(type(undefined)).toBe('undefined')
  })
  it('symbol', () => {
    const s = Symbol()
    expect(type(s)).toBe('symbol')
  })
})

describe('引用类型测试', () => {
  // 引用类型测试
  it('null', () => {
    expect(type(null)).toBe('null')
  })
  it('object', () => {
    expect(type({})).toBe('object')
  })

  it('[]', () => {
    expect(type([1, 2])).toBe('array')
  })
  it('function', () => {
    const fn = () => {}
    expect(type(fn)).toBe('function')
  })
  it('regex', () => {
    const regexp = /[1-2]*/g
    expect(type(regexp)).toBe('regexp')
  })
  it('new Regex', () => {
    const regexp = new RegExp('[1-2]*', 'g')
    expect(type(regexp)).toBe('regexp')
  })
  it('new Date', () => {
    const date = new Date()
    expect(type(date)).toBe('date')
  })
  it('Date', () => {
    const date = Date()
    expect(type(date)).toBe('string')
  })
})
