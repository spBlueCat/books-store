<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'], //传递轮播图片的数据 this.swiperslides
    data() {
      return {
        swiperOption: {
          autoplay:3500,
          setWrapperSize:true,
          pagination:{
           el: '.swiper-pagination',
           type: 'bullets',
          },
          observeParents:true,
        },
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;}
</style>
