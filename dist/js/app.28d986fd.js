(function(e){function t(t){for(var n,i,a=t[0],s=t[1],u=t[2],d=0,l=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,i=1;i<c.length;i++){var a=c[i];0!==o[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},i={app:0},o={app:0},r=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7f681ad3","chunk-0d318b11":"39371346","chunk-25b078fc":"4c42c485","chunk-2bb62532":"1ce5e7c6","chunk-3546639d":"f46e5041","chunk-3b38c8db":"a099f404","chunk-5e6a9a42":"720a634d","chunk-615acb3a":"193fae48","chunk-73765c3a":"c933e0f6","chunk-d12128a0":"887873ed"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var t=[],c={about:1,"chunk-0d318b11":1,"chunk-25b078fc":1,"chunk-2bb62532":1,"chunk-3546639d":1,"chunk-3b38c8db":1,"chunk-5e6a9a42":1,"chunk-615acb3a":1,"chunk-73765c3a":1,"chunk-d12128a0":1};i[e]?t.push(i[e]):0!==i[e]&&c[e]&&t.push(i[e]=new Promise((function(t,c){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"3f26c470","chunk-0d318b11":"86343a8c","chunk-25b078fc":"422aba53","chunk-2bb62532":"c8c63c2e","chunk-3546639d":"d3a02927","chunk-3b38c8db":"7d92b4d6","chunk-5e6a9a42":"d579aca1","chunk-615acb3a":"04a56d88","chunk-73765c3a":"6c2e3733","chunk-d12128a0":"6d98e7c9"}[e]+".css",o=s.p+n,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var u=r[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],f.parentNode.removeChild(f),c(r)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=a(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var c=o[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,c[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"06f2":function(e,t,c){"use strict";var n=c("7a23"),i=Object(n["H"])("data-v-4433b03a"),o=i((function(e,t,c,i,o,r){return Object(n["p"])(),Object(n["d"])("div",{class:["bg","cover"===c.coverOrContain?"img-cover":"img-contain"],style:{backgroundImage:"url(".concat(c.img,")"),opacity:c.opacity}},null,6)})),r={name:"bg",props:{img:String,coverOrContain:{default:"cover",type:String},opacity:{default:".4",type:String}}};c("a5b6");r.render=o,r.__scopeId="data-v-4433b03a";t["a"]=r},"0e93":function(e,t,c){"use strict";c("27a2")},1090:function(e,t,c){e.exports=c.p+"img/ass4.d4bac1e3.jpg"},"13d5":function(e,t,c){"use strict";c("ed92")},"14e5":function(e,t,c){"use strict";var n=c("7a23"),i=Object(n["H"])("data-v-1569787f"),o=i((function(e,t,c,i,o,r){return Object(n["p"])(),Object(n["d"])("audio",{ref:"audio",loop:c.ifLoop,src:c.src,onEnded:t[1]||(t[1]=function(t){return e.$emit("end-audio")})},null,40,["loop","src"])})),r=(c("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number},ifMuted:Boolean,ifLoop:{default:!0,type:Boolean}},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume()},methods:{incrementVolume:function(){var e=this;this.setInterval=setInterval((function(){e.volume>e.maxVol-e.increment?clearInterval(e.setInterval):(e.volume+=e.increment,e.$refs.audio.volume=e.actualVolume)}),this.speedOfIncrement)}},computed:{actualVolume:function(){return this.ifMuted?0:this.volume}},watch:{ifMuted:function(){this.$refs.audio.volume=this.actualVolume}},unmounted:function(){clearInterval(this.setInterval)}});c("74e0");r.render=o,r.__scopeId="data-v-1569787f";t["a"]=r},"200a":function(e,t,c){},2064:function(e,t,c){e.exports=c.p+"img/ass7.cf4b4b6a.jpg"},"23a2":function(e,t,c){e.exports=c.p+"img/ass1.02c8a35e.jpg"},"26c8":function(e,t,c){e.exports=c.p+"img/ass14.4bdce1f4.jpg"},"27a2":function(e,t,c){},"2b59":function(e,t,c){},"4e7a":function(e,t,c){e.exports=c.p+"img/ass1.5db713e8.jpg"},"4fcf":function(e,t,c){e.exports=c.p+"img/ass17.0c634991.png"},5060:function(e,t,c){},"52af":function(e,t,c){e.exports=c.p+"img/ass3.102ddcaf.jpg"},"52fe":function(e,t,c){e.exports=c.p+"img/ass5.046bf8f8.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),i=c("f7e2"),o=(c("b0c0"),Object(n["H"])("data-v-7f7e3649"));Object(n["s"])("data-v-7f7e3649");var r={id:"container",class:"container-fluid position-relative"},a=Object(n["g"])("footer",{class:"row mt-3"},[Object(n["g"])("div",{class:"col f-center"},[Object(n["g"])("h4",{class:"m-2 fw-light"},[Object(n["g"])("a",{href:"https://www.appslife.co.il/",target:"_blanc"},"נבנה ופותח בAppsLife")])])],-1);Object(n["q"])();var s=o((function(e,t,i,o,s,u){var d=Object(n["x"])("toolBar"),l=Object(n["x"])("bg"),f=Object(n["x"])("timer"),m=Object(n["x"])("router-view");return Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])(d),Object(n["g"])(l,{img:c("beed")},null,8,["img"]),u.name?(Object(n["p"])(),Object(n["d"])(f,{key:0})):Object(n["e"])("",!0),Object(n["g"])(m),a])})),u=c("cf05"),d=c.n(u),l=Object(n["H"])("data-v-0e5870b0");Object(n["s"])("data-v-0e5870b0");var f={class:"row row-nav p-e-n"},m={class:"col"},p={class:"container p-0"},b={class:"row pt-1 pb-1"},g={class:"col f-center-between"},h=Object(n["g"])("img",{class:"w-100",src:d.a,alt:""},null,-1);Object(n["q"])();var v=l((function(e,t,c,i,o,r){var a=Object(n["x"])("router-link"),s=Object(n["x"])("buttonsPlace");return Object(n["p"])(),Object(n["d"])("nav",f,[Object(n["g"])("div",m,[Object(n["g"])("div",p,[Object(n["g"])("div",b,[Object(n["g"])("div",g,[Object(n["g"])(a,{tag:"div",to:"/",class:"logo p-e-p"},{default:l((function(){return[h]})),_:1}),Object(n["g"])(s,{class:"p-e-p"})])])])])])})),j=Object(n["H"])("data-v-6d2b037a");Object(n["s"])("data-v-6d2b037a");var O={class:"buttons-place f-center mt-2 me-2"};Object(n["q"])();var S=j((function(e,t,c,i,o,r){var a=Object(n["x"])("fullScreen"),s=Object(n["x"])("muteSound");return Object(n["p"])(),Object(n["d"])("div",O,[Object(n["g"])(a),Object(n["g"])(s)])})),C=Object(n["g"])("span",{class:"material-icons-outlined"}," screen_rotation ",-1);function k(e,t,c,i,o,r){var a=Object(n["x"])("wrapIcons");return o.ifMobile?(Object(n["p"])(),Object(n["d"])(a,{key:0,onClick:r.fullScreen},{default:Object(n["E"])((function(){return[C]})),_:1},8,["onClick"])):Object(n["e"])("",!0)}var x={class:"wrap-icon"};function w(e,t,c,i,o,r){return Object(n["p"])(),Object(n["d"])("div",x,[Object(n["w"])(e.$slots,"default")])}var y={name:"wrapIcons"};c("a283");y.render=w;var R=y,I={name:"fullScreen",components:{wrapIcons:R},data:function(){return{isFullScreen:!1,ifMobile:!(window.innerWidth>767),ifSetStyle:!1}},methods:{fullScreen:function(){if(this.ifMobile)if(this.isFullScreen)screen.orientation.lock("portrait-primary"),this.isFullScreen=!1;else{if(!this.ifSetStyle){var e="\n    :not(:root):fullscreen::backdrop {\n      background: #ffffff00 !important;\n    }\n    \n    body:fullscreen {\n      width: 100%;\n      overflow: auto;\n    }\n",t=document.createElement("style");t.innerText=e,document.head.appendChild(t),this.ifSetStyle=!0}var c=document.body;document.documentElement.requestFullscreen?c.requestFullscreen():document.documentElement.webkitRequestFullScreen&&c.webkitRequestFullScreen(),screen.orientation.lock("landscape-primary"),this.isFullScreen=!0}}}};c("c1c1");I.render=k;var _=I,q={key:0,class:"material-icons-outlined"},E={key:1,class:"material-icons-outlined"};function M(e,t,c,i,o,r){var a=this,s=Object(n["x"])("wrapIcons");return Object(n["p"])(),Object(n["d"])(s,{class:"wrap-icon",onClick:r.muteSound},{default:Object(n["E"])((function(){return[a.$store.state.ifMuted?(Object(n["p"])(),Object(n["d"])("span",E," volume_up ")):(Object(n["p"])(),Object(n["d"])("span",q," volume_off "))]})),_:1},8,["onClick"])}var T={name:"muteSound",components:{wrapIcons:R},data:function(){return{isMuted:!1}},methods:{muteSound:function(){this.$store.state.ifMuted=!this.$store.state.ifMuted}}};c("6395");T.render=M;var F=T,$={name:"buttonsPlace",components:{fullScreen:_,muteSound:F}};c("e130");$.render=S,$.__scopeId="data-v-6d2b037a";var V=$,A={name:"toolBar",components:{buttonsPlace:V},data:function(){return{}}};c("13d5");A.render=v,A.__scopeId="data-v-0e5870b0";var B=A,N=c("06f2"),z=Object(n["H"])("data-v-33954a95");Object(n["s"])("data-v-33954a95");var H={class:"col"},P={class:"f-center text-center"},L=Object(n["g"])("i",{class:"las la-hourglass-half"},null,-1),G=Object(n["f"])(" : ");Object(n["q"])();var J=z((function(e,t,c,i,o,r){return Object(n["p"])(),Object(n["d"])("div",{class:["row",0===o.seconds?"transparent-color":"main-color"]},[Object(n["g"])("div",H,[Object(n["g"])("h2",P,[L,Object(n["g"])("div",null,Object(n["z"])(o.seconds),1),G,Object(n["g"])("div",null,Object(n["z"])(o.minutes),1)])])],2)})),U={name:"timer",data:function(){return{totalSeconds:0,seconds:0,minutes:0,interval:null}},mounted:function(){this.interval=setInterval(this.setTime,1e3)},computed:{endEscapeRoom:function(){return this.$store.state.endEscapeRoom}},methods:{setTime:function(){++this.totalSeconds,this.seconds=this.pad(this.totalSeconds%60),this.minutes=this.pad(parseInt(this.totalSeconds/60))},pad:function(e){var t=e+"";return t.length<2?"0"+t:t}},watch:{endEscapeRoom:function(e){e&&(clearInterval(this.interval),this.$store.commit("passEndTimer",{seconds:this.seconds,minutes:this.minutes}),this.$store.dispatch("addScore"))}}};c("7c731");U.render=J,U.__scopeId="data-v-33954a95";var D=U,K={name:"App",components:{toolBar:B,bg:N["a"],timer:D},computed:{name:function(){return this.$store.state.name}}};c("de93");K.render=s,K.__scopeId="data-v-7f7e3649";var Y=K,W=(c("d3b7"),c("6c02")),Z=(c("4160"),c("159b"),c("96cf"),c("1da1")),Q=c("5502"),X=c("7d1d"),ee={state:function(){return{ifShuffle:!1,parts:[{img:c("23a2"),id:1},{img:c("820c"),id:2},{img:c("52af"),id:3},{img:c("65ba"),id:4},{img:c("52fe"),id:5},{img:c("9988"),id:6},{img:c("2064"),id:7},{img:c("b9af"),id:8},{img:c("8da7"),id:9},{img:c("61e1"),id:10},{img:c("6069"),id:11},{img:c("63ae"),id:12},{img:c("ef54"),id:13},{img:c("26c8"),id:14},{img:c("db55"),id:15}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.parts=Object(X["a"])(e.parts),e.ifShuffle=!0)}}},te=ee,ce={state:function(){return{bills:[{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:1},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:2},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:3},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:4},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:5},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:6},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:7},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:8},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:9},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:10},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:11},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:12},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:13},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:14},{img:c("4e7a"),ifSelect:!1,ifCorrect:!0,id:15},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:16},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:17},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:18},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:19},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:20},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:21},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:22},{img:c("9729"),ifSelect:!1,ifCorrect:!1,id:23},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:24},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:25},{img:c("1090"),ifSelect:!1,ifCorrect:!1,id:26},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:27},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:28},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:29},{img:c("8605"),ifSelect:!1,ifCorrect:!1,id:30}]}}},ne=ce,ie={state:function(){return{boxes:[{num:"",operator:"+",class:"left",id:"m1"},{num:"",operator:"-",class:"left",id:"m2"},{num:"",operator:"+",class:"left",id:"m3"},{num:"",operator:"-",class:"left",id:"m4"},{num:"",operator:"+",class:"left",id:"m5"},{num:"",operator:"-",class:"bottom",id:"m6"},{num:"",operator:"+",class:"bottom",id:"m7"},{num:"",operator:"-",class:"bottom",id:"m8"},{num:"",operator:"+",class:"bottom",id:"m9"},{num:"",operator:"-",class:"bottom",id:"m10"},{num:"",operator:"+",class:"right",id:"m11"},{num:"",operator:"-",class:"right",id:"m12"},{num:"",operator:"+",class:"right",id:"m13"},{num:"",operator:"-",class:"right",id:"m14"},{num:"",operator:"+",class:"right",id:"m15"},{num:"",operator:"-",class:"top",id:"m16"},{num:"",operator:"+",class:"top",id:"m17"},{num:"",operator:"-",class:"top",id:"m18"},{num:"",operator:"+",class:"top",id:"m19"},{num:"",operator:"-",class:"left",id:"m20"},{num:"",operator:"+",class:"left",id:"m21"}]}}},oe=ie,re={state:function(){return{answers:[{ans:"מורה",id:1},{ans:"דיין",id:2},{ans:"דורש",id:3},{ans:"שוחט",id:4},{ans:"בודק",id:5},{ans:"חזן",id:6},{ans:"שמש",id:7}],correctAnswers:[]}}},ae=re,se={state:function(){return{circles:[{top:34,left:38,ifSelect:!1,id:1},{top:39,left:2,ifSelect:!1,id:1},{top:40,left:55,ifSelect:!1,id:1},{top:30,left:11,ifSelect:!1,id:1}]}}},ue=se,de={state:function(){return{ifShuffle:!1,redSentences:[{text:"נקודת התחלה לוח אדום",num:2,arrow:"la-arrow-right",colorSquare:"red",id:0},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה.  מִי בָכֶם מִכָּל עַמּוֹ יְהִי אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:4,arrow:"la-arrow-down",colorSquare:"red",id:1},{text:"וַיְהִי בִּימֵי אֲחַשְׁוֵרוֹשׁ הוּא אֲחַשְׁוֵרוֹשׁ הַמֹּלֵךְ מֵהֹדּוּ וְעַד כּוּשׁ שֶׁבַע וְעֶשְׂרִים וּמֵאָה מְדִינָה... וְכָל מַעֲשֵׂה תָקְפּוֹ וּגְבוּרָתוֹ וּפָרָשַׁת גְּדֻלַּת מָרְדֳּכַי אֲשֶׁר גִּדְּלוֹ הַמֶּלֶךְ הֲלוֹא הֵם כְּתוּבִים עַל סֵפֶר דִּבְרֵי הַיָּמִים לְמַלְכֵי מָדַי וּפָרָס.  כִּי מָרְדֳּכַי הַיְּהוּדִי מִשְׁנֶה לַמֶּלֶךְ אֲחַשְׁוֵרוֹשׁ וְגָדוֹל לַיְּהוּדִים...",num:2,arrow:"la-arrow-left",colorSquare:"red",id:2},{text:'אֲזַי דָּרְיָוֶשׁ הַמֶּלֶךְ שָׂם צַו, וּבִקְּרוּ בְּבֵית הַסְּפָרִים...וְנִמְצָא... בַּבִּירָה אֲשֶׁר בְּמָדַי הַמְּדִינָה, מְגִלָּה אַחַת, וְכֵן כָּתוּב בְּתוֹכָהּ: הַזִּכָּרוֹן: בִּשְׁנַת אַחַת לְכוֹרֶשׁ הַמֶּלֶךְ, כּוֹרֶשׁ הַמֶּלֶךְ שָׂם צַו: "בֵּית הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלַיִם הַבַּיִת יִבָּנֶה...וּמִמֶּנִּי [דריווש] הוּשַׂם צַו, לְמַה שֶׁתַּעֲשׂוּ עִם זִקְנֵי הַיְּהוּדִים הָאֵלֶּה, לִבְנוֹת אֶת בֵּית הָאֱלֹהִים הַזֶּה, וּמִנִּכְסֵי הַמֶּלֶךְ ...וְנִשְׁלַם בַּיִת זֶה עַד יוֹם שְׁלֹשָׁה לְחֹדֶשׁ אֲדָר, שֶׁהִיא שְׁנַת שֵׁשׁ לְמַלְכוּת דָּרְיָוֶשׁ הַמֶּלֶךְ.',num:3,arrow:"la-arrow-up",colorSquare:"red",id:3}],greenSentences:[{text:"נקודת התחלה לוח ירוק",num:2,arrow:"la-arrow-right",colorSquare:"green",id:4},{text:"בתקופה זו נהנו היהודים משלטונות נוחים יחסית, וקיימו קשרים רוחניים וכלכליים עם היישוב היהודי המתחדש בארץ ישראל, וכמובן עם היישוב בבבל: סרו למרותם של ראש הגולה בבבל ושל מרכזי התורה בסורא, נהרדעא ופומבדיתא, שפרחו תחת השושלת הפרסית.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:5},{text:"לאחר הכיבוש המוסלמי-הערבי חלה הרעה במצבה של הקהילה.",num:2,arrow:"la-arrow-left",colorSquare:"green",id:6},{text:"בתקופה זו החלה הגירה יהודית מאיראן לארץ ישראל, במקביל לעלייה הראשונה מאירופה ולעלייה מתימן.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:7},{text:"ערב הקמת מדינת ישראל החלה בקהילה היהודית התעניינות ערה בציונות. באיראן היו אז כ-100,000 יהודים, וכ-20,000 יהודים פרסיים בארץ ישראל. עד לשנת 1968 עלו ארצה כ-70,000 מיהודי איראן. מאז המהפכה האיסלאמית ועלייתו לשלטון של חומייני, התערער מצבה של הקהילה היהודית באיראן ויהודים רבים עזבו את שטחה.",num:2,arrow:"la-arrow-right",colorSquare:"green",id:8}],redSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!0,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!1,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!0,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}],greenSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!1,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!0,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!1,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.redSentences=Object(X["a"])(e.redSentences),e.greenSentences=Object(X["a"])(e.greenSentences),e.ifShuffle=!0)}}},le=de,fe=Object(Q["a"])({state:{name:"",endEscapeRoom:!1,endTime:{},ifMuted:!1,rooms:[{text:"חדר 1",link:"/MainRoom/1",code:14,ifCheck:!1,ifResolved:!1,id:1},{text:"חדר 2",link:"/MainRoom/2",code:15,ifCheck:!1,ifResolved:!1,id:2},{text:"חדר 3",link:"/MainRoom/3",code:7,ifCheck:!1,ifResolved:!1,id:3},{text:"חדר 4",link:"/MainRoom/4",code:7,ifCheck:!1,ifResolved:!1,id:4},{text:"חדר 5",link:"/MainRoom/5",code:4,ifCheck:!1,ifResolved:!1,id:5},{text:"חדר 6",link:"/MainRoom/6",code:20,ifCheck:!1,ifResolved:!1,id:6}],codesCorrectOrder:[{correct:7,input:"",id:1},{correct:14,input:"",id:2},{correct:15,input:"",id:3},{correct:20,input:"",id:4},{correct:7,input:"",id:5},{correct:4,input:"",id:6}]},mutations:{pushName:function(e,t){e.name=t},endTask:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifCheck=!0)}))},completeRoom:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifResolved=!0)}))},endEscapeRoom:function(e){e.endEscapeRoom=!0},passEndTimer:function(e,t){e.endTime=t,console.log("passEndTimer")}},actions:{addScore:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,c={name:e.state.name,endTime:e.state.endTime,collection:"escape-room"},console.log(c),t.next=5,fetch("https://free-services.herokuapp.com/rambam-quiz/add-score-simple",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return n=t.sent,t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},modules:{Gpuzzle:te,GmoneyBills:ne,GgridStory:oe,Gmori:ae,GfindInImg:ue,GarrangeSentences:le}}),me=c("805f"),pe=c.n(me),be=Object(n["H"])("data-v-3e626baa");Object(n["s"])("data-v-3e626baa");var ge={class:"row min-height-screen f-center position-relative"},he={class:"col "},ve={class:"container p-0"},je={class:"row mt-md-5 mt-0"},Oe={class:"col-md-4 order-md-1 order-2 position-relative pt-3 pb-3 mt-md-0 mt-5"},Se=Object(n["g"])("h3",{class:"fw-bold"},"הוראות",-1),Ce=Object(n["g"])("ul",{class:"ps-0"},[Object(n["g"])("li",null,"חדר הבריחה מתאים כמשחק תחרותי לקבוצות וכאתגר לשחקן יחידי"),Object(n["g"])("li",null,"למשחק מרובה משתתפים כל שחקן/קבוצה יחזיק/ו מכשיר שבו יוכל/ו לשחק"),Object(n["g"])("li",null,"מי שיגיע לסיום ראשון הוא המנצח!")],-1),ke={class:"w-100 ps-3"},xe=Object(n["g"])("button",{class:"g-butt bg-gradient mt-3 h5 p-2 w-50 ",type:"submit"},"התחלה",-1),we=Object(n["g"])("div",{class:"col-md-8 order-md-2 order-1 text-center"},[Object(n["g"])("img",{class:"logo",src:pe.a,alt:""})],-1);Object(n["q"])();var ye=be((function(e,t,c,i,o,r){var a=Object(n["x"])("aInput");return Object(n["p"])(),Object(n["d"])("div",ge,[Object(n["g"])("div",he,[Object(n["g"])("div",ve,[Object(n["g"])("div",je,[Object(n["g"])("div",Oe,[Object(n["g"])("form",{class:"p-3",onSubmit:t[2]||(t[2]=Object(n["G"])((function(){return r.pushName&&r.pushName.apply(r,arguments)}),["prevent"]))},[Se,Ce,Object(n["g"])("div",ke,[Object(n["g"])(a,{class:"mt-4",modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.name=e}),maxlength:"8",placeholder:"שם שחקן/קבוצה"},null,8,["modelValue"])]),xe],32)]),we])])])])})),Re=Object(n["H"])("data-v-403651d6"),Ie=Re((function(e,t,c,i,o,r){return Object(n["p"])(),Object(n["d"])("div",{class:"w-100 wrap",style:{color:c.color}},[Object(n["g"])("div",{class:"m-lab",style:{fontSize:o.ifFocus?c.labBSize+"px":c.labFSize+"px",top:o.ifFocus?-c.labBSize+"px":c.labFSize-10+"px"}},Object(n["z"])(c.placeholder),5),Object(n["g"])("input",{ref:"input",onFocus:t[1]||(t[1]=function(e){return o.ifFocus=!0}),style:{borderBottom:"solid ".concat(c.color," 2px"),color:c.color},onBlur:t[2]||(t[2]=function(){return r.checkFocus&&r.checkFocus.apply(r,arguments)}),value:c.modelValue,onInput:t[3]||(t[3]=function(){return r.emitText&&r.emitText.apply(r,arguments)}),required:c.required,type:c.type,pattern:c.pattern,minlength:c.minlength,maxlength:c.maxlength},null,44,["value","required","type","pattern","minlength","maxlength"])],4)})),_e=(c("a9e3"),{name:"aInput",components:{},props:{labFSize:{type:Number,default:23},labBSize:{type:Number,default:18},modelValue:String,placeholder:String,color:{type:String,default:"rgb(22, 22, 22)"},type:{type:String,default:"text"},required:{type:Boolean,default:!0},maxlength:String,minlength:String,pattern:String},data:function(){return{ifFocus:!1,text:""}},mounted:function(){this.checkFocus()},methods:{checkFocus:function(){this.modelValue?this.ifFocus=!0:this.ifFocus=!1},emitText:function(e){this.text=e.target.value,this.$emit("update:modelValue",e.target.value)}}});c("73c0");_e.render=Ie,_e.__scopeId="data-v-403651d6";var qe=_e,Ee={name:"Home",components:{aInput:qe},data:function(){return{name:""}},created:function(){this.name=this.$store.state.name},methods:{pushName:function(){this.$store.commit("pushName",this.name),this.$router.push("/Story")}}};c("9e6a");Ee.render=ye,Ee.__scopeId="data-v-3e626baa";var Me=Ee,Te=function(e,t,c){fe.state.name?c():c({name:"Home"})},Fe=[{path:"/",name:"Home",component:Me},{path:"/Story",name:"Story",component:function(){return c.e("about").then(c.bind(null,"095a"))},beforeEnter:Te},{path:"/MainRoom",name:"MainRoom",component:function(){return c.e("chunk-3546639d").then(c.bind(null,"cf19"))},beforeEnter:Te,children:[{path:"",name:"index",component:function(){return c.e("chunk-d12128a0").then(c.bind(null,"80ad"))}},{path:"1",name:"1",component:function(){return c.e("chunk-615acb3a").then(c.bind(null,"b655"))}},{path:"2",name:"2",component:function(){return c.e("chunk-25b078fc").then(c.bind(null,"faca"))}},{path:"3",name:"3",component:function(){return c.e("chunk-73765c3a").then(c.bind(null,"ce91"))}},{path:"4",name:"4",component:function(){return c.e("chunk-0d318b11").then(c.bind(null,"560c"))}},{path:"5",name:"5",component:function(){return c.e("chunk-2bb62532").then(c.bind(null,"875f"))}},{path:"6",name:"6",component:function(){return c.e("chunk-5e6a9a42").then(c.bind(null,"228a"))}},{path:"caveRoom",name:"caveRoom",component:function(){return c.e("chunk-3b38c8db").then(c.bind(null,"0f12"))}}]}],$e=Object(W["a"])({scrollBehavior:function(){return{left:0,top:0}},history:Object(W["b"])("/"),routes:Fe});Object(i["b"])($e);var Ve=$e,Ae=(c("fc04"),c("96b1"),Object(n["H"])("data-v-378f5036"));Object(n["s"])("data-v-378f5036");var Be={class:"row mt-3"},Ne={class:"col"},ze={class:"row"},He={class:"col-md-2 f-right-top main-color"},Pe=Object(n["g"])("h5",{class:"fw-bold mt-1 f-center g-butt p-2"},[Object(n["g"])("span",{class:"material-icons-outlined"}," double_arrow "),Object(n["f"])("חזרה לחדר הראשי")],-1),Le={class:"col-md-10"},Ge={class:"row"},Je={class:"col-md-2 order-md-0 order-1"},Ue={class:"row"},De={class:"col-md-12 col-9"},Ke={class:"col-md-12 col-3 pt-3 text-center"},Ye={class:"col-md-10 order-md-1 order-0"};Object(n["q"])();var We=Ae((function(e,t,c,i,o,r){var a=Object(n["x"])("router-link"),s=Object(n["x"])("checkCode");return Object(n["p"])(),Object(n["d"])("div",Be,[Object(n["g"])("div",Ne,[Object(n["g"])("div",ze,[Object(n["g"])("div",He,[Object(n["g"])(a,{to:"/MainRoom"},{default:Ae((function(){return[Pe]})),_:1})]),Object(n["g"])("div",Le,[Object(n["w"])(e.$slots,"inst")])]),Object(n["g"])("div",Ge,[Object(n["g"])("div",Je,[Object(n["g"])("div",Ue,[Object(n["g"])("div",De,[Object(n["g"])(s,{dataRoom:c.correntRoom},null,8,["dataRoom"])]),Object(n["g"])("div",Ke,[Object(n["g"])("img",{class:"w-100",src:c.img},null,8,["src"])])])]),Object(n["g"])("div",Ye,[Object(n["w"])(e.$slots,"task")])])])])})),Ze=Object(n["H"])("data-v-64049fe0");Object(n["s"])("data-v-64049fe0");var Qe={ref:"checkCode",class:"w-100 wrap-check img-contain f-right-top position-relative"},Xe={key:1,class:"mt-md-0 mt-3"},et={key:1,class:"mt-md-0 mt-3"},tt={class:"main-color fw-bolder h3"};Object(n["q"])();var ct=Ze((function(e,t,i,o,r,a){var s=Object(n["x"])("bg"),u=Object(n["x"])("autoAudio"),d=Object(n["x"])("aInput");return Object(n["p"])(),Object(n["d"])("div",Qe,[Object(n["g"])(s,{coverOrContain:"contain",img:c("4fcf")},null,8,["img"]),r.play?(Object(n["p"])(),Object(n["d"])(u,{key:0,src:r.srcAudio,ifLoop:!1,maxVol:1,increment:1,speedOfIncrement:0,ifMuted:e.$store.state.ifMuted,onEndAudio:t[1]||(t[1]=function(e){return r.play=!1})},null,8,["src","ifMuted"])):Object(n["e"])("",!0),i.dataRoom.ifCheck?(Object(n["p"])(),Object(n["d"])(n["a"],{key:2},[i.dataRoom.ifResolved?(Object(n["p"])(),Object(n["d"])("h4",et,[Object(n["f"])("הצופן של חדר מס' "+Object(n["z"])(i.dataRoom.id)+" הוא ",1),Object(n["g"])("span",tt,Object(n["z"])(i.dataRoom.code),1)])):(Object(n["p"])(),Object(n["d"])(n["a"],{key:0},[Object(n["g"])(d,{class:"mt-md-0 mt-3",modelValue:r.code,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.code=e}),placeholder:"בדיקת צופן",required:!1},null,8,["modelValue"]),Object(n["g"])("div",{class:"g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3",onClick:t[3]||(t[3]=function(){return a.checkCode&&a.checkCode.apply(a,arguments)})},"בדיקה")],64))],64)):(Object(n["p"])(),Object(n["d"])("h4",Xe,"לאחר סיום המשימה תוכלו לבדוק כאן את הצופן"))],512)})),nt=c("14e5"),it=c("3d20"),ot=c.n(it),rt={name:"checkCode",components:{aInput:qe,autoAudio:nt["a"],bg:N["a"]},props:{dataRoom:Object},data:function(){return{code:"",play:!1,srcAudio:null}},methods:{checkCode:function(){var e=this;+this.code===this.dataRoom.code?(this.srcAudio="../audio/final-room.mp3",this.play=!0,ot.a.fire({title:"יפה מאוד!",text:"הצלחתם למצוא את הצופן של חדר מס'"+this.dataRoom.id,timer:900,icon:"success"}),this.$store.commit("completeRoom",this.dataRoom.id),setTimeout((function(){e.$router.push("/mainRoom/")}),3e3)):ot.a.fire({title:"קוד שגוי",text:"נסו שוב",timer:3e3,icon:"error"})}},computed:{ifCheck:function(){return this.dataRoom.ifCheck}},watch:{ifCheck:function(e){var t=this;e&&(this.srcAudio="../audio/final-task.mp3",this.play=!0,ot.a.fire({title:"סיימתם את המשימה. עכשיו נותר לכם למצוא את הצופן ולבדוק אותו בשדה הטקסט",timer:2e3,icon:"success"}),setTimeout((function(){t.$refs.checkCode.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),2300))}}};c("0e93");rt.render=ct,rt.__scopeId="data-v-64049fe0";var at=rt,st={name:"roomSlots",components:{checkCode:at},props:{img:String,correntRoom:Object},data:function(){return{}}};c("5812");st.render=We,st.__scopeId="data-v-378f5036";var ut=st,dt=Object(n["c"])(Y);dt.component("roomSlots",ut),dt.use(i["a"],{property:{id:"G-73VKYBNZY2"}}),dt.use(fe).use(Ve).mount("#app")},5812:function(e,t,c){"use strict";c("fb55")},"5e9d":function(e,t,c){},6069:function(e,t,c){e.exports=c.p+"img/ass11.71a57f64.jpg"},"61e1":function(e,t,c){e.exports=c.p+"img/ass10.fd86d695.jpg"},6395:function(e,t,c){"use strict";c("748f")},"63ae":function(e,t,c){e.exports=c.p+"img/ass12.848121b9.jpg"},"65ba":function(e,t,c){e.exports=c.p+"img/ass4.9dfa1ac0.jpg"},"73c0":function(e,t,c){"use strict";c("e1ce")},"748f":function(e,t,c){},"74e0":function(e,t,c){"use strict";c("5060")},"7c731":function(e,t,c){"use strict";c("f53b")},"7d1d":function(e,t,c){"use strict";var n=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return e};t["a"]=n},"805f":function(e,t,c){e.exports=c.p+"img/ass23.08464f0c.png"},"820c":function(e,t,c){e.exports=c.p+"img/ass2.7627729c.jpg"},8605:function(e,t,c){e.exports=c.p+"img/ass3.ea1cbdc6.jpg"},"8da7":function(e,t,c){e.exports=c.p+"img/ass9.ffe9cbe6.jpg"},"96b1":function(e,t,c){},9729:function(e,t,c){e.exports=c.p+"img/ass2.1ea7c2fa.jpg"},9988:function(e,t,c){e.exports=c.p+"img/ass6.7b313dfc.jpg"},"9e6a":function(e,t,c){"use strict";c("dd60")},a283:function(e,t,c){"use strict";c("c8e3")},a5b6:function(e,t,c){"use strict";c("ec48")},b9af:function(e,t,c){e.exports=c.p+"img/ass8.d7dfa216.jpg"},beed:function(e,t,c){e.exports=c.p+"img/ass.42b5ae18.jpg"},c1c1:function(e,t,c){"use strict";c("5e9d")},c8e3:function(e,t,c){},cf05:function(e,t,c){e.exports=c.p+"img/logo.e69a5e56.png"},db55:function(e,t,c){e.exports=c.p+"img/ass15.d5544ee2.jpg"},dd60:function(e,t,c){},de93:function(e,t,c){"use strict";c("200a")},e130:function(e,t,c){"use strict";c("2b59")},e1ce:function(e,t,c){},ec48:function(e,t,c){},ed92:function(e,t,c){},ef54:function(e,t,c){e.exports=c.p+"img/ass13.f5cdde5b.jpg"},f53b:function(e,t,c){},fb55:function(e,t,c){},fc04:function(e,t,c){}});
//# sourceMappingURL=app.28d986fd.js.map