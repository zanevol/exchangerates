(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/exchangerates/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"54a6":function(t,e,n){"use strict";n("fe5f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticClass:"grey lighten-3"},[n("Comments")],1)],1)},s=[],i=function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"d-flex message-block",attrs:{cols:"12"}},[a("v-card",{staticClass:"ma-auto pa-5",attrs:{"min-height":"450px",elevation:"5","max-width":"900",width:"100%"}},[a("v-card",{staticClass:"mt-6",class:(t={},t["overflow-y-auto pr-2"]=e.comments.length>=3,t),attrs:{width:"100%",height:"410px",elevation:"0"}},[e._l(e.comments,(function(t,n){return[t.isDelete?a("v-card",{key:t.id,attrs:{elevation:"0"}},[a("v-list-item",{staticClass:"pr-0",attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{left:"",color:"#C4C4C4",size:"36"}},[e._v(" AA ")]),a("v-list-item-content",[a("div",{staticClass:"text-subtitle-2 text-left mb-1"},[a("span",{style:e.getRandomColor(t.id)},[e._v(e._s(t.id))])]),[a("div",{staticClass:"text-justify mb-0 comment-text__deleted"},[e._v(" Комментарий удален  "+e._s(e.formatDeleteDate(t.dateModified))+" ")])]],2)],1)],1):a("v-card",{key:t.id,attrs:{elevation:"0"}},[a("v-list-item",{staticClass:"pr-0",attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{left:"",color:"#C4C4C4",size:"36"}},[e._v(" AA ")]),a("v-list-item-content",[a("div",{staticClass:"text-subtitle-2 text-left mb-1"},[a("span",{style:e.getRandomColor(t.id)},[e._v(e._s(t.id))]),a("span",[e._v(" "+e._s(e.formatDate(t.dateCreated)))])]),[a("div",{staticClass:"text-justify mb-0 comment-text"},[e._v(" "+e._s(t.commentText)+" ")])]],2)],1),a("v-card-actions",{staticClass:"pa-0 ml-15 flex-wrap"},[a("v-btn",{staticClass:"text-capitalize text-body-1 font-weight-bold",attrs:{text:"","x-small":e.width<=768,color:"#000000"},on:{click:function(n){return n.stopPropagation(),e.showAnswerInput(t.id,t.path)}}},[e._v(" "+e._s(e.isAnswer[t.id]?"Отменить":"Ответить")+" ")]),a("v-btn",{staticClass:"text-capitalize text-body-1 ml-0",attrs:{text:"","x-small":e.width<=768,color:"rgba(0,0,0,.7)"}},[e._v(" Изменить ")]),a("v-btn",{staticClass:"text-capitalize text-body-1 ml-0",attrs:{text:"","x-small":e.width<=768,color:"rgba(0,0,0,.7)"},on:{click:function(n){return n.stopPropagation(),e.openConfirm(t.id)}}},[e._v(" Удалить ")])],1)],1),e.isAnswer[t.id]?a("v-card",{key:"comment_"+t.id,staticClass:"d-flex flex-column",attrs:{elevation:"0"}},[a("v-list-item",{staticClass:"pr-0",attrs:{dense:""}},[a("v-list-item-avatar",{staticClass:"mb-0",attrs:{left:"",color:"#C4C4C4",size:"36"}},[e._v(" AA ")]),a("v-textarea",{staticClass:"mt-2",attrs:{rows:"1",solo:"",placeholder:"Добавить комментарий...",outlined:"",rounded:"","hide-details":"","no-resize":"",dense:"","auto-grow":"",wrap:"hard",maxlength:"3000"},model:{value:e.answerCommentObj.comment_text,callback:function(t){e.$set(e.answerCommentObj,"comment_text","string"===typeof t?t.trim():t)},expression:"answerCommentObj.comment_text"}})],1),a("v-row",{staticClass:"ma-0 mt-3 align-center justify-space-between"},[a("div",{staticClass:"ml-15"}),a("v-btn",{staticClass:"black--text text-capitalize text-body-1 font-weight-medium",staticStyle:{"z-index":"1"},attrs:{elevation:"4",color:"#E8D3E8",rounded:"","font-size":"1.2em"},on:{click:function(t){return t.stopPropagation(),e.sendAnswerComment.apply(null,arguments)}}},[e._v(" Отправить ")])],1)],1):e._e(),a("AnswerComment",{key:t.id+"_child",attrs:{index:n,comment:t},on:{sendAnswerComment:e.sendAnswerComment}})]}))],2),a("v-card",{staticClass:"d-flex flex-column",attrs:{elevation:"0"}},[a("v-list-item",{staticClass:"pr-0",attrs:{dense:""}},[a("v-list-item-avatar",{staticClass:"mb-0",attrs:{left:"",color:"#C4C4C4",size:"36"}},[e._v(" AA ")]),a("v-textarea",{staticClass:"mt-2",attrs:{rows:"1",solo:"",placeholder:"Добавить комментарий...",outlined:"",rounded:"","hide-details":"","no-resize":"",dense:"","auto-grow":"",wrap:"hard",maxlength:"3000"},model:{value:e.commentObj.comment_text,callback:function(t){e.$set(e.commentObj,"comment_text","string"===typeof t?t.trim():t)},expression:"commentObj.comment_text"}})],1),a("v-row",{staticClass:"ma-0 mt-3 align-center justify-space-between"},[a("div",{staticClass:"ml-15"}),a("v-btn",{staticClass:"black--text text-capitalize text-body-1 font-weight-medium",attrs:{elevation:"4",color:"#E8D3E8",rounded:"","font-size":"1.2em"},on:{click:function(t){return t.stopPropagation(),e.sendComment.apply(null,arguments)}}},[e._v(" Отправить ")])],1)],1)],1)],1)],1),a("ConfirmModal",{attrs:{dialog:e.isConfirm},on:{deleteComment:e.delComment,closeConfirm:function(t){e.isConfirm=!1}}})],1)},o=[],c=n("1da1"),l=n("5530"),m=(n("96cf"),n("2f62")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"750"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"confirm_modal"},[n("v-card-text",{staticClass:"text-center text-h5 pt-3 pb-6",staticStyle:{color:"#000"}},[t._v(" Удалить комментарий? ")]),n("v-card-actions",{staticClass:"pt-0 pb-5 justify-center"},[n("v-btn",{staticClass:"black--text mr-8 font-weight-bold",attrs:{color:"#FBFDF7",rounded:""},on:{click:function(e){return e.stopPropagation(),t.$emit("deleteComment")}}},[t._v(" Да ")]),n("v-btn",{staticClass:"black--text ma-0 font-weight-bold",attrs:{color:"#E8D3E8",rounded:""},on:{click:function(e){return e.stopPropagation(),t.$emit("closeConfirm")}}},[t._v(" Нет ")])],1)],1)],1)],1)},d=[],f={name:"ConfirmModal",props:{dialog:Boolean}},p=f,v=(n("aad8"),n("2877")),h=n("6544"),w=n.n(h),C=n("8336"),b=n("b0af"),x=n("99d9"),_=n("169a"),g=n("0fd9"),O=Object(v["a"])(p,u,d,!1,null,"146e5ec6",null),j=O.exports;w()(O,{VBtn:C["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VDialog:_["a"],VRow:g["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.comment.children,(function(e){return[n("v-card",{key:e.id+"_children",style:{width:100-5*e.parentId.split(".").length+"%",marginLeft:"auto"},attrs:{elevation:"0"}},[n("v-list-item",{staticClass:"pr-0",attrs:{"three-line":""}},[n("v-list-item-avatar",{attrs:{left:"",color:"#C4C4C4",size:"36"}},[t._v(" AA ")]),n("v-list-item-content",[n("div",{staticClass:"text-subtitle-2 text-left mb-1"},[n("span",{style:t.getRandomColor(e.id)},[t._v(t._s(e.id))]),n("span",[t._v(" "+t._s(t.formatDate(e.dateCreated)))])]),[n("div",{staticClass:"text-justify mb-0 comment-text"},[t._v(" "+t._s(e.commentText)+" ")])]],2)],1),n("v-card-actions",{staticClass:"pa-0 ml-15 flex-wrap"},[n("v-btn",{staticClass:"text-capitalize text-body-1 font-weight-bold",attrs:{text:"","x-small":t.width<=768,color:"#000000"},on:{click:function(n){return n.stopPropagation(),t.showAnswerInput(e.id,e.path)}}},[t._v(" "+t._s(t.isAnswer[e.id]?"Отменить":"Ответить")+" ")])],1)],1),t.isAnswer[e.id]?n("v-card",{key:e.id,staticClass:"d-flex flex-column",style:{width:100-5*e.parentId.split(".").length+"%",marginLeft:"auto"},attrs:{elevation:"0"}},[n("v-list-item",{staticClass:"pr-0",attrs:{dense:""}},[n("v-list-item-avatar",{staticClass:"mb-0",attrs:{left:"",color:"#C4C4C4",size:"36"}},[t._v(" AA ")]),n("v-textarea",{staticClass:"mt-2",attrs:{rows:"1",solo:"",placeholder:"Добавить комментарий...",outlined:"",rounded:"","hide-details":"","no-resize":"",dense:"","auto-grow":"",wrap:"hard",maxlength:"3000"},model:{value:t.answerCommentObj.comment_text,callback:function(e){t.$set(t.answerCommentObj,"comment_text","string"===typeof e?e.trim():e)},expression:"answerCommentObj.comment_text"}})],1),n("v-row",{staticClass:"ma-0 mt-3 align-center justify-space-between"},[n("div",{staticClass:"ml-15"}),n("v-btn",{staticClass:"black--text text-capitalize text-body-1 font-weight-medium",staticStyle:{"z-index":"1"},attrs:{elevation:"4",color:"#E8D3E8",rounded:"","font-size":"1.2em"},on:{click:function(e){return e.stopPropagation(),t.sendAnswerComment.apply(null,arguments)}}},[t._v(" Отправить ")])],1)],1):t._e(),t._l(t.comment.children,(function(a,r){return n("AnswerComment",{key:a.id+"_"+e.id,attrs:{index:r,comment:a,parentItem:t.comment}})}))]}))],2)},A=[],E=(n("a9e3"),{name:"AnswerComment",props:{comment:{type:Object,required:!0},index:{type:Number,required:!0},parentItem:{required:!1}},data:function(){return{colors:["#0038FF","#FE0000","#28A015"],width:0,isAnswer:{},answerCommentObj:{path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"},answerPath:""}},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["SET_COMMENT"])),{},{getRandomColor:function(){return{color:this.colors[Math.floor(Math.random()*this.colors.length)]}},formatDate:function(t){t+="Z";var e=new Date(t);return e.toLocaleString("ru-RU")},handleResize:function(){this.width=window.innerWidth},showAnswerInput:function(t,e){if(this.answerPath=e,this.answerId=t,!this.isAnswer[t]){for(var n in this.isAnswer)this.isAnswer[n]=!1;this.$set(this.isAnswer,t,!1)}this.isAnswer[t]=!this.isAnswer[t]},sendAnswerComment:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""===t.answerCommentObj.comment_text){e.next=6;break}return t.$set(t.answerCommentObj,"parent_path",t.answerPath),e.next=4,t.SET_COMMENT(t.answerCommentObj);case 4:for(n in t.answerCommentObj={parent_path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"},t.isAnswer)t.isAnswer[n]=!1;case 6:case"end":return e.stop()}}),e)})))()}}),created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}}),M=E,k=n("da13"),R=n("8270"),z=n("5d23"),T=n("a844"),V=Object(v["a"])(M,y,A,!1,null,null,null),D=V.exports;w()(V,{VBtn:C["a"],VCard:b["a"],VCardActions:x["a"],VListItem:k["a"],VListItemAvatar:R["a"],VListItemContent:z["a"],VRow:g["a"],VTextarea:T["a"]});var I={name:"Comments",components:{ConfirmModal:j,AnswerComment:D},comments:{ConfirmModal:j},data:function(){return{commentObj:{path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"},answerCommentObj:{path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"},colors:["#0038FF","#FE0000","#28A015"],width:0,isConfirm:!1,commentId:0,delDate:0,isAnswer:{},answerPath:"",answerId:null}},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])(["fetchComments","SET_COMMENT","DEL_COMMENT"])),{},{sendComment:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""===t.commentObj.comment_text){e.next=4;break}return e.next=3,t.SET_COMMENT(t.commentObj);case 3:t.commentObj={path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"};case 4:case"end":return e.stop()}}),e)})))()},sendAnswerComment:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""===t.answerCommentObj.comment_text){e.next=6;break}return t.$set(t.answerCommentObj,"parent_path",t.answerPath),e.next=4,t.SET_COMMENT(t.answerCommentObj);case 4:for(n in t.answerCommentObj={parent_path:"",page_id:"1",comment_text:"",is_private:!0,attachment:[],user_id:"78"},t.isAnswer)t.isAnswer[n]=!1;case 6:case"end":return e.stop()}}),e)})))()},delComment:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.DEL_COMMENT(t.commentId);case 2:t.isConfirm=!1;case 3:case"end":return e.stop()}}),e)})))()},formatDate:function(t){t+="Z";var e=new Date(t);return e.toLocaleString("ru-RU")},formatDeleteDate:function(t){var e=new Date(t);return e.toLocaleString("ru-RU")},getRandomColor:function(){return{color:this.colors[Math.floor(Math.random()*this.colors.length)]}},handleResize:function(){this.width=window.innerWidth},openConfirm:function(t){this.commentId=t,this.isConfirm=!0},showAnswerInput:function(t,e){if(this.answerPath=e,this.answerId=t,!this.isAnswer[t]){for(var n in this.isAnswer)this.isAnswer[n]=!1;this.$set(this.isAnswer,t,!1)}this.isAnswer[t]=!this.isAnswer[t]}}),computed:Object(l["a"])({},Object(m["c"])({comments:"COMMENTS"})),mounted:function(){this.fetchComments("1")},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},S=I,P=(n("54a6"),n("62ad")),L=n("a523"),N=Object(v["a"])(S,i,o,!1,null,null,null),$=N.exports;w()(N,{VBtn:C["a"],VCard:b["a"],VCardActions:x["a"],VCol:P["a"],VContainer:L["a"],VListItem:k["a"],VListItemAvatar:R["a"],VListItemContent:z["a"],VRow:g["a"],VTextarea:T["a"]});var F={name:"App",components:{Comments:$},data:function(){return{}}},B=F,q=n("7496"),U=n("f6c4"),G=Object(v["a"])(B,r,s,!1,null,null,null),J=G.exports;w()(G,{VApp:q["a"],VMain:U["a"]});n("d3b7"),n("159b"),n("ac1f"),n("1276"),n("a15b"),n("fb6a"),n("4de4");var W=n("7c15");a["default"].use(m["a"]);var Z=new m["a"].Store({state:{comments:[]},mutations:{GET_COMMENTS:function(t,e){var n=H(e);n=K(e),a["default"].set(t,"comments",n)},REMOVE_COMMENT:function(t,e){t.comments.forEach((function(t){t.id===e&&(t.isDelete=!0,t.dateModified=new Date)}))}},actions:{fetchComments:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,W["a"].get("/v1/comment",{params:{page_id:e}});case 4:return r=n.sent,s=r.data,a("GET_COMMENTS",s),n.abrupt("return",s);case 10:n.prev=10,n.t0=n["catch"](1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},SET_COMMENT:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,n.prev=1,n.next=4,W["a"].post("/v1/comment",e);case 4:a("fetchComments","1"),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},DEL_COMMENT:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,W["a"].delete("/v1/comment",{params:{comment_id:e}});case 4:a("REMOVE_COMMENT",e),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},getters:{COMMENTS:function(t){return t.comments}}});function H(t){return t.forEach((function(t){1==t.path.split(".").length?t.parentId=null:t.parentId=t.path.split(".").slice(0,-1).join(".")})),t}function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t.filter((function(t){return t.parentId==e}));return n.forEach((function(e){return e.children=K(t,e.path)})),n}var Q=n("ce5b"),X=n.n(Q);n("bf40");a["default"].use(X.a);var Y=new X.a({});a["default"].config.productionTip=!1,new a["default"]({store:Z,vuetify:Y,render:function(t){return t(J)}}).$mount("#app")},"7c15":function(t,e,n){"use strict";(function(t){n("d3b7");var a=n("bc3a"),r=n.n(a),s=n("4870"),i=n("4328"),o=n.n(i),c=n("ed18");c.config({path:t+"/.env"});var l="https://api.comment.skroy.ru",m=r.a.create({paramsSerializer:function(t){return o.a.stringify(t,{arrayFormat:"indices",encode:!0})}});m.interceptors.request.use((function(t){return t.baseURL=l,t}),(function(t){return Promise.reject(t)}));var u=Object(s["a"])(m);e["a"]=u}).call(this,"/")},aad8:function(t,e,n){"use strict";n("cd72")},cd72:function(t,e,n){},fe5f:function(t,e,n){}});
//# sourceMappingURL=app.a787d7ef.js.map