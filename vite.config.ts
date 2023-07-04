/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-07-04 09:17:56
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-04 09:26:31
 * @Description : vite 配置
 */
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './examples/main.js',
    },
  },
})
