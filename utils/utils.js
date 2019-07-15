import { apiKey } from './constants.js'

const { getBdBosToken } = apiKey

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

// 校验字符串末尾处是否包含数据类型，并返回数据类型的默认数据
const checkoutIsEndWithDataType = str => {
  if (!str) return {}
  if (typeof str === 'string') {
    str = str.toLocaleLowerCase()
    if (str.endsWith('obj') || str.endsWith('object')) return {}
    if (str.endsWith('arr') || str.endsWith('array')) return []
    if (str.endsWith('int') || str.endsWith('integer')) return 0
    if (str.endsWith('str') || str.endsWith('string')) return ''
    if (str.endsWith('bol') || str.endsWith('boolean')) return ''
  }
  return {}
}

// 发起异步请求
const asyncReq = ({ vm, payload }) => {
  return vm.dispatch({
    type: 'asyncReqData',
    payload
  })
}

// bos文件上传
const simpleUploadFile = async ({ vm, $file }) => {
  let data = vm.state[getBdBosToken].data
  if (!data.sessionToken) {
    // token 不存在 重新获取
    const { prop } = await asyncReq({
      vm: vm,
      payload: {
        apiKey: getBdBosToken
      }
    })
    data = prop
  }
  const config = {
    credentials: {
      ak: data.accessKeyId,
      sk: data.secretAccessKey
    },
    sessionToken: data.sessionToken,
    endpoint: 'http://bj.bcebos.com'
  }
  const bosClient = new window.baidubce.sdk.BosClient(config)
  const key = `blog_${new Date().getMilliseconds()}_${$file.name}`
  let mimeType = window.baidubce.sdk.MimeType.guess(
    $file.name.split(/\./g).pop()
  )
  if (/^text\//.test(mimeType)) {
    mimeType += '; charset=UTF-8'
  }
  const options = {
    'Content-Type': mimeType
  }
  return bosClient
    .putObjectFromBlob('prod', key, $file, options)
    .then(() => {
      // 上传完成
      return {
        code: 200,
        fileUrl: `//prod.cdn.bcebos.com/${key}`
      }
    })
    .catch(err => {
      // 上传失败
      console.error(err)
      return {
        code: 600,
        fileUrl: ''
      }
    })
}

// 判断移动端还是pc
const getTerminalType = path => {
  // return process.isClient && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  if (!path) return
  if (path.includes('/pc/')) {
    return '/pc'
  } else if (path.includes('/wap/')) {
    return '/wap'
  } else {
    return ''
  }
}

export {
  checkIsStartWithLoad,
  checkoutIsEndWithDataType,
  asyncReq,
  simpleUploadFile,
  getTerminalType
}
