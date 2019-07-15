<template>
  <base-frame v-if="getTerminalType() === '/pc'" class="container">
    <nuxt />
  </base-frame>
  <div v-else>
    <nuxt />
  </div>
</template>

<script>
import BaseFrame from '@/components/BaseFrame'
import { getTerminalType } from '@/utils'

export default {
  components: {
    BaseFrame
  },
  methods: {
    getTerminalType() {
      console.warn(getTerminalType(this.$route.path))
      return getTerminalType(this.$route.path)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
ul,
li {
  list-style-type: none;
}
</style>
