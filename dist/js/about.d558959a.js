(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"095a":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),c=n("c290"),a=n.n(c),i=n("76e9"),s=n.n(i),o=Object(r["E"])("data-v-bb00817a");Object(r["s"])("data-v-bb00817a");var u={class:"row min-height-screen position-relative"},f={class:"col "},p={class:"container p-0"},b={class:"row mt-5"},l={class:"col position-relative"},g={class:"position-relative"},d=Object(r["g"])("img",{src:a.a,class:"el secret-el"},null,-1),v=Object(r["g"])("img",{src:s.a,class:"el journey-el"},null,-1);Object(r["q"])();var O=o((function(t,e,c,a,i,s){var o=Object(r["w"])("bg"),O=Object(r["w"])("textTyping");return Object(r["p"])(),Object(r["d"])("div",u,[Object(r["g"])(o,{img:n("beed")},null,8,["img"]),Object(r["g"])("div",f,[Object(r["g"])("div",p,[Object(r["g"])("div",b,[Object(r["g"])("div",l,[Object(r["g"])("h1",g,[Object(r["f"])("שלום "+Object(r["y"])(t.$store.state.name)+", נבחרת להיות שליח למשימה סודית! ",1),d]),Object(r["g"])(O,{class:"text-typing p-3 m-0",text:i.text,fontFamily:"Miriam Libre",color:"#fff",onEndTyping:e[1]||(e[1]=function(t){return i.showButt=!0})},null,8,["text"]),i.showButt?(Object(r["p"])(),Object(r["d"])(r["a"],{key:0},[Object(r["g"])("button",{class:"g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3",onClick:e[2]||(e[2]=function(e){return t.$router.push("/MainRoom")})},"קדימה למשימה!"),v],64)):Object(r["e"])("",!0)])])])])])})),h=n("06f2"),j=Object(r["E"])("data-v-04f7b177");Object(r["s"])("data-v-04f7b177");var x=Object(r["g"])("span",null,null,-1);Object(r["q"])();var I=j((function(t,e,n,c,a,i){return Object(r["p"])(),Object(r["d"])("p",null,[Object(r["f"])(Object(r["y"])(a.typeText)+" ",1),x])})),m=(n("a9e3"),{name:"textTyping",props:{text:String,speed:{type:Number,default:70}},data:function(){return{setInterval:null,typeText:"",textIndex:0}},mounted:function(){var t=this;this.setInterval=setInterval((function(){t.typing()}),50)},methods:{typing:function(){this.typeText+=this.text[this.textIndex],this.textIndex===this.text.length-1&&(clearInterval(this.setInterval),this.$emit("end-typing")),this.textIndex++}}});n("e4cb");m.render=I,m.__scopeId="data-v-04f7b177";var y=m,N={name:"Story",components:{textTyping:y,bg:h["a"]},data:function(){return{showButt:!1,text:'יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.\nבכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.\nעוזרי משיח השקר גנבו את האיגרת והצפינו אותה בתיבה נעולה עליך לחלץ את האיגרת מהתיבה על ידי גלוי הקוד הסודי בו היא נעולה ולהעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.\nבכל אחת מן הדלתות שעל המסך תוכל להגיע לחידה שבפתירתה תקבל רמז לחלק מהצופן שיסייע בהמשך לחשוף את הקוד הסודי בשלימותו.'}}};n("7632");N.render=O,N.__scopeId="data-v-bb00817a";e["default"]=N},"1e2c":function(t,e,n){},4305:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",i=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var r=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var a,i;return c&&"function"==typeof(a=e.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&c(t,i),t}},7632:function(t,e,n){"use strict";n("4305")},"76e9":function(t,e,n){t.exports=n.p+"img/ass6.897f39c5.png"},a9e3:function(t,e,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),i=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),f=n("c04e"),p=n("d039"),b=n("7c73"),l=n("241c").f,g=n("06cf").f,d=n("9bf2").f,v=n("58a8").trim,O="Number",h=c[O],j=h.prototype,x=o(b(j))==O,I=function(t){var e,n,r,c,a,i,s,o,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+u}for(a=u.slice(2),i=a.length,s=0;s<i;s++)if(o=a.charCodeAt(s),o<48||o>c)return NaN;return parseInt(a,r)}return+u};if(a(O,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var m,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?p((function(){j.valueOf.call(n)})):o(n)!=O)?u(new h(I(e)),n,y):I(e)},N=r?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;N.length>E;E++)s(h,m=N[E])&&!s(y,m)&&d(y,m,g(h,m));y.prototype=j,j.constructor=y,i(c,O,y)}},c290:function(t,e,n){t.exports=n.p+"img/ass11.f4e6c7fd.png"},e4cb:function(t,e,n){"use strict";n("1e2c")}}]);
//# sourceMappingURL=about.d558959a.js.map