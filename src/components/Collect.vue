<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(item,index) in bookList">
          <img :src="item.bookCover" alt="">
          <div class="collect-right">
            <h3>《{{item.bookName}}》</h3>
            <button class="cart-dev" @click="changeBook(index,-1)">-</button>
            {{item.bookCount}}
            <button class="cart-Ins" @click="changeBook(index,1)">+</button>
            <p>小计:￥{{(item.bookPrice*item.bookCount).toFixed(2)}}</p>
            <button class="del" @click="removeBook(index)">删除</button>
          </div>
        </li>
      </ul>
      <li>共{{count}}本</li>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  //辅助函数 mapstate
  import {mapState, mapGetters} from 'vuex';
  import  * as Types from '../store/mutations-type'

  export default {

    methods: {
      changeBook(index,bookCount){
         if(bookCount<0&&this.bookList[index].bookCount ===1) return;
        this.$store.commit(Types.changeBook,{
          bookId:this.bookList[index].bookId,
          bookCount:bookCount
        })
      },
      removeBook(index){
        this.$store.commit(Types.removeBook,this.bookList[index].bookId)
      }
    },
    computed: {
      ...mapState(['bookList']),
      ...mapGetters(['count']),
      /* bookList(){
         return this.$store.state.cartList;
       }*/
    },
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
        flex-wrap: wrap;
        padding: 10px 0;
        border-bottom: 1px solid #f1f1f1;
        img {
          width: 33.3%;
          height: 125px;
        }
        h3 {
          font-size: 20px;
          line-height: 30px;

        }
        .collect-right {
          width: 60%;
          word-wrap:break-word;
          word-break:break-all;
          button {
            width: 25px;
            height: 25px;
            background: #c82333;
            color: #fff3cd;
            border: none;
            border-radius:50%;
            outline: none;
          }
          .del {
            width: 55px;
            height: 25px;
            background: #c82333;
            color: #fff3cd;
            border: none;
            border-radius: 10px;
            outline: none;
          }
          p{
            font-size: 25px;
          }
        }

      }
    }
  }
</style>
