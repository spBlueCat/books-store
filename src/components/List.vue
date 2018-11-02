<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img v-lazy="book.bookCover" class="bookImg">
          <div>
            <h4>《{{book.bookName}}》</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥{{book.bookPrice}}</b>
            <div class="btn-list">
            <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop="addBook(book)">收藏</button>
            </div>
          </div>
        </router-link>
      </ul>
      <div class="more" @click="moreBooks">加载更多图书</div>
    </div>
  </div>
</template>

<script>
  import {pagination, removeBook} from '../api'
  import MHeader from '../base/MHeader.vue'
  import  * as Types from '../store/mutations-type'
  export default {
    data() {
      // offset代表偏移量  hasMore表示是否有更多图书
      return {books: [], offset: 0, hasMore: true, isLoading: false}
    },
    mounted() {
      let scroll = this.$refs.scroll; //获取要拖拽的元素
      let top = scroll.offsetTop;
      let distance = 0;
       let isMove = false;
      scroll.addEventListener('touchstart', (e) => {
        if (scroll.scrollTop != 0 && scroll.offsetTop == top) return;  //滚动条在最顶端时，并且当前盒子在顶端时 才继续走
        let start = e.touches[0].pageY; //手指点击的位置
        let move = (e) => {
          isMove = true;
          let current = e.touches[0].pageY;
          distance = current - start; //求的是拉动的距离 舍去负值
          if (distance > 0) { //如果大于50 则拉动的距离为50像素
            if (distance <= 50) {
              scroll.style.top = distance + top + 'px';
            } else {
              distance = 50;
              scroll.style.top = top + 50 + 'px';
            }
          } else {
            //如果值不再考虑范围内  移除掉move和end事件
            scroll.removeEventListener('touchmove', move);
            scroll.removeEventListener('touchend', end);
          }
        };
        let end = (e) => {
           if(!isMove) return;
           isMove = false;
          clearInterval(this.timer1);
          this.timer1 = setInterval(() => {
            if (distance <= 0) {
              clearInterval(this.timer1);
              distance = 0;
              scroll.style.top = top + 'px';
              scroll.removeEventListener('touchmove', move);
              scroll.removeEventListener('touchend', end);
              this.books = []; // 先清空数据
              this.getData();
              return
            }
            distance -= 1;
            scroll.style.top = top + distance + 'px';
          }, 1)
        };
        scroll.addEventListener('touchmove', move);
        scroll.addEventListener('touchend', end);
      }, false);
    },
    created() {
      this.getData();
    },
    methods: {
      addBook(book){
        this.$store.commit(Types.addBook,book)
      },
      async remove(id) {
        await removeBook(id);//删除选择的书
        // 删除前端书籍
        return this.books = this.books.filter(item => item.bookId !== id);
      },
      async getData() {

        if (this.hasMore && !this.isLoading) { // 有更多图书的时候获取数据
          this.isLoading = true; //数据加载中
          let {hasMore, books} = await pagination(this.offset); // pagination返回的是对象所以要用结构赋值
          this.books = [...this.books, ...books]; //获取的图书放到books属性上 新书+旧书
          this.hasMore = hasMore;
          this.isLoading = false; //数据加载完毕
          this.offset = this.books.length; //维护偏移量 就是总数的长度
        }
      },
      moreBooks() {
        this.getData();
      },
      loadMore() {
        // 顶部超过元素的高度，当前元素显示的元素高度，总高度
        //触发scroll事件 可能触发N次 先开一个定时器,下次触发时将上一次的定时器清楚
        clearTimeout(this.timer); //节流
        this.timer = setTimeout(() => {
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getData(); //获取更多
          }
        }, 50);
      }
    },
    computed: {},
    components: {
      MHeader,
    }
  }
</script>

<style scoped lang="less">

  .content {
    ul {
      padding: 10px;
      li {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #f1f1f1;
        h4 {
          font-size: 20px;
          line-height: 35px;
        }
        img {
          width: 33.33%;
          height: 150px;
        }
        p {
          font-size: 20px;
          color: cadetblue;
        }
        b {
          color: indianred;
        }
        button {
          display: block;
          width: 55px;
          height: 25px;
          background: #c82333;
          color: #fff3cd;
          border: none;
          border-radius: 10px;
          outline: none;
        }
      }
    }
  }

  .more {
    margin: 10px auto;
    background: #9fcdff;
    width: 50%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 15px;
    border-radius: 15px;
  }
  .btn-list{
    display: flex;
    justify-content: space-around;
  }
</style>
