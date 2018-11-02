<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">简介</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">售价</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <label for="bookCover">封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加书籍</button>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue'
  import {addBook} from '../api'
  export default {
    data() {
      return {book:{}}
    },
    methods: {
      async add(){
        await addBook(this.book);
        this.$router.push('/list');
      }
    },
    computed: {},
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .content {
    ul {
      margin: 50px 10px 0px 10px;
      li {
        label {
          display: block;
          font-size: 25px;
        }
        input {
          margin: 10px 0;
          height: 25px;
          width: 100%;
        }
        button {
          display: block;
          width: 120px;
          height: 35px;
          background: cornflowerblue;
          color: #f7f7f7;
          border: none;
          border-radius: 20px;
          outline: none;
          font-size: 15px;
        }
        img{
          width:120px;
          height: 150px;
        }
      }
    }
  }
</style>
