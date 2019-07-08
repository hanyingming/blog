/**
 * 定义数据接口层、数据处理
 */
import { apiKey } from '@/utils/index.js'

const {
  loadArticleList,
  loadPublishArticlePages,
  getBdBosToken,
  loadBlogPost,
  loadBlogById
} = apiKey

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
  },
  [getBdBosToken]: {
    url: 'grant/getBdBosToken',
    handler: ({ props, prop, resData }) => {
      console.warn('api, props:', props)
      console.warn('prop:', prop)
      console.warn('resData:', resData)
      return resData
    }
  },
  [loadBlogPost]: {
    url: 'blog/save',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    preHandleData: (params = {}) => JSON.stringify(params),
    handler: ({ props, prop, resData }) => {
      console.warn('api, props:', props)
      console.warn('prop:', prop)
      console.warn('resData:', resData)
      return resData
    }
  },
  [loadBlogById]: {
    url: 'blog/getBlogById',
    handler: ({ resData }) => resData
  }
}
