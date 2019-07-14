<template>
  <div class="blogDetail">
    <h1 class="title">{{ blogData.title }}</h1>
    <p class="summary">{{ blogData.summary }}</p>
    <div class="content">
      <pre>
        {{ blogData.htmlContent }}
      </pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { asyncReq, apiKey } from '@/utils/index.js'

const { loadBlogById } = apiKey

export default {
  name: 'BlogDetailPage',
  data() {
    return {
      content: ' 文章详情 content <div style="font-size: 28px;">你好</div>'
    }
  },
  computed: mapState({
    blogData: state => state[loadBlogById].data
  }),
  async fetch(context) {
    // 判断是否含有缓存数据
    // 获取详情
    await asyncReq({
      vm: context.store,
      payload: {
        apiKey: loadBlogById,
        params: {
          id: context.route.params.id
        }
      }
    })
  }
}
</script>

<style scoped>
.blogDetail {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  padding: 0 24px;
}
.title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 32px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.summary {
  font-size: 14px;
  color: #bbbbbb;
  line-height: 28px;
  letter-spacing: 0.1em;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.content {
}
</style>
