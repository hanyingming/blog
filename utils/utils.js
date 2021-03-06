import store from '../store/index.js'

// 校验load
const checkIsStartWithLoad = str => {
  // true: 字符串load开头
  if (!str) return false
  if (typeof str === 'string') {
    return str.toLocaleLowerCase().startsWith('load') || false
  } else if (typeof str === 'symbol') {
    return (
      (str.description &&
        str.description.toLocaleLowerCase().startsWith('load')) ||
      false
    )
  }
  return false
}

// 发起异步请求
const asyncReq = payload => {
  console.warn(`store:`, store().state)
  return store().dispatch({
    type: 'asyncReqData',
    payload
  })
}

export { checkIsStartWithLoad, asyncReq }
