<template>
  <div>
    <section class="banners">
      <banner-list :banners="blogBanners"></banner-list>
    </section>
    <section class="blogItems">
      <blog-items :blog-items="blogItems" />
    </section>
  </div>
</template>

<script>
import BannerList from '@/components/BannerList'
import BlogItems from '@/components/BlogItems.vue'
import { asyncReq, apiKey } from '../../utils/index'

const { loadBlogBanners, loadPublishArticlePages } = apiKey

export default {
  components: {
    BannerList,
    BlogItems
  },
  data() {
    return {
      title: '首页',
      blogBanners: [],
      blogItems: {}
    }
  },
  // computed: mapState({
  //   blogBanners: state => state[loadBlogBanners].data
  // }),
  asyncData(context) {
    return Promise.all([
      asyncReq({
        vm: context.store,
        payload: {
          apiKey: loadBlogBanners,
          params: {
            type: 'pcBanner'
          }
        }
      }),
      asyncReq({
        vm: context.store,
        payload: {
          apiKey: loadPublishArticlePages,
          params: {
            page: 0,
            pageSize: 10
          }
        }
      })
    ]).then(res => {
      const banners = (res[0] && res[0].prop && res[0].prop.data) || []
      const blogItems =
        (res[1] && res[1].prop && res[1].prop.data && res[1].prop.data.list) ||
        []
      return {
        blogBanners: banners,
        blogItems: blogItems
      }
    })

    // Promise.all([
    //   context.store.dispatch({
    //     type: 'asyncReqData',
    //     payload: {
    //       apiKey: loadBlogBanners,
    //       params: {
    //         type: 'pcBanner'
    //       }
    //     }
    //   }),
    //   context.store.dispatch({
    //     type: 'asyncReqData',
    //     payload: {
    //       apiKey: loadPublishArticlePages,
    //       params: {
    //         page: 0,
    //         pageSize: 10
    //       }
    //     }
    //   })
    // ]).then(res => {
    //   console.warn('resxxx:', res[0])
    // })
    // return .then(({ prop }) => {
    //   return {
    //     blogBanners: prop && prop.data
    //   }
    // })
    // const { prop } = await asyncReq({
    //   vm: context.store,
    //   payload: {
    //     apiKey: loadBlogBanners,
    //     params: {
    //       type: 'pcBanner'
    //     }
    //   }
    // })
    // return {
    //   blogBanners: prop && prop.data
    // }
  }
}
</script>
<style scoped></style>
