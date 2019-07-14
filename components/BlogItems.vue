<template>
  <div class="blogItems">
    <BlogItem v-for="item in blogItems" :key="item.id" :blog-item="item" />
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem.vue'
import { asyncReq, apiKey } from '@/utils/index.js'

const { loadPublishArticlePages } = apiKey

export default {
  name: 'BlogItems',
  components: {
    BlogItem
  },
  props: {
    blogItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.blogItems {
}
</style>
