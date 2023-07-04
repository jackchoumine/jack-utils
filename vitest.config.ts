/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-07-03 17:34:08
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-04 10:13:56
 * @Description : vitest 配置
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // exclude: [
    //   'examples/**/*',
    //   'node_modules/**/*',
    //   'dist/**/*',
    //   '**/*.d.ts',
    //   '.history/**/*',
    // ],
    include: ['src/**/*.test.(ts|js)'],
  },
})
