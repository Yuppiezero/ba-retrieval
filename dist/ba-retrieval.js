!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.retrieval=e():t.retrieval=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=6)}([function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.retrievalbox[data-v-c17efcaa]{\r\n  position: relative;\r\n  width:auto;\r\n  height:0.7rem;\n}\n.retrievalbox input[data-v-c17efcaa]{\r\n  border:none;\r\n  background: rgba(255, 255, 255, 0);\r\n  outline: none;\n}\n.enterbox[data-v-c17efcaa]{\r\n  overflow: hidden;\n}\n.enterbox[data-v-c17efcaa],.enterbox >label[data-v-c17efcaa],.enterbox > input[data-v-c17efcaa]{\r\n  display: block;\r\n  box-sizing:border-box;\n}\n.enterbox > label[data-v-c17efcaa]{\r\n  float: left;\r\n  text-align: center;\n}\n.enterbox > input[data-v-c17efcaa]{\r\n  float: right;\n}\n.retrievalbox > ul[data-v-c17efcaa]{\r\n  position:absolute;\r\n  background: #fff;\r\n  display: block;\r\n  width:100%;\r\n  left:0;\r\n  z-index: 1;\r\n  box-shadow: 0 7px 10px 0 rgba(6, 35, 102, 0.4);\r\n  border-bottom-right-radius: 6px;\r\n  border-bottom-left-radius: 6px;\r\n  padding-bottom: 10px;\n}\n.retrievalbox > ul > li[data-v-c17efcaa]{\r\n  width:80%;\r\n  padding:0 5%;\r\n  display:block;\r\n  border-bottom:1px dashed rgba(204, 204, 204, 0.5);\r\n  margin:0 auto;\n}\n.retrievalbox label > span[data-v-c17efcaa],.retrievalbox > ul > li > span[data-v-c17efcaa]{\r\n  display: block;\r\n  line-height: 250%;\n}\r\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,u=0,c=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertAt.before,n);n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=u++;n=l||(l=m(e)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&d(h(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"retrievalbox",style:t.mainstyle},[n("section",{staticClass:"enterbox",style:t.fullstyle},[n("label",{style:t.lstyle},[n("span",{style:t.labsize},[t._v(t._s(t.labeltext))])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tagkey,expression:"tagkey"}],style:t.rstyle,attrs:{type:"text",placeholder:t.reminder},domProps:{value:t.tagkey},on:{focus:function(e){t.getfocus()},blur:function(e){t.reclamation()},input:function(e){e.target.composing||(t.tagkey=e.target.value)}}})]),t._v(" "),t.datalist.length>0&&t.mbpanel?n("ul",{style:0!==t.maxnum&&t.datalist.length>t.maxnum?t.panelheight:""},t._l(t.datalist,function(e,r){return n("li",{key:r,style:t.liheight,on:{click:function(n){t.sniping(e)}}},[n("span",{style:t.subsize,on:{click:function(n){n.stopPropagation(),t.sniping(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])};r._withStripped=!0;var i={name:"retrieval",props:{basedata:{type:Array,default:()=>[]},valkey:{type:String,default:""},rune:{type:Object,default:()=>({text:"",matching:!0})},usermay:{type:Boolean,default:!1},tips:{type:String,default:""},valid:{type:String,default:""},correct:{type:Array,default:()=>[]},controlstyle:{type:Object,default:{width:"",height:"",layout:"750",color:"",backgroundcolor:"",subhenight:"",labelwidth:"",inputwidth:"",labelsize:"",labcolor:"",inputcolor:"",inputsize:"",listnum:0}},label:{type:String,default:""}},watch:{basedata:{handler(t,e){this.infodata=t},immediate:!0},valkey:{handler(t,e){this.datakey=t},immediate:!0},tips:{handler(t,e){t&&""!=t&&(this.reminder=t)}},rune:{handler(t,e){t&&(this.mbpanel=t.matching,this.tagkey=t.text)}},valid:{handler(t,e){this.dataid=t},immediate:!0},label:{handler(t,e){this.labeltext=t},immediate:!0},correct:{handler(t,e){"[{}]"!=JSON.stringify(t)&&t.length>1&&(this.clause=t)},immediate:!0},controlstyle:{handler(t,e){let n="",r="",i="",o="",a="",s=Number(document.documentElement.clientWidth),l=100/s;if(t.layout&&""!=t.layout&&(a=s/Number(t.layout)*100,this.mainstyle="font-size:"+a+"px;",n+="font-size:"+a+"px;"),t.height&&""!=t.height){let e=Number(t.height)/a,s="height:"+e+"em;vertical-align:middle;";n+=s,r+=s,i+="height:"+e+"em;",o+=s,this.fullstyle="width:100%;"+s}if(t.width&&""!=t.width){let e="width:"+Number(t.width)/a+"em;";n+=e,o+=e}if(t.labelwidth&&""!=t.labelwidth){r+="width:"+Number(t.labelwidth)/a+"em;"}if(t.subhenight&&""!=t.subhenight){let e=Number(t.subhenight)/a;this.liheight="height:"+e+"em;vertical-align:middle;"}if(t.color&&""!=t.color&&(n+="color:"+t.color+";"),t.backgroundcolor&&""!=t.backgroundcolor&&(n+="background-color:"+t.backgroundcolor+";"),t.labelsize&&""!=t.labelsize){let e="font-size:"+Number(t.labelsize)*l+"vw;";if(t.height&&""!=t.height){let n=Number(t.height)*l;e+="height:"+n+"vw;line-height:"+n+"vw;"}this.labsize=e}if(t.inputsize&&""!=t.inputsize){let e=Number(t.inputsize)*l;if(i+="font-size:"+e+"vw;",this.subsize="font-size:"+e+"vw;",t.inputwidth&&""!=t.inputwidth){i+="width:"+Number(t.inputwidth)*l+"vw;"}if(t.height&&""!=t.height){i+="height:"+Number(t.height)*l+"vw;"}}if(0!=t.listnum){let e=Number(t.subhenight)*Number(t.listnum)/a,n=Number(t.height)/a;this.panelheight="height:"+e+"rem;overflow:hidden;overflow-y: auto;top:"+n+"em;",this.maxnum=t.listnum}t.labcolor&&""!=t.labcolor&&(r+="color:"+t.labcolor+";"),t.inputcolor&&""!=t.inputcolor&&(i+="color:"+t.inputcolor+";"),this.lstyle=r,this.rstyle=i,this.fullstyle=n},immediate:!0},tagkey:{handler(t,e){this.datalist=new Array;let n=new Object;if(""!=t){if(this.clause.length>0)for(let e=0;e<this.clause.length;e++)t==this.clause[e].basekey&&(t=this.clause[e].newval);this.infodata.length;for(var r in this.infodata)for(var i in this.infodata[r])i==this.datakey&&-1!=this.infodata[r][i].indexOf(t)&&(n=""!=this.dataid?{name:this.infodata[r][i],key:this.infodata[r][this.dataid]}:{name:this.infodata[r][i]},this.datalist.push(n))}}}},data:()=>({infodata:[],datalist:[],reminder:"",tagkey:"",labeltext:"",datakey:"",dataid:"",maxnum:"0",mainstyle:"",fullstyle:"",sonheight:"",liheight:"",lstyle:"",rstyle:"",panelheight:"",mbpanel:!0,devicebase:"",subsize:"",labsize:"",clause:""}),methods:{sniping(t){this.tagkey=t.name,this.$emit("sieve",t),this.mbpanel=!1,this.datalist=new Array},getfocus(){this.tagkey="",this.datalist=new Array,this.mbpanel=!0,this.$emit("getfocus",!0)},reclamation(){if(""==this.tagkey){let t={name:"",key:""};this.$emit("sieve",t)}}}};n(1);var o=function(t,e,n,r,i,o,a,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}(i,r,[],!1,null,"c17efcaa",null);o.options.__file="src/retrieval.vue";var a=o.exports;const s={install:function(t){t.component("retrieval",a)}};e.default=s}])});