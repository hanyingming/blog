<template>
  <div class="blogWrapper">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout">
        <a-input
          v-decorator="['title', titleConfig]"
          class="input"
          placeholder="文章标题"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
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
import Editor from '@/components/Editor.vue'
export default {
  components: {
    Editor
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
          sm: { span: 16 }
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
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
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
.input {
  max-width: 360px;
}
</style>
