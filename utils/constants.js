/**
 * 定义常量
 */
const storageKey = {
  // 本地存储使用的关键字
  token: 'TOKEN'
}

const apiKey = {
  loadArticleList: 'loadArticleList',
  loadPublishArticlePages: 'loadPublishArticlePages',
  getBdBosToken: 'getBdBosToken', // 获取百度上传图片token
  loadBlogPost: 'loadBlogPost', // 上传内容
  loadBlogById: 'loadBlogById' // 获取详情
}

export { storageKey, apiKey }
