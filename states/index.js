// 定义vueX的基本数据格式类型
import { apiKey, checkoutIsEndWithDataType } from '@/utils/index.js'

const initStates = {}
Object.values(apiKey).forEach(item => {
  initStates[item] = {
    code: 0,
    data: checkoutIsEndWithDataType(item),
    message: ''
  }
})

// for (let i = 0; i < 2000; i++) {
//   initStates['kk' + i] = {}
// }

// console.warn(initStates, 'initStates')
const states = {
  ...initStates
}

// 校验 state的key的最后是否包含 Obj / Object/ Arrary /Arr/

export default states
