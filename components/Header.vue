<template>
  <header>
    <div class="container">
      <div class="left">
        logo
      </div>
      <div class="right">
        <ul class="items">
          <li class="item active">首页</li>
          <li class="item">关于</li>
          <li class="item">写博客</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  height: 56px;
  font-size: 16px;
  overflow: hidden;
  background: rgb(0, 196, 255);
}
header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  z-index: 10;
}
header .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 24px;
}
header .right,
header .right .items {
  height: 100%;
}
header .items {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
}
header .item {
  margin-left: 20px;
  padding: 6px 24px;
  transition: all 0.2s;
  cursor: pointer;
}
header .active {
  background: rgb(255, 153, 0);
  border-radius: 20px;
}
header .item:hover {
  background: rgb(255, 153, 0);
  border-radius: 20px;
}
</style>
