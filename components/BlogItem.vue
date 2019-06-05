<template>
  <nuxt-link :to="'/article/detail/' + blogItem.id">
    <div class="itmeBlog">
      <div v-if="blogItem.avatar" class="avatarArea">
        <img :src="blogItem.avatar" alt="" />
      </div>
      <div class="detailArea">
        <h3 class="title">{{ blogItem.title }}</h3>
        <p class="content">
          {{ blogItem.content }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blogItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.itmeBlog {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 26px 24px;
  background: #ffffff;
}
.itmeBlog::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  border-bottom: 1px solid #f2f2f2;
}
.avatarArea {
  flex: 0 0 auto;
  width: 160px;
  margin-right: 20px;
  border-radius: 6px;
  overflow: hidden;
}
.avatarArea img {
  width: 100%;
}

.detailArea {
  flex: 0 1 auto;
  overflow: hidden;
}
.title {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 32px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content {
  font-size: 14px;
  color: #bbbbbb;
  line-height: 28px;
  letter-spacing: 0.1em;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
