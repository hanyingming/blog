<template>
  <div class="blogWrapper">
    <a-form :form="form" class="eidtForm" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout">
        <a-input
          v-decorator="['title', titleConfig]"
          class="input"
          placeholder="文章标题"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <file-item v-decorator="['avatar', avatarConfig]" max-mount="3" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" class="editorArea">
        <editor v-decorator="['content', editorConfig]" />
      </a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        提交
      </a-button>
    </a-form>
    <!-- <div class="content">
      <editor></editor>
    </div> -->
  </div>
</template>

<script>
import { asyncReq, apiKey } from '@/utils/index.js'
import Editor from '@/components/Editor.vue'
import FileItem from '@/components/FileItem.vue'

const { getBdBosToken } = apiKey

export default {
  components: {
    Editor,
    FileItem
  },
  data() {
    return {
      title: '文章标题',
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        }
      },
      titleConfig: {
        rules: [
          {
            required: true,
            message: `请填写标题`
          }
        ]
      },
      editorConfig: {
        initialValue: {
          mdContent: '',
          htmlContent: ''
        },
        rules: [
          {
            type: `object`,
            required: true,
            validator: (rule, value, callback) => {
              if (value.mdContent === '') {
                // eslint-disable-next-line
                callback(`请填写内容`)
                return
              }
              callback()
            }
          }
        ]
      },
      avatarConfig: {
        initialValue: [],
        rules: [
          {
            type: `array`,
            required: true,
            validator: (rule, value, callback) => {
              if (value.length === 0) {
                // eslint-disable-next-line
                callback(`请上传图片`)
                return
              }
              callback()
            }
          }
        ]
      }
    }
  },
  fetch(context) {
    const blogId = context.route.params.id || 'add.html'
    if (blogId === 'add.html') {
      // 添加博客
      console.warn('add')
    } else {
      // 编辑博客
      console.warn('edit')
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  mounted() {
    if (!this.$store.state[getBdBosToken].sessionToken) {
      asyncReq({
        vm: this.$store,
        payload: {
          apiKey: getBdBosToken
        }
      })
    }
  },
  methods: {
    handleSubmit(e) {
      e && e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style scoped>
.blogWrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  padding: 30px 20px;
  margin: 0 auto;
}
.editForm {
  width: auto;
}
.editorArea {
  height: auto;
}
.input {
  max-width: 360px;
}
</style>
