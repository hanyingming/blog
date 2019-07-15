<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <div class="main">
        <!-- 中间主题区域内容 -->
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
.wrapper {
  background: #ffffff;
  height: 100vh;
}
.wrapper .container {
  width: 100%;
  height: calc(100vh - 104px);
  overflow: auto;
  background: linear-gradient(bottom, #005bea, #00c6fb);
  background: -webkit-linear-gradient(bottom, #005bea, #00c6fb);
}
.wrapper .container::-webkit-scrollbar {
  display: none;
}
.wrapper .main {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
