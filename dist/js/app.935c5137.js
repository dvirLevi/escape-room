(function(e){function t(t){for(var n,r,a=t[0],s=t[1],u=t[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],n=!0,r=1;r<c.length;r++){var a=c[r];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},r={app:0},o={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"04084660","chunk-2bb62532":"f9b6364d","chunk-3546639d":"5027b8ad","chunk-3b8fab70":"c33ae9ce","chunk-4c690442":"6fecb356","chunk-5e6a9a42":"ec79b946","chunk-615acb3a":"9b16d7e6","chunk-73765c3a":"f7fcb3a2","chunk-773ea8d6":"09c3afea","chunk-7c016c38":"f15c88cd"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var t=[],c={about:1,"chunk-2bb62532":1,"chunk-3546639d":1,"chunk-3b8fab70":1,"chunk-4c690442":1,"chunk-5e6a9a42":1,"chunk-615acb3a":1,"chunk-73765c3a":1,"chunk-773ea8d6":1,"chunk-7c016c38":1};r[e]?t.push(r[e]):0!==r[e]&&c[e]&&t.push(r[e]=new Promise((function(t,c){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"1f78cfa3","chunk-2bb62532":"c8c63c2e","chunk-3546639d":"d3a02927","chunk-3b8fab70":"b7ee5a10","chunk-4c690442":"38a78f72","chunk-5e6a9a42":"d579aca1","chunk-615acb3a":"04a56d88","chunk-73765c3a":"6c2e3733","chunk-773ea8d6":"b09af06d","chunk-7c016c38":"7544b7a3"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),c(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var c=o[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,c[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"06f2":function(e,t,c){"use strict";var n=c("7a23"),r=Object(n["I"])("data-v-4433b03a"),o=r((function(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("div",{class:["bg","cover"===c.coverOrContain?"img-cover":"img-contain"],style:{backgroundImage:"url(".concat(c.img,")"),opacity:c.opacity}},null,6)})),i={name:"bg",props:{img:String,coverOrContain:{default:"cover",type:String},opacity:{default:".4",type:String}}};c("a5b6");i.render=o,i.__scopeId="data-v-4433b03a";t["a"]=i},1090:function(e,t,c){e.exports=c.p+"img/ass4.d4bac1e3.jpg"},"13d5":function(e,t,c){"use strict";c("ed92")},"14e5":function(e,t,c){"use strict";var n=c("7a23"),r=Object(n["I"])("data-v-1569787f"),o=r((function(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("audio",{ref:"audio",loop:c.ifLoop,src:c.src,onEnded:t[1]||(t[1]=function(t){return e.$emit("end-audio")})},null,40,["loop","src"])})),i=(c("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number},ifMuted:Boolean,ifLoop:{default:!0,type:Boolean}},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume()},methods:{incrementVolume:function(){var e=this;this.setInterval=setInterval((function(){e.volume>e.maxVol-e.increment?clearInterval(e.setInterval):(e.volume+=e.increment,e.$refs.audio.volume=e.actualVolume)}),this.speedOfIncrement)}},computed:{actualVolume:function(){return this.ifMuted?0:this.volume}},watch:{ifMuted:function(){this.$refs.audio.volume=this.actualVolume}},unmounted:function(){clearInterval(this.setInterval)}});c("74e0");i.render=o,i.__scopeId="data-v-1569787f";t["a"]=i},"200a":function(e,t,c){},2064:function(e,t,c){e.exports=c.p+"img/ass7.cf4b4b6a.jpg"},"23a2":function(e,t,c){e.exports=c.p+"img/ass1.02c8a35e.jpg"},"26c8":function(e,t,c){e.exports=c.p+"img/ass14.4bdce1f4.jpg"},"2b59":function(e,t,c){},"4e7a":function(e,t,c){e.exports=c.p+"img/ass1.5db713e8.jpg"},"4fcf":function(e,t,c){e.exports=c.p+"img/ass17.0c634991.png"},5060:function(e,t,c){},"52af":function(e,t,c){e.exports=c.p+"img/ass3.102ddcaf.jpg"},"52fe":function(e,t,c){e.exports=c.p+"img/ass5.046bf8f8.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("f7e2"),o=(c("b0c0"),Object(n["I"])("data-v-7f7e3649"));Object(n["s"])("data-v-7f7e3649");var i={id:"container",class:"container-fluid position-relative"},a=Object(n["g"])("footer",{class:"row mt-3"},[Object(n["g"])("div",{class:"col f-center"},[Object(n["g"])("h4",{class:"m-2 fw-light"},[Object(n["g"])("a",{href:"https://www.appslife.co.il/",target:"_blanc"},"נבנה ופותח בAppsLife")])])],-1);Object(n["q"])();var s=o((function(e,t,r,o,s,u){var l=Object(n["x"])("toolBar"),d=Object(n["x"])("bg"),f=Object(n["x"])("timer"),m=Object(n["x"])("router-view");return Object(n["p"])(),Object(n["d"])("div",i,[Object(n["g"])(l),Object(n["g"])(d,{img:c("beed")},null,8,["img"]),u.name?(Object(n["p"])(),Object(n["d"])(f,{key:0})):Object(n["e"])("",!0),Object(n["g"])(m),a])})),u=c("cf05"),l=c.n(u),d=Object(n["I"])("data-v-0e5870b0");Object(n["s"])("data-v-0e5870b0");var f={class:"row row-nav p-e-n"},m={class:"col"},p={class:"container p-0"},b={class:"row pt-1 pb-1"},g={class:"col f-center-between"},h=Object(n["g"])("img",{class:"w-100",src:l.a,alt:""},null,-1);Object(n["q"])();var v=d((function(e,t,c,r,o,i){var a=Object(n["x"])("router-link"),s=Object(n["x"])("buttonsPlace");return Object(n["p"])(),Object(n["d"])("nav",f,[Object(n["g"])("div",m,[Object(n["g"])("div",p,[Object(n["g"])("div",b,[Object(n["g"])("div",g,[Object(n["g"])(a,{tag:"div",to:"/",class:"logo p-e-p"},{default:d((function(){return[h]})),_:1}),Object(n["g"])(s,{class:"p-e-p"})])])])])])})),j=Object(n["I"])("data-v-6d2b037a");Object(n["s"])("data-v-6d2b037a");var O={class:"buttons-place f-center mt-2 me-2"};Object(n["q"])();var S=j((function(e,t,c,r,o,i){var a=Object(n["x"])("fullScreen"),s=Object(n["x"])("muteSound");return Object(n["p"])(),Object(n["d"])("div",O,[Object(n["g"])(a),Object(n["g"])(s)])})),C=Object(n["g"])("span",{class:"material-icons-outlined"}," screen_rotation ",-1);function k(e,t,c,r,o,i){var a=Object(n["x"])("wrapIcons");return o.ifMobile?(Object(n["p"])(),Object(n["d"])(a,{key:0,onClick:i.fullScreen},{default:Object(n["F"])((function(){return[C]})),_:1},8,["onClick"])):Object(n["e"])("",!0)}var w={class:"wrap-icon"};function x(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("div",w,[Object(n["w"])(e.$slots,"default")])}var y={name:"wrapIcons"};c("a283");y.render=x;var I=y,R={name:"fullScreen",components:{wrapIcons:I},data:function(){return{isFullScreen:!1,ifMobile:!(window.innerWidth>767),ifSetStyle:!1}},methods:{fullScreen:function(){if(this.ifMobile)if(this.isFullScreen)screen.orientation.lock("portrait-primary"),this.isFullScreen=!1;else{if(!this.ifSetStyle){var e="\n    :not(:root):fullscreen::backdrop {\n      background: #ffffff00 !important;\n    }\n    \n    body:fullscreen {\n      width: 100%;\n      overflow: auto;\n    }\n",t=document.createElement("style");t.innerText=e,document.head.appendChild(t),this.ifSetStyle=!0}var c=document.body;document.documentElement.requestFullscreen?c.requestFullscreen():document.documentElement.webkitRequestFullScreen&&c.webkitRequestFullScreen(),screen.orientation.lock("landscape-primary"),this.isFullScreen=!0}}}};c("c1c1");R.render=k;var _=R,q={key:0,class:"material-icons-outlined"},E={key:1,class:"material-icons-outlined"};function M(e,t,c,r,o,i){var a=this,s=Object(n["x"])("wrapIcons");return Object(n["p"])(),Object(n["d"])(s,{class:"wrap-icon",onClick:i.muteSound},{default:Object(n["F"])((function(){return[a.$store.state.ifMuted?(Object(n["p"])(),Object(n["d"])("span",E," volume_up ")):(Object(n["p"])(),Object(n["d"])("span",q," volume_off "))]})),_:1},8,["onClick"])}var F={name:"muteSound",components:{wrapIcons:I},data:function(){return{isMuted:!1}},methods:{muteSound:function(){this.$store.state.ifMuted=!this.$store.state.ifMuted}}};c("6395");F.render=M;var $=F,A={name:"buttonsPlace",components:{fullScreen:_,muteSound:$}};c("e130");A.render=S,A.__scopeId="data-v-6d2b037a";var B=A,T={name:"toolBar",components:{buttonsPlace:B},data:function(){return{}}};c("13d5");T.render=v,T.__scopeId="data-v-0e5870b0";var N=T,V=c("06f2"),P=Object(n["I"])("data-v-33954a95");Object(n["s"])("data-v-33954a95");var z={class:"col"},L={class:"f-center text-center"},G=Object(n["g"])("i",{class:"las la-hourglass-half"},null,-1),D=Object(n["f"])(" : ");Object(n["q"])();var H=P((function(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("div",{class:["row",0===o.seconds?"transparent-color":"main-color"]},[Object(n["g"])("div",z,[Object(n["g"])("h2",L,[G,Object(n["g"])("div",null,Object(n["z"])(o.seconds),1),D,Object(n["g"])("div",null,Object(n["z"])(o.minutes),1)])])],2)})),J={name:"timer",data:function(){return{totalSeconds:0,seconds:0,minutes:0,interval:null}},mounted:function(){this.interval=setInterval(this.setTime,1e3)},computed:{endEscapeRoom:function(){return this.$store.state.endEscapeRoom}},methods:{setTime:function(){++this.totalSeconds,this.seconds=this.pad(this.totalSeconds%60),this.minutes=this.pad(parseInt(this.totalSeconds/60))},pad:function(e){var t=e+"";return t.length<2?"0"+t:t}},watch:{endEscapeRoom:function(e){e&&(clearInterval(this.interval),this.$store.commit("passEndTimer",{seconds:this.seconds,minutes:this.minutes}),this.$store.dispatch("addScore"))}}};c("7c731");J.render=H,J.__scopeId="data-v-33954a95";var K=J,U={name:"App",components:{toolBar:N,bg:V["a"],timer:K},computed:{name:function(){return this.$store.state.name}}};c("de93");U.render=s,U.__scopeId="data-v-7f7e3649";var Y=U,W=(c("d3b7"),c("6c02")),Z=c("805f"),Q=c.n(Z),X=Object(n["I"])("data-v-48367304");Object(n["s"])("data-v-48367304");var ee={class:"row min-height-screen f-center position-relative"},te={class:"col "},ce={class:"container p-0"},ne={class:"row mt-md-5 mt-0"},re={class:"col-md-4 order-md-1 order-2 position-relative pt-3 pb-3 mt-md-0 mt-5"},oe=Object(n["g"])("h3",{class:"fw-bold"},"הוראות",-1),ie=Object(n["g"])("ul",{class:"ps-0"},[Object(n["g"])("li",null,"חדר הבריחה מתאים כמשחק תחרותי לקבוצות וכאתגר לשחקן יחידי"),Object(n["g"])("li",null,"למשחק מרובה משתתפים כל שחקן/קבוצה יחזיק/ו מכשיר שבו יוכל/ו לשחק"),Object(n["g"])("li",null,"מי שיגיע לסיום ראשון הוא המנצח!")],-1),ae={class:"w-100 ps-3"},se=Object(n["g"])("button",{class:"g-butt bg-gradient mt-3 h5 p-2 w-50 ",type:"submit"},"התחלה",-1),ue=Object(n["g"])("div",{class:"col-md-8 order-md-2 order-1 text-center"},[Object(n["g"])("img",{class:"logo",src:Q.a,alt:""})],-1);Object(n["q"])();var le=X((function(e,t,c,r,o,i){var a=Object(n["x"])("aInput"),s=Object(n["x"])("installApp");return Object(n["p"])(),Object(n["d"])("div",ee,[Object(n["g"])("div",te,[Object(n["g"])("div",ce,[Object(n["g"])("div",ne,[Object(n["g"])("div",re,[Object(n["g"])("form",{class:"p-3",onSubmit:t[2]||(t[2]=Object(n["H"])((function(){return i.pushName&&i.pushName.apply(i,arguments)}),["prevent"]))},[oe,ie,Object(n["g"])("div",ae,[Object(n["g"])(a,{class:"mt-4",modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.name=e}),maxlength:"8",placeholder:"שם שחקן/קבוצה"},null,8,["modelValue"])]),se],32),Object(n["g"])(s,{class:"mt-3"})]),ue])])])])})),de=Object(n["I"])("data-v-403651d6"),fe=de((function(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("div",{class:"w-100 wrap",style:{color:c.color}},[Object(n["g"])("div",{class:"m-lab",style:{fontSize:o.ifFocus?c.labBSize+"px":c.labFSize+"px",top:o.ifFocus?-c.labBSize+"px":c.labFSize-10+"px"}},Object(n["z"])(c.placeholder),5),Object(n["g"])("input",{ref:"input",onFocus:t[1]||(t[1]=function(e){return o.ifFocus=!0}),style:{borderBottom:"solid ".concat(c.color," 2px"),color:c.color},onBlur:t[2]||(t[2]=function(){return i.checkFocus&&i.checkFocus.apply(i,arguments)}),value:c.modelValue,onInput:t[3]||(t[3]=function(){return i.emitText&&i.emitText.apply(i,arguments)}),required:c.required,type:c.type,pattern:c.pattern,minlength:c.minlength,maxlength:c.maxlength},null,44,["value","required","type","pattern","minlength","maxlength"])],4)})),me=(c("a9e3"),{name:"aInput",components:{},props:{labFSize:{type:Number,default:23},labBSize:{type:Number,default:18},modelValue:String,placeholder:String,color:{type:String,default:"rgb(22, 22, 22)"},type:{type:String,default:"text"},required:{type:Boolean,default:!0},maxlength:String,minlength:String,pattern:String},data:function(){return{ifFocus:!1,text:""}},mounted:function(){this.checkFocus()},methods:{checkFocus:function(){this.modelValue?this.ifFocus=!0:this.ifFocus=!1},emitText:function(e){this.text=e.target.value,this.$emit("update:modelValue",e.target.value)}}});c("73c0");me.render=fe,me.__scopeId="data-v-403651d6";var pe=me,be=Object(n["I"])("data-v-605af8ce");Object(n["s"])("data-v-605af8ce");var ge={class:"row"},he={class:"col f-center"},ve={ref:"addButton",class:"w-100 g-butt f-center p-2 c-p "},je=Object(n["g"])("span",{class:"material-icons-outlined m-1"}," download_for_offline ",-1),Oe=Object(n["g"])("p",{class:"m-0"},"להתקנת האפליקציה לחץ כאן",-1);Object(n["q"])();var Se=be((function(e,t,c,r,o,i){return Object(n["G"])((Object(n["p"])(),Object(n["d"])("div",ge,[Object(n["g"])("div",he,[Object(n["g"])("div",ve,[je,Oe],512)])],512)),[[n["D"],o.ifShow]])})),Ce=c("3d20"),ke=c.n(Ce),we={name:"installApp",components:{},data:function(){return{ifShow:!1}},mounted:function(){var e,t=this,c=this.$refs.addButton;this.ifShow=!1,window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e=n,t.ifShow=!0,c.addEventListener("click",(function(){t.ifShow=!1,e.prompt(),e.userChoice.then((function(t){"accepted"===t.outcome?ke.a.fire({icon:"success",title:"OK",text:"האפליקציה הותקנה בהצלחה!",timer:1500}):ke.a.fire({icon:"error",title:"בוטל",text:"ההתקנה נכשלה",timer:1500}),e=null}))}))}))},computed:{}};c("8a52");we.render=Se,we.__scopeId="data-v-605af8ce";var xe=we,ye={name:"Home",components:{aInput:pe,installApp:xe},data:function(){return{name:""}},created:function(){this.name=this.$store.state.name},methods:{pushName:function(){this.$store.commit("pushName",this.name),this.$router.push("/Story")}}};c("6cc2");ye.render=le,ye.__scopeId="data-v-48367304";var Ie=ye,Re=function(e,t,c){c()},_e=[{path:"/",name:"Home",component:Ie},{path:"/Story",name:"Story",component:function(){return c.e("about").then(c.bind(null,"095a"))},beforeEnter:Re},{path:"/MainRoom",name:"MainRoom",component:function(){return c.e("chunk-3546639d").then(c.bind(null,"cf19"))},beforeEnter:Re,children:[{path:"",name:"index",component:function(){return c.e("chunk-773ea8d6").then(c.bind(null,"80ad"))}},{path:"1",name:"1",component:function(){return c.e("chunk-615acb3a").then(c.bind(null,"b655"))}},{path:"2",name:"2",component:function(){return c.e("chunk-7c016c38").then(c.bind(null,"faca"))}},{path:"3",name:"3",component:function(){return c.e("chunk-73765c3a").then(c.bind(null,"ce91"))}},{path:"4",name:"4",component:function(){return c.e("chunk-4c690442").then(c.bind(null,"560c"))}},{path:"5",name:"5",component:function(){return c.e("chunk-2bb62532").then(c.bind(null,"875f"))}},{path:"6",name:"6",component:function(){return c.e("chunk-5e6a9a42").then(c.bind(null,"228a"))}},{path:"caveRoom",name:"caveRoom",component:function(){return c.e("chunk-3b8fab70").then(c.bind(null,"0f12"))}}]}],qe=Object(W["a"])({scrollBehavior:function(){return{left:0,top:0}},history:Object(W["b"])("/"),routes:_e});Object(r["b"])(qe);var Ee=qe,Me=(c("4160"),c("159b"),c("96cf"),c("1da1")),Fe=c("5502"),$e=c("7d1d"),Ae={state:function(){return{ifShuffle:!1,parts:[{img:c("23a2"),id:1},{img:c("820c"),id:2},{img:c("52af"),id:3},{img:c("65ba"),id:4},{img:c("52fe"),id:5},{img:c("9988"),id:6},{img:c("2064"),id:7},{img:c("b9af"),id:8},{img:c("8da7"),id:9},{img:c("61e1"),id:10},{img:c("6069"),id:11},{img:c("63ae"),id:12},{img:c("ef54"),id:13},{img:c("26c8"),id:14},{img:c("db55"),id:15}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.parts=Object($e["a"])(e.parts),e.ifShuffle=!0)}}},Be=Ae,Te={state:function(){return{bills:[{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:1},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:2},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:3},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:4},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:5},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:6},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:7},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:8},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:9},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:10},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:11},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:12},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:13},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:14},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:15},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:16},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:17},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:18},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:19},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:20},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:21},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:22},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:23},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:24},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:25},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:26},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:27},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:28},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:29},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:30}]}}},Ne=Te,Ve={state:function(){return{boxes:[{num:"",operator:"+",class:"left",id:"m1"},{num:"",operator:"-",class:"left",id:"m2"},{num:"",operator:"+",class:"left",id:"m3"},{num:"",operator:"-",class:"left",id:"m4"},{num:"",operator:"+",class:"left",id:"m5"},{num:"",operator:"-",class:"bottom",id:"m6"},{num:"",operator:"+",class:"bottom",id:"m7"},{num:"",operator:"-",class:"bottom",id:"m8"},{num:"",operator:"+",class:"bottom",id:"m9"},{num:"",operator:"-",class:"bottom",id:"m10"},{num:"",operator:"+",class:"right",id:"m11"},{num:"",operator:"-",class:"right",id:"m12"},{num:"",operator:"+",class:"right",id:"m13"},{num:"",operator:"-",class:"right",id:"m14"},{num:"",operator:"+",class:"right",id:"m15"},{num:"",operator:"-",class:"top",id:"m16"},{num:"",operator:"+",class:"top",id:"m17"},{num:"",operator:"-",class:"top",id:"m18"},{num:"",operator:"+",class:"top",id:"m19"},{num:"",operator:"-",class:"left",id:"m20"},{num:"",operator:"+",class:"left",id:"m21"}]}}},Pe=Ve,ze={state:function(){return{answers:[{ans:"מורה",id:1},{ans:"דיין",id:2},{ans:"דורש",id:3},{ans:"שוחט",id:4},{ans:"בודק",id:5},{ans:"חזן",id:6},{ans:"שמש",id:7}],correctAnswers:[]}}},Le=ze,Ge={state:function(){return{circles:[{top:34,left:38,ifSelect:!1,id:1},{top:39,left:2,ifSelect:!1,id:1},{top:40,left:55,ifSelect:!1,id:1},{top:30,left:11,ifSelect:!1,id:1}]}}},De=Ge,He={state:function(){return{ifShuffle:!1,redSentences:[{text:"נקודת התחלה לוח אדום",num:2,arrow:"la-arrow-right",colorSquare:"red",id:0},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה.  מִי בָכֶם מִכָּל עַמּוֹ יְהִי אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:4,arrow:"la-arrow-down",colorSquare:"red",id:1},{text:"וַיְהִי בִּימֵי אֲחַשְׁוֵרוֹשׁ הוּא אֲחַשְׁוֵרוֹשׁ הַמֹּלֵךְ מֵהֹדּוּ וְעַד כּוּשׁ שֶׁבַע וְעֶשְׂרִים וּמֵאָה מְדִינָה... וְכָל מַעֲשֵׂה תָקְפּוֹ וּגְבוּרָתוֹ וּפָרָשַׁת גְּדֻלַּת מָרְדֳּכַי אֲשֶׁר גִּדְּלוֹ הַמֶּלֶךְ הֲלוֹא הֵם כְּתוּבִים עַל סֵפֶר דִּבְרֵי הַיָּמִים לְמַלְכֵי מָדַי וּפָרָס.  כִּי מָרְדֳּכַי הַיְּהוּדִי מִשְׁנֶה לַמֶּלֶךְ אֲחַשְׁוֵרוֹשׁ וְגָדוֹל לַיְּהוּדִים...",num:2,arrow:"la-arrow-left",colorSquare:"red",id:2},{text:'אֲזַי דָּרְיָוֶשׁ הַמֶּלֶךְ שָׂם צַו, וּבִקְּרוּ בְּבֵית הַסְּפָרִים...וְנִמְצָא... בַּבִּירָה אֲשֶׁר בְּמָדַי הַמְּדִינָה, מְגִלָּה אַחַת, וְכֵן כָּתוּב בְּתוֹכָהּ: הַזִּכָּרוֹן: בִּשְׁנַת אַחַת לְכוֹרֶשׁ הַמֶּלֶךְ, כּוֹרֶשׁ הַמֶּלֶךְ שָׂם צַו: "בֵּית הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלַיִם הַבַּיִת יִבָּנֶה...וּמִמֶּנִּי [דריווש] הוּשַׂם צַו, לְמַה שֶׁתַּעֲשׂוּ עִם זִקְנֵי הַיְּהוּדִים הָאֵלֶּה, לִבְנוֹת אֶת בֵּית הָאֱלֹהִים הַזֶּה, וּמִנִּכְסֵי הַמֶּלֶךְ ...וְנִשְׁלַם בַּיִת זֶה עַד יוֹם שְׁלֹשָׁה לְחֹדֶשׁ אֲדָר, שֶׁהִיא שְׁנַת שֵׁשׁ לְמַלְכוּת דָּרְיָוֶשׁ הַמֶּלֶךְ.',num:3,arrow:"la-arrow-up",colorSquare:"red",id:3}],greenSentences:[{text:"נקודת התחלה לוח ירוק",num:2,arrow:"la-arrow-right",colorSquare:"green",id:4},{text:"בתקופה זו נהנו היהודים משלטונות נוחים יחסית, וקיימו קשרים רוחניים וכלכליים עם היישוב היהודי המתחדש בארץ ישראל, וכמובן עם היישוב בבבל: סרו למרותם של ראש הגולה בבבל ושל מרכזי התורה בסורא, נהרדעא ופומבדיתא, שפרחו תחת השושלת הפרסית.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:5},{text:"לאחר הכיבוש המוסלמי-הערבי חלה הרעה במצבה של הקהילה.",num:2,arrow:"la-arrow-left",colorSquare:"green",id:6},{text:"בתקופה זו החלה הגירה יהודית מאיראן לארץ ישראל, במקביל לעלייה הראשונה מאירופה ולעלייה מתימן.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:7},{text:"ערב הקמת מדינת ישראל החלה בקהילה היהודית התעניינות ערה בציונות. באיראן היו אז כ-100,000 יהודים, וכ-20,000 יהודים פרסיים בארץ ישראל. עד לשנת 1968 עלו ארצה כ-70,000 מיהודי איראן. מאז המהפכה האיסלאמית ועלייתו לשלטון של חומייני, התערער מצבה של הקהילה היהודית באיראן ויהודים רבים עזבו את שטחה.",num:2,arrow:"la-arrow-right",colorSquare:"green",id:8}],redSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!0,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!1,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!0,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}],greenSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!1,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!0,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!1,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.redSentences=Object($e["a"])(e.redSentences),e.greenSentences=Object($e["a"])(e.greenSentences),e.ifShuffle=!0)}}},Je=He,Ke=Object(Fe["a"])({state:{name:"",endEscapeRoom:!1,endTime:{},ifMuted:!1,rooms:[{text:"חדר 1",link:"/MainRoom/1",code:14,ifCheck:!1,ifResolved:!1,id:1},{text:"חדר 2",link:"/MainRoom/2",code:15,ifCheck:!1,ifResolved:!1,id:2},{text:"חדר 3",link:"/MainRoom/3",code:7,ifCheck:!1,ifResolved:!1,id:3},{text:"חדר 4",link:"/MainRoom/4",code:7,ifCheck:!1,ifResolved:!1,id:4},{text:"חדר 5",link:"/MainRoom/5",code:4,ifCheck:!1,ifResolved:!1,id:5},{text:"חדר 6",link:"/MainRoom/6",code:20,ifCheck:!1,ifResolved:!1,id:6}],codesCorrectOrder:[{correct:7,input:"",id:1},{correct:14,input:"",id:2},{correct:15,input:"",id:3},{correct:20,input:"",id:4},{correct:7,input:"",id:5},{correct:4,input:"",id:6}]},mutations:{pushName:function(e,t){e.name=t},endTask:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifCheck=!0)}))},completeRoom:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifResolved=!0)}))},endEscapeRoom:function(e){e.endEscapeRoom=!0},passEndTimer:function(e,t){e.endTime=t,console.log("passEndTimer")}},actions:{addScore:function(e){return Object(Me["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,c={name:e.state.name,endTime:e.state.endTime,collection:"escape-room"},console.log(c),t.next=5,fetch("https://free-services.herokuapp.com/rambam-quiz/add-score-simple",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return n=t.sent,t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},modules:{Gpuzzle:Be,GmoneyBills:Ne,GgridStory:Pe,Gmori:Le,GfindInImg:De,GarrangeSentences:Je}}),Ue=(c("fc04"),c("96b1"),Object(n["I"])("data-v-378f5036"));Object(n["s"])("data-v-378f5036");var Ye={class:"row mt-3"},We={class:"col"},Ze={class:"row"},Qe={class:"col-md-2 f-right-top main-color"},Xe=Object(n["g"])("h5",{class:"fw-bold mt-1 f-center g-butt p-2"},[Object(n["g"])("span",{class:"material-icons-outlined"}," double_arrow "),Object(n["f"])("חזרה לחדר הראשי")],-1),et={class:"col-md-10"},tt={class:"row"},ct={class:"col-md-2 order-md-0 order-1"},nt={class:"row"},rt={class:"col-md-12 col-9"},ot={class:"col-md-12 col-3 pt-3 text-center"},it={class:"col-md-10 order-md-1 order-0"};Object(n["q"])();var at=Ue((function(e,t,c,r,o,i){var a=Object(n["x"])("router-link"),s=Object(n["x"])("checkCode");return Object(n["p"])(),Object(n["d"])("div",Ye,[Object(n["g"])("div",We,[Object(n["g"])("div",Ze,[Object(n["g"])("div",Qe,[Object(n["g"])(a,{to:"/MainRoom"},{default:Ue((function(){return[Xe]})),_:1})]),Object(n["g"])("div",et,[Object(n["w"])(e.$slots,"inst")])]),Object(n["g"])("div",tt,[Object(n["g"])("div",ct,[Object(n["g"])("div",nt,[Object(n["g"])("div",rt,[Object(n["g"])(s,{dataRoom:c.correntRoom},null,8,["dataRoom"])]),Object(n["g"])("div",ot,[Object(n["g"])("img",{class:"w-100",src:c.img},null,8,["src"])])])]),Object(n["g"])("div",it,[Object(n["w"])(e.$slots,"task")])])])])})),st=Object(n["I"])("data-v-415bf1b6");Object(n["s"])("data-v-415bf1b6");var ut={ref:"checkCode",class:"w-100 wrap-check img-contain f-right-top position-relative"},lt={key:1,class:"mt-md-0 mt-3"},dt={key:1,class:"mt-md-0 mt-3"},ft={class:"main-color fw-bolder h3"};Object(n["q"])();var mt=st((function(e,t,r,o,i,a){var s=Object(n["x"])("bg"),u=Object(n["x"])("autoAudio"),l=Object(n["x"])("aInput");return Object(n["p"])(),Object(n["d"])("div",ut,[Object(n["g"])(s,{coverOrContain:"contain",img:c("4fcf")},null,8,["img"]),i.play?(Object(n["p"])(),Object(n["d"])(u,{key:0,src:i.srcAudio,ifLoop:!1,maxVol:1,increment:1,speedOfIncrement:0,ifMuted:e.$store.state.ifMuted,onEndAudio:t[1]||(t[1]=function(e){return i.play=!1})},null,8,["src","ifMuted"])):Object(n["e"])("",!0),r.dataRoom.ifCheck?(Object(n["p"])(),Object(n["d"])(n["a"],{key:2},[r.dataRoom.ifResolved?(Object(n["p"])(),Object(n["d"])("h4",dt,[Object(n["f"])("הצופן של חדר מס' "+Object(n["z"])(r.dataRoom.id)+" הוא ",1),Object(n["g"])("span",ft,Object(n["z"])(r.dataRoom.code),1)])):(Object(n["p"])(),Object(n["d"])(n["a"],{key:0},[Object(n["g"])(l,{class:"mt-md-0 mt-3",modelValue:i.code,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.code=e}),placeholder:"בדיקת צופן",required:!1},null,8,["modelValue"]),Object(n["g"])("div",{class:"g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3",onClick:t[3]||(t[3]=function(){return a.checkCode&&a.checkCode.apply(a,arguments)})},"בדיקה")],64))],64)):(Object(n["p"])(),Object(n["d"])("h4",lt,"לאחר סיום המשימה תוכלו לבדוק כאן את הצופן"))],512)})),pt=c("14e5"),bt={name:"checkCode",components:{aInput:pe,autoAudio:pt["a"],bg:V["a"]},props:{dataRoom:Object},data:function(){return{code:"",play:!1,srcAudio:null}},methods:{checkCode:function(){var e=this;return Object(Me["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(+e.code!==e.dataRoom.code){t.next=9;break}return e.srcAudio="../audio/final-room.mp3",e.play=!0,e.$store.commit("completeRoom",e.dataRoom.id),t.next=6,ke.a.fire({title:"יפה מאוד!",text:"הצלחתם למצוא את הצופן של חדר מס'"+e.dataRoom.id,timer:3e3,icon:"success",timerProgressBar:!0});case 6:e.$router.push("/mainRoom/"),t.next=10;break;case 9:ke.a.fire({title:"קוד שגוי",text:"נסו שוב",timer:3e3,icon:"error",timerProgressBar:!0});case 10:case"end":return t.stop()}}),t)})))()}},computed:{ifCheck:function(){return this.dataRoom.ifCheck}},watch:{ifCheck:function(){var e=Object(Me["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return this.srcAudio="../audio/final-task.mp3",this.play=!0,e.next=5,ke.a.fire({title:"סיימתם את המשימה. עכשיו נותר לכם למצוא את הצופן ולבדוק אותו בשדה הטקסט",timer:4e3,icon:"success",timerProgressBar:!0});case 5:this.$refs.checkCode.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};c("f183");bt.render=mt,bt.__scopeId="data-v-415bf1b6";var gt=bt,ht={name:"roomSlots",components:{checkCode:gt},props:{img:String,correntRoom:Object},data:function(){return{}}};c("5812");ht.render=at,ht.__scopeId="data-v-378f5036";var vt=ht,jt=c("9483");Object(jt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ot=Object(n["c"])(Y);Ot.component("roomSlots",vt),Ot.use(r["a"],{property:{id:"G-73VKYBNZY2"}}),Ot.use(Ke).use(Ee).mount("#app")},5812:function(e,t,c){"use strict";c("fb55")},"5e9d":function(e,t,c){},6069:function(e,t,c){e.exports=c.p+"img/ass11.71a57f64.jpg"},"61e1":function(e,t,c){e.exports=c.p+"img/ass10.fd86d695.jpg"},6395:function(e,t,c){"use strict";c("748f")},"63ae":function(e,t,c){e.exports=c.p+"img/ass12.848121b9.jpg"},"65ba":function(e,t,c){e.exports=c.p+"img/ass4.9dfa1ac0.jpg"},"6cc2":function(e,t,c){"use strict";c("7a78")},"73c0":function(e,t,c){"use strict";c("e1ce")},"748f":function(e,t,c){},"74e0":function(e,t,c){"use strict";c("5060")},"7a78":function(e,t,c){},"7c6a":function(e,t,c){},"7c731":function(e,t,c){"use strict";c("f53b")},"7d1d":function(e,t,c){"use strict";var n=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return e};t["a"]=n},"805f":function(e,t,c){e.exports=c.p+"img/ass23.08464f0c.png"},"820c":function(e,t,c){e.exports=c.p+"img/ass2.7627729c.jpg"},8605:function(e,t,c){e.exports=c.p+"img/ass3.ea1cbdc6.jpg"},"8a52":function(e,t,c){"use strict";c("7c6a")},"8da7":function(e,t,c){e.exports=c.p+"img/ass9.ffe9cbe6.jpg"},"96b1":function(e,t,c){},9729:function(e,t,c){e.exports=c.p+"img/ass2.1ea7c2fa.jpg"},9988:function(e,t,c){e.exports=c.p+"img/ass6.7b313dfc.jpg"},a283:function(e,t,c){"use strict";c("c8e3")},a5b6:function(e,t,c){"use strict";c("ec48")},acb1:function(e,t,c){},b9af:function(e,t,c){e.exports=c.p+"img/ass8.d7dfa216.jpg"},beed:function(e,t,c){e.exports=c.p+"img/ass.42b5ae18.jpg"},c1c1:function(e,t,c){"use strict";c("5e9d")},c8e3:function(e,t,c){},cf05:function(e,t,c){e.exports=c.p+"img/logo.e69a5e56.png"},db55:function(e,t,c){e.exports=c.p+"img/ass15.d5544ee2.jpg"},de93:function(e,t,c){"use strict";c("200a")},e130:function(e,t,c){"use strict";c("2b59")},e1ce:function(e,t,c){},ec48:function(e,t,c){},ed92:function(e,t,c){},ef54:function(e,t,c){e.exports=c.p+"img/ass13.f5cdde5b.jpg"},f183:function(e,t,c){"use strict";c("acb1")},f53b:function(e,t,c){},fb55:function(e,t,c){},fc04:function(e,t,c){}});
//# sourceMappingURL=app.935c5137.js.map