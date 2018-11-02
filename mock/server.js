const http = require('http');
const fs = require('fs');
const url = require('url');

//获取轮播图 /sliders
/*let sliders = require('./sliders');
http.createServer((req,res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") return res.end();
  /!*让options请求快速返回*!/
  let {pathname, query} = url.parse(req.url);
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    res.end(JSON.stringify(sliders));
  }
}).listen(3000);*/
let sliders = require('./sliders.js');

function read(callback) {
  fs.readFile("./book.json", 'utf8', function (err, data) {
    if (err || data.length == 0) {
      callback([]); //如果有错误或没有数据 就是空数组
    } else {
      callback(JSON.parse(data)); //将读出来的数据转化为对象
    }
  })
}

function write(data, callback) { //写入内容
  fs.writeFile("./book.json", JSON.stringify(data), callback)
}

let pageSize = 5; //每页显示5个

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") return res.end();
  let {pathname, query} = url.parse(req.url, true); //true把query转化成对象

  if (pathname === '/page') {
    let offset = parseInt(query.offset) || 0; //拿到当前前端传递的值
    read(function (books) {
      // 每次偏移量 在偏移的基础上增加五条
      let result = books.reverse().slice(offset, offset + pageSize); //数据倒序
      let hasMore = true; //默认有更多
      if (books.length <= offset + pageSize) { //已经显示的数目 大于总数
        hasMore = false;
      }
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      setTimeout(()=>{ res.end(JSON.stringify({hasMore, books: result})); //hasMore 判断有没有更多是书  有就添加偏移量
       },100);
    });
    return;
  }

  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hotBook') {
    read(function (books) {
      let hotBook = books.reverse().slice(0, 7); //模拟后台使书籍对象倒序
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      setTimeout(() => {
        res.end(JSON.stringify(hotBook));
      }, 3000);
    });
    return
  }
  if (pathname === '/book') { //对书的增删改查
    let id = parseInt(query.id); //query.id取出的为字符串
    switch (req.method) { //?id=1
      case 'GET':
        if (typeof id !== 'undefined' && !isNaN(id)) { //防止用户输入错误id获取数据
          read(function (books) { //查询图书
            let book = books.find(item => item.bookId === id);
            if (!book) book = {}; //如果没有查询到则是undefined
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(book));
          });
        } else { //获取所有图书
          read(function (books) {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()));
          })
        }
        break;
      case 'POST':
        let str = '';
        req.on('data', chunk => {
          str += chunk;
        });
        req.on('end', () => {
          let book = JSON.parse(str);
          read(function (books) { //添加id
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(book); //将数据放到books中,books在内存中
            write(books, function () {
              res.end(JSON.stringify(book));
            })
          });
        });
        break;
      case "PUT":
        if (id) { //获取了当前要修改的id
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', () => {
            let book = JSON.parse(str); //改变book
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) { //找到id相同的那一本书
                  return book
                }
                return item; //其他书正常返回即可
              });
              write(books, function () { //将数据写回json中
                res.end(JSON.stringify(book));
              })
            })
          });
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          write(books, function () {
            res.end(JSON.stringify({})); //删除返回空对象
          })
        });
        break
    }
    return
  }

  //读取一个路局
  fs.stat('.'+pathname,function (err,stats) {
    if(err){
      fs.createReadStream('index.html').pipe(res);
      /*res.statusCode = 404;
      res.end('NOT FOUND');*/
    }else{
      if(stats.isDirectory()){
         let p = require('path').join('.'+pathname,'./index.html');
        fs.createReadStream(p).pipe(res);
      }else{

        fs.createReadStream('.'+pathname).pipe(res);
      }
    }
  })
}).listen(8000);
