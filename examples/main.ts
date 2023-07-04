/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-07-04 09:26:49
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-07-04 09:31:48
 * @Description : 入口文件
 */
import './style.css'
// @ts-ignore
import typescriptLogo from './typescript.svg'
// @ts-ignore
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { clone } from '../src/clone'

const jack = {
  name: 'Jack',
  age: 10,
  address: {
    city: 'Shanghai',
    street: 'No. 123',
  },
}
const jack2 = clone(jack)
jack2.address.city = 'Beijing'
console.log(jack.address.city) // Shanghai

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
