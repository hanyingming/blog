<template>
  <div class="clearfix">
    <a-upload
      name="file"
      list-type="picture-card"
      :before-upload="beforeUpload"
      :show-upload-list="true"
      :remove="handleRemoveImg"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < imgMount">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal
      style="position: relative; z-index: 999999999"
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="图片预览" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import { simpleUploadFile } from '@/utils/utils.js'

export default {
  props: {
    imgMount: {
      // 上传图片数量
      type: String,
      required: true
    }
  },
  data() {
    console.warn('imgMoutn:', this.imgMount)
    return {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  },
  methods: {
    beforeUpload(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        simpleUploadFile({
          vm: this.$store,
          $file: file
        }).then(res => {
          file.percent = 100
          file.status = 'done'
          file.response = {
            status: 'done',
            url: res.fileUrl
          }
          this.fileList = this.fileList.concat(file)
          this.$emit('change', this.fileList)
        })
      }
      return false // 阻止 upload 的默认提交事件
    },
    handleRemoveImg(file) {
      // 处理删除操作
      this.fileList = this.fileList.filter(item => item.uid !== file.uid)
      this.$emit('change', this.fileList)
      return true
    },
    handleCancel() {
      // 处理关闭预览模态框操作
      this.previewVisible = false
    },
    handlePreview(file) {
      // 处理预览图片操作
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    }
  }
}
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
