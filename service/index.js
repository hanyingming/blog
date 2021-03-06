/**
 * 定义数据接口层、数据处理
 */
import { apiKey } from '@/utils/index.js'

const { loadArticleList, loadPublishArticlePages } = apiKey

console.warn('apiKey: ', apiKey)

export default {
  [loadPublishArticlePages]: {
    url: 'blog/list',
    handler: ({ props, prop, resData }) => {
      console.warn('api, props:', props)
      console.warn('prop:', prop)
      console.warn('resData:', resData)
      return resData
    }
  },
  [loadArticleList]: {
    url: 'blog/list',
    handler: ({ props, prop, resData }) => {
      console.warn('api, props:', props)
      console.warn('prop:', prop)
      console.warn('resData:', resData)
      return resData
    }
  }
}
