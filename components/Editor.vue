<template>
  <div class="mavonEditor">
    <no-ssr>
      <mavon-editor
        ref="md"
        :value="val"
        :toolbars="markdownOption"
        @imgAdd="$imgAdd"
        @change="$change"
      />
    </no-ssr>
  </div>
</template>

<script>
import { asyncReq, apiKey, simpleUploadFile } from '@/utils/index.js'
const { getBdBosToken } = apiKey

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    console.warn(this.value)
    return {
      val: (this.value && this.value.mdContent) || '',
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  mounted() {
    console.warn('getBdBosToken:', getBdBosToken)
    console.warn('asyncReq:', asyncReq)
    // asyncReq({
    //   apiKey: getBdBosToken
    // }).then(({ props, preProp, prop }) => {
    //   console.warn('preProp:', preProp)
    //   console.warn('props,:', props)
    //   console.warn('prop,:', prop)
    // })
  },
  methods: {
    $change(value, render) {
      console.warn('render:', render)
      this.$emit('change', {
        mdContent: value,
        htmlContent: render
      })
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      simpleUploadFile({
        $vm: this,
        $file
      }).then(res => {
        if (res.code !== 300) {
          // 更换图片地址
          this.$refs.md.$img2Url(pos, res.fileUrl)
        }
      })
    }
  }
}
</script>
<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
}
</style>
