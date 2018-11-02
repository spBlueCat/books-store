<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading">loading……</Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <h3>热门前端图书</h3>
        <div class="container">
          <ul>
            <li v-for="book in hotBooks">
              <img :src="book.bookCover" alt="">
              <b>《{{book.bookName}}》</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  //1.引入组件  2.注册组件 3.使用组件
  import MHeader from '../base/MHeader.vue'
  import Swiper from '../base/Swiper.vue'
  //import {getSliders,getHotBook} from  '../api'
  import {getAll} from "../api";
  import  Loading from  "../base/Loading.vue"

  export default {
    created() {
      // document.title = this.$route.meta.title; //页面加载前修改页面的标题
      this.getData();
      //this.getSlider(); //获取轮播图
      //this.getBook();  //获取最新图书
    },
    data() {
      return {sliders: [], hotBooks: [], loading: true}
    },
    methods: {
      async getData() {
        let [sliders, hotBooks] = await getAll(); // [sliders,hotBooks]
        this.sliders = sliders;
        this.hotBooks = hotBooks;
        // 已获取轮播图和热门图书
        this.loading = false;
      }
      /*async getBook(){
        this.hotBooks = await getHotBook();
      },
     async  getSlider(){
       //将获取的数据放到sliders中
       this.sliders = await getSliders();
     }*/


    },
    computed: {},
    components: {
      MHeader,
      Swiper,
      Loading
    }
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0
  }

  div::-webkit-scrollbar {display: none}

  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        margin: 5px 0;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
