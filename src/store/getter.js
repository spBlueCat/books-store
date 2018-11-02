let getters = {
  count:(state)=>state.bookList.reduce((prev,next)=>prev+next.bookCount,0)
}

export  default  getters;
