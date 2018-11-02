import * as Types from './mutations-type';

const  mutations = {
  [Types.addBook](state,book){
    //book是添加一本书，如果有这本书累加的是数量，如果没有数量为1 放到bookList
    let product = state.bookList.find(item=>item.bookId === book.bookId);
    if(product){
      product.bookCount+=1;
      //动态替换原数组 否则不会刷新bookList
      state.bookList = [...state.bookList]
    }else{
      book.bookCount = 1;
      //将原有的数据改变 或者替换
      // 用新数组替换老数组
      state.bookList = [...state.bookList,book];
    }
  },
  [Types.changeBook](state,book){
    let product = state.bookList.find(item=>item.bookId === book.bookId);
    product.bookCount +=  book.bookCount;
    state.bookList = [...state.bookList]
  },
  [Types.removeBook](state,bookId){
    let index = state.bookList.findIndex(item=>item.bookId === bookId)
    state.bookList.splice(index,1);
  }
};

export  default mutations
