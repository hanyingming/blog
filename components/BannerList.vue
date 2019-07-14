<template>
  <div>
    <a-skeleton
      v-if="!banners || banners.length === 0"
      :paragraph="{ rows: 10 }"
      active
    />
    <div v-else class="pc-banner">
      <div
        ref="mySwiper"
        v-swiper:mySwiper="swiperOption"
        class="swiper-container"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(banner, index) in banners"
            :key="index"
            class="swiper-slide"
          >
            <div class="title">{{ banner.title }}</div>
            <img class="swiper-lazy" :data-src="banner.imgUrl" alt="" />
            <div class="swiper-lazy-preloader"></div>
            <div class="subTitle">{{ banner.subTitle }}</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="button">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerList',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 2,
        autoplay: 3000,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        lazyLoading: true,
        watchSlidesVisibility: true,
        // lazyLoadingInPrevNext: true,
        lazyLoadingOnTransitionStart: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: () => {
          console.warn('banners: ', this.banners)
          setTimeout(() => {
            if (this.$refs.mySwiper.swiper.slides[2])
              this.$refs.mySwiper.swiper.slides[2].className =
                'swiper-slide swiper-slide-active'
          }, 100)
        },
        breakpoints: {
          668: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    callback() {}
  }
}
</script>
<style scoped>
.bannerList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 24px;
}
.bannerItem {
  position: relative;
  height: 100%;
  width: 32%;
  cursor: pointer;
  overflow: hidden;
  flex: 0 0 auto;
  margin-right: 2%;
}
.bannerItem img {
  width: 100%;
}
.title {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  text-align: left;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  padding: 0 12px;
}
.subTitle {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -72px;
  width: 100%;
  max-height: 72px;
  line-height: 24px;
  font-size: 12px;
  text-align: left;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.2s;
}
.bannerItem:hover .subTitle {
  opacity: 1;
  bottom: 0;
}
</style>
<style lang="less">
.pc-banner {
  opacity: 0.9;
  width: 100%;
  .swiper-container {
    width: 100%;
    padding: 35px 0;
  }
  .swiper-slide {
    position: relative;
    min-height: 220px;
    -webkit-transition: transform 1s;
    -moz-transition: transform 1s;
    -ms-transition: transform 1s;
    -o-transition: transform 1s;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }

  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .none-effect {
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
  }

  .swiper-slide a {
    background: #fff;
    padding: 10px;
    display: block;
    border-radius: 14px;
  }

  .swiper-slide-active a:after {
    background: none;
  }

  .swiper-slide img {
    width: 100%;
    border-radius: 14px;
    display: block;
  }
  .swiper-pagination {
    position: relative;
    margin-bottom: 30px;
  }
  .swiper-pagination-bullet {
    background: #00a0e9;
    margin-left: 4px;
    margin-right: 4px;
    width: 17px;
    height: 17px;
    opacity: 1;
    margin-bottom: 4px;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .button {
    width: 1000px;
    margin: 0 auto;
    bottom: 43px;
    position: relative;
  }

  .button div:hover {
    background-color: #2f4798;
  }

  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")
      #00a0e9 center no-repeat;
    background-size: 40%;
  }

  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")
      #00a0e9 center no-repeat;
    background-size: 40%;
  }
}

@media screen and (min-width: 668px) {
  .swiper-slide a:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    border: 10px solid #fff;
    content: '';
    width: 100%;
    height: 100%;
    /*background: url(images/top_slick_cover_bg01.png) 0 0 repeat;*/
    border-radius: 20px;
  }
}

@media screen and (max-width: 668px) {
  .pc-banner {
    background-size: auto 100%;
    .swiper-container {
      margin: 20px 0 15px;
    }
    .swiper-slide {
      -webkit-transform: scale(0.97);
      transform: scale(0.97);
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      -webkit-transform: scale(0.97);
      transform: scale(0.97);
    }
    .swiper-slide a {
      padding: 5px;
      border-radius: 7px;
    }
    .swiper-slide img {
      border-radius: 7px;
    }
    .swiper-pagination {
      position: relative;
      margin-bottom: 20px;
    }
    .swiper-pagination-bullet {
      background: #00a0e9;
      margin-left: 2px;
      margin-right: 2px;
      width: 8px;
      height: 8px;
      margin-bottom: 2px;
    }
    .swiper-pagination-bullet-active {
      background: #ffffff;
    }
    .button {
      width: 70%;
      bottom: 22px;
    }
    .button div {
      width: 28px;
      height: 28px;
    }
  }
}
</style>
