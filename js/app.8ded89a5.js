(function(t){function e(e){for(var n,i,s=e[0],u=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";var n=r("2dad"),a=r.n(n);a.a},"2dad":function(t,e,r){},"3b04":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"nav"},[r("router-link",{staticClass:"a",attrs:{to:"/design/"}},[t._v("1. 计算运动参数：变速范围R、公比φ和转速级数Z")]),r("router-link",{staticClass:"a",attrs:{to:"/design/1"}},[t._v("2. 建立结构式：确定传动顺序；确定变速顺序。")]),r("router-link",{staticClass:"a",attrs:{to:"/design/2"}},[t._v("3. 确定各变速组的齿数比，绘制转速图。")])],1),r("router-view")],1)},o=[],i=(r("5c0b"),r("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,c=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"question1"},[r("h1",[t._v("三个运动参数R、φ及Z的关系")]),t._m(0),r("p",[t._v("标准公比φ有：1.06，1.12，1.26，1.41，1.58，1.78，2.0七个数值。")]),r("h3",[t._v(" 选择已知参数: "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],staticStyle:{width:"100px","padding-bottom":"5px"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.mode=e.target.multiple?r:r[0]},t.reset]}},[r("option",{attrs:{value:"1"}},[t._v("已知R、φ")]),r("option",{attrs:{value:"2"}},[t._v("已知R、Z")]),r("option",{attrs:{value:"3"}},[t._v("已知φ、Z")])])]),r("div",{staticClass:"flex"},[3!=t.mode?r("div",[r("div",[r("label",{staticStyle:{cursor:"pointer"},attrs:{for:"1"}},[t._v("输入R")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.moddd,expression:"moddd"}],key:"0",attrs:{id:"1",name:"mod",type:"radio",value:"0"},domProps:{checked:t._q(t.moddd,"0")},on:{change:function(e){t.moddd="0"}}}),r("div",{staticStyle:{display:"inline-block",width:"40px"}}),t._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.moddd,expression:"moddd"}],key:"1",attrs:{id:"2",name:"mod",type:"radio",value:"1"},domProps:{checked:t._q(t.moddd,"1")},on:{change:function(e){t.moddd="1"}}})]),0==t.moddd?r("div",[r("label",{attrs:{for:"R"}},[t._v("R ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.R,expression:"R"}],attrs:{id:"R",type:"number"},domProps:{value:t.R},on:{input:function(e){e.target.composing||(t.R=e.target.value)}}})]):r("div",[r("div",[t._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nmax,expression:"nmax"}],attrs:{id:"R",type:"number"},domProps:{value:t.nmax},on:{change:t.change,input:function(e){e.target.composing||(t.nmax=e.target.value)}}})]),r("div",[t._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nmin,expression:"nmin"}],attrs:{id:"R",type:"number"},domProps:{value:t.nmin},on:{change:t.change,input:function(e){e.target.composing||(t.nmin=e.target.value)}}})])])]):t._e(),2!=t.mode?r("div",[r("label",{attrs:{for:"φ"}},[t._v("φ ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.φ,expression:"φ"}],attrs:{id:"φ",type:"number"},domProps:{value:t.φ},on:{input:function(e){e.target.composing||(t.φ=e.target.value)}}})]):t._e(),1!=t.mode?r("div",[r("label",{attrs:{for:"Z"}},[t._v("Z ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.Z,expression:"Z"}],attrs:{id:"Z",type:"number"},domProps:{value:t.Z},on:{input:function(e){e.target.composing||(t.Z=e.target.value)}}})]):t._e(),r("button",{on:{click:function(e){return t.mod(t.mode)}}},[t._v("开始计算")])]),3==t.mode&&t.R>0?r("div",[r("h2",[t._v("输出")]),t._v(" R的值为："+t._s(t.R)+" ")]):t._e(),2==t.mode&&t.φ>0?r("div",[r("h2",[t._v("输出")]),t._v(" φ的值为："+t._s(t.φ)+" ")]):t._e(),1==t.mode&&t.Z>0?r("div",[r("h2",[t._v("输出")]),t._v(" Z的值为："+t._s(t.Z)+" ")]):t._e()])])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" 参数解释：R = n"),r("sub",[t._v("max")]),t._v(" /n"),r("sub",[t._v("min")]),t._v(" , Z :变速级数 , φ:标准公比 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticStyle:{cursor:"pointer"},attrs:{for:"2"}},[t._v("输入n"),r("sub",[t._v("max")]),t._v("/n"),r("sub",[t._v("max")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"R"}},[t._v("n"),r("sub",[t._v("max")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"R"}},[t._v("n"),r("sub",[t._v("min")])])}],m=(r("6b93"),r("b680"),{name:"Home",data:function(){return{R:0,"φ":0,Z:0,nmax:0,nmin:0,mode:1,moddd:0}},methods:{change:function(){this.R=(parseFloat(this.nmax)/parseFloat(this.nmin)).toFixed(2)},mod:function(t){if(1==t){if(parseFloat(this.φ)<=0||parseFloat(this.R)<=0)return;this.Z=Math.round(Math.log10(parseFloat(this.R))/Math.log10(parseFloat(this.φ))+1).toFixed(0)}if(2==t){if(parseFloat(this.R)<=0||parseFloat(this.Z)<=0)return;this.φ=Math.pow(parseFloat(this.R),1/(parseFloat(this.Z)-1)).toFixed(2)}if(3==t){if(parseFloat(this.φ)<=0||parseFloat(this.Z)<=0)return;this.R=Math.pow(parseFloat(this.φ),parseFloat(this.Z)-1).toFixed(2)}},reset:function(){this.R=0,this.φ=0,this.Z=0,this.nmax=0,this.nmin=0,this.moddd=0}}}),p=m,f=(r("21bb"),Object(i["a"])(p,d,v,!1,null,null,null)),h=f.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"question1"},[r("h1",[t._v("结构式的拟定")]),r("div",[r("label",{attrs:{for:""}},[t._v("变速级数：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.Z,expression:"Z"}],attrs:{type:"number"},domProps:{value:t.Z},on:{change:t.change,input:function(e){e.target.composing||(t.Z=e.target.value)}}})]),r("button",{on:{click:t.jojo}},[t._v("计算")]),t.arr3?r("h2",[t._v(" 结构式:"+t._s(t.Z)+"="),t._l(t.arr3,(function(e,n){return r("span",{key:e},[t._v(t._s(e)+" "),r("sub",[t._v(t._s(t.arr4[n]))]),n<t.len-1?r("span",[t._v(" × ")]):t._e()])})),r("h4",[r("pre",[t._v("式中:\n  "+t._s(t.Z)+"代表转速级数，\n   "+t._s(t.arr3.join(","))+"表示变速组的传动副数和传动顺序，\n  下标"+t._s(t.arr4.join(","))+"表示各对应变速组的级比指数。\n      ")])])],2):t._e()])])},b=[],g=(r("c975"),r("d81d"),r("2909")),x={name:"Home",data:function(){return{Z:0,arr:[],arr2:[],arr3:0,arr4:[]}},methods:{change:function(){this.arr3=0},check:function(){this.arr2=this.arr.map((function(t){for(var e=0,r=0;r<t.length;r++)2!=t[r]&&3!=t[r]||e++;return e}));var t=this.arr2.indexOf(Math.max.apply(Math,Object(g["a"])(this.arr2)));this.arr3=this.arr[t].sort().reverse();for(var e=[1],r=0;r<this.arr3.length-1;r++)e.push(this.arr3[r]*e[r]);this.arr4=e},jojo:function(){var t=parseInt(this.Z);this.arr=[];for(var e=2;e<t;e++)for(var r=e;r<t;r++)e*r==t&&this.arr.push([e,r]);for(var n=2;n<t;n++)for(var a=n;a<t;a++)for(var o=a;o<t;o++)n*a*o==t&&this.arr.push([n,a,o]);for(var i=2;i<t;i++)for(var s=i;s<t;s++)for(var u=s;u<t;u++)for(var l=u;l<t;l++)i*s*u*l==t&&this.arr.push([i,s,u,l]);for(var c=2;c<t;c++)for(var d=c;d<t;d++)for(var v=d;v<t;v++)for(var m=v;m<t;m++)for(var p=m;p<t;p++)c*d*v*m*p==t&&this.arr.push([c,d,v,m,p]);this.check()}},computed:{len:function(){return this.arr3.length}}},y=x,Z=(r("b6aa"),Object(i["a"])(y,_,b,!1,null,null,null)),R=Z.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"question1"},[r("h1",[t._v("齿数比的确定")]),r("h3",[t._v("自己手动查表吧.")])])])}],F={data:function(){return{zushu:0}}},O=F,k=(r("ecc7"),Object(i["a"])(O,w,j,!1,null,null,null)),P=k.exports;n["a"].use(c["a"]);var C=[{path:"/design/",name:"Home",component:h},{path:"/design/1",name:"Home1",component:R},{path:"/design/2",name:"Home2",component:P}],M=new c["a"]({mode:"history",base:"/",routes:C}),S=M,$=r("2f62");n["a"].use($["a"]);var E=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:S,store:E,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"625b":function(t,e,r){},"9c0c":function(t,e,r){},b6aa:function(t,e,r){"use strict";var n=r("625b"),a=r.n(n);a.a},ecc7:function(t,e,r){"use strict";var n=r("3b04"),a=r.n(n);a.a}});
//# sourceMappingURL=app.8ded89a5.js.map