webpackJsonp([2],{"1kS7":function(t,o){o.f=Object.getOwnPropertySymbols},"9C0O":function(t,o){},Dd8w:function(t,o,n){"use strict";o.__esModule=!0;var e,c=n("woOf"),s=(e=c)&&e.__esModule?e:{default:e};o.default=s.default||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}},NpIQ:function(t,o){o.f={}.propertyIsEnumerable},QV70:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("Dd8w"),c=n.n(e),s=n("UeVD"),i=n("NYxO"),r=n("Cpzh"),a={methods:{changeBook:function(t,o){o<0&&1===this.bookList[t].bookCount||this.$store.commit(r.b,{bookId:this.bookList[t].bookId,bookCount:o})},removeBook:function(t){this.$store.commit(r.c,this.bookList[t].bookId)}},computed:c()({},Object(i.c)(["bookList"]),Object(i.b)(["count"])),components:{MHeader:s.a}},u={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("MHeader",[t._v("购物车")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",t._l(t.bookList,function(o,e){return n("li",[n("img",{attrs:{src:o.bookCover,alt:""}}),t._v(" "),n("div",{staticClass:"collect-right"},[n("h3",[t._v("《"+t._s(o.bookName)+"》")]),t._v(" "),n("button",{staticClass:"cart-dev",on:{click:function(o){t.changeBook(e,-1)}}},[t._v("-")]),t._v("\n          "+t._s(o.bookCount)+"\n          "),n("button",{staticClass:"cart-Ins",on:{click:function(o){t.changeBook(e,1)}}},[t._v("+")]),t._v(" "),n("p",[t._v("小计:￥"+t._s((o.bookPrice*o.bookCount).toFixed(2)))]),t._v(" "),n("button",{staticClass:"del",on:{click:function(o){t.removeBook(e)}}},[t._v("删除")])])])})),t._v(" "),n("li",[t._v("共"+t._s(t.count)+"本")])])],1)},staticRenderFns:[]};var l=n("VU/8")(a,u,!1,function(t){n("9C0O")},"data-v-c6f21c20",null);o.default=l.exports},R4wc:function(t,o,n){var e=n("kM2E");e(e.S+e.F,"Object",{assign:n("To3L")})},To3L:function(t,o,n){"use strict";var e=n("lktj"),c=n("1kS7"),s=n("NpIQ"),i=n("sB3e"),r=n("MU5D"),a=Object.assign;t.exports=!a||n("S82l")(function(){var t={},o={},n=Symbol(),e="abcdefghijklmnopqrst";return t[n]=7,e.split("").forEach(function(t){o[t]=t}),7!=a({},t)[n]||Object.keys(a({},o)).join("")!=e})?function(t,o){for(var n=i(t),a=arguments.length,u=1,l=c.f,f=s.f;a>u;)for(var v,b=r(arguments[u++]),k=l?e(b).concat(l(b)):e(b),d=k.length,_=0;d>_;)f.call(b,v=k[_++])&&(n[v]=b[v]);return n}:a},V3tA:function(t,o,n){n("R4wc"),t.exports=n("FeBl").Object.assign},woOf:function(t,o,n){t.exports={default:n("V3tA"),__esModule:!0}}});
//# sourceMappingURL=2.2f0aa913ff428501382a.js.map