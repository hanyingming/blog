<template>
  <div class="blogDetail">
    <h1 class="title">文章标题</h1>
    <p class="summary">文章摘要</p>
    <div class="content">
      <pre>
        {{ content }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetailPage',
  data() {
    return {
      content: ' 文章详情 content <div style="font-size: 28px;">你好</div>'
    }
  },
  asyncData(context) {
    console.warn('params', context.params.id)
    return { project: 'nuxt' }
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
