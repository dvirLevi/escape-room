(function(e){function t(t){for(var c,r,a=t[0],s=t[1],u=t[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(c=!1)}c&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},r={app:0},o={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"04084660","chunk-2bb62532":"f9b6364d","chunk-3546639d":"5027b8ad","chunk-3b8fab70":"c33ae9ce","chunk-4c690442":"6fecb356","chunk-5e6a9a42":"ec79b946","chunk-615acb3a":"9b16d7e6","chunk-73765c3a":"f7fcb3a2","chunk-773ea8d6":"09c3afea","chunk-7c016c38":"f15c88cd"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-2bb62532":1,"chunk-3546639d":1,"chunk-3b8fab70":1,"chunk-4c690442":1,"chunk-5e6a9a42":1,"chunk-615acb3a":1,"chunk-73765c3a":1,"chunk-773ea8d6":1,"chunk-7c016c38":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"1f78cfa3","chunk-2bb62532":"c8c63c2e","chunk-3546639d":"d3a02927","chunk-3b8fab70":"b7ee5a10","chunk-4c690442":"38a78f72","chunk-5e6a9a42":"d579aca1","chunk-615acb3a":"04a56d88","chunk-73765c3a":"6c2e3733","chunk-773ea8d6":"b09af06d","chunk-7c016c38":"7544b7a3"}[e]+".css",o=s.p+c,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===c||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var i=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06f2":function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["I"])("data-v-4433b03a"),o=r((function(e,t,n,r,o,i){return Object(c["p"])(),Object(c["d"])("div",{class:["bg","cover"===n.coverOrContain?"img-cover":"img-contain"],style:{backgroundImage:"url(".concat(n.img,")"),opacity:n.opacity}},null,6)})),i={name:"bg",props:{img:String,coverOrContain:{default:"cover",type:String},opacity:{default:".4",type:String}}};n("a5b6");i.render=o,i.__scopeId="data-v-4433b03a";t["a"]=i},1090:function(e,t,n){e.exports=n.p+"img/ass4.d4bac1e3.jpg"},"13d5":function(e,t,n){"use strict";n("ed92")},"14e5":function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["I"])("data-v-1569787f"),o=r((function(e,t,n,r,o,i){return Object(c["p"])(),Object(c["d"])("audio",{ref:"audio",loop:n.ifLoop,src:n.src,onEnded:t[1]||(t[1]=function(t){return e.$emit("end-audio")})},null,40,["loop","src"])})),i=(n("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number},ifMuted:Boolean,ifLoop:{default:!0,type:Boolean}},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume()},methods:{incrementVolume:function(){var e=this;this.setInterval=setInterval((function(){e.volume>e.maxVol-e.increment?clearInterval(e.setInterval):(e.volume+=e.increment,e.$refs.audio.volume=e.actualVolume)}),this.speedOfIncrement)}},computed:{actualVolume:function(){return this.ifMuted?0:this.volume}},watch:{ifMuted:function(){this.$refs.audio.volume=this.actualVolume}},unmounted:function(){clearInterval(this.setInterval)}});n("74e0");i.render=o,i.__scopeId="data-v-1569787f";t["a"]=i},"200a":function(e,t,n){},2064:function(e,t,n){e.exports=n.p+"img/ass7.cf4b4b6a.jpg"},"23a2":function(e,t,n){e.exports=n.p+"img/ass1.02c8a35e.jpg"},"26c8":function(e,t,n){e.exports=n.p+"img/ass14.4bdce1f4.jpg"},"2b59":function(e,t,n){},"4e7a":function(e,t,n){e.exports=n.p+"img/ass1.5db713e8.jpg"},"4fcf":function(e,t,n){e.exports=n.p+"img/ass17.0c634991.png"},5060:function(e,t,n){},"52af":function(e,t,n){e.exports=n.p+"img/ass3.102ddcaf.jpg"},"52fe":function(e,t,n){e.exports=n.p+"img/ass5.046bf8f8.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("f7e2"),o=(n("b0c0"),Object(c["I"])("data-v-7f7e3649"));Object(c["s"])("data-v-7f7e3649");var i={id:"container",class:"container-fluid position-relative"},a=Object(c["g"])("footer",{class:"row mt-3"},[Object(c["g"])("div",{class:"col f-center"},[Object(c["g"])("h4",{class:"m-2 fw-light"},[Object(c["g"])("a",{href:"https://www.appslife.co.il/",target:"_blanc"},"נבנה ופותח בAppsLife")])])],-1);Object(c["q"])();var s=o((function(e,t,r,o,s,u){var l=Object(c["x"])("toolBar"),d=Object(c["x"])("bg"),f=Object(c["x"])("timer"),m=Object(c["x"])("router-view");return Object(c["p"])(),Object(c["d"])("div",i,[Object(c["g"])(l),Object(c["g"])(d,{img:n("beed")},null,8,["img"]),u.name?(Object(c["p"])(),Object(c["d"])(f,{key:0})):Object(c["e"])("",!0),Object(c["g"])(m),a])})),u=n("cf05"),l=n.n(u),d=Object(c["I"])("data-v-0e5870b0");Object(c["s"])("data-v-0e5870b0");var f={class:"row row-nav p-e-n"},m={class:"col"},p={class:"container p-0"},b={class:"row pt-1 pb-1"},g={class:"col f-center-between"},h=Object(c["g"])("img",{class:"w-100",src:l.a,alt:""},null,-1);Object(c["q"])();var v=d((function(e,t,n,r,o,i){var a=Object(c["x"])("router-link"),s=Object(c["x"])("buttonsPlace");return Object(c["p"])(),Object(c["d"])("nav",f,[Object(c["g"])("div",m,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("div",g,[Object(c["g"])(a,{tag:"div",to:"/",class:"logo p-e-p"},{default:d((function(){return[h]})),_:1}),Object(c["g"])(s,{class:"p-e-p"})])])])])])})),j=Object(c["I"])("data-v-6d2b037a");Object(c["s"])("data-v-6d2b037a");var O={class:"buttons-place f-center mt-2 me-2"};Object(c["q"])();var S=j((function(e,t,n,r,o,i){var a=Object(c["x"])("fullScreen"),s=Object(c["x"])("muteSound");return Object(c["p"])(),Object(c["d"])("div",O,[Object(c["g"])(a),Object(c["g"])(s)])})),C=Object(c["g"])("span",{class:"material-icons-outlined"}," screen_rotation ",-1);function k(e,t,n,r,o,i){var a=Object(c["x"])("wrapIcons");return o.ifMobile?(Object(c["p"])(),Object(c["d"])(a,{key:0,onClick:i.fullScreen},{default:Object(c["F"])((function(){return[C]})),_:1},8,["onClick"])):Object(c["e"])("",!0)}var w={class:"wrap-icon"};function x(e,t,n,r,o,i){return Object(c["p"])(),Object(c["d"])("div",w,[Object(c["w"])(e.$slots,"default")])}var y={name:"wrapIcons"};n("a283");y.render=x;var I=y,R={name:"fullScreen",components:{wrapIcons:I},data:function(){return{isFullScreen:!1,ifMobile:!(window.innerWidth>767),ifSetStyle:!1}},methods:{fullScreen:function(){if(this.ifMobile)if(this.isFullScreen)screen.orientation.lock("portrait-primary"),this.isFullScreen=!1;else{if(!this.ifSetStyle){var e="\n    :not(:root):fullscreen::backdrop {\n      background: #ffffff00 !important;\n    }\n    \n    body:fullscreen {\n      width: 100%;\n      overflow: auto;\n    }\n",t=document.createElement("style");t.innerText=e,document.head.appendChild(t),this.ifSetStyle=!0}var n=document.body;document.documentElement.requestFullscreen?n.requestFullscreen():document.documentElement.webkitRequestFullScreen&&n.webkitRequestFullScreen(),screen.orientation.lock("landscape-primary"),this.isFullScreen=!0}}}};n("c1c1");R.render=k;var _=R,q={key:0,class:"material-icons-outlined"},E={key:1,class:"material-icons-outlined"};function M(e,t,n,r,o,i){var a=this,s=Object(c["x"])("wrapIcons");return Object(c["p"])(),Object(c["d"])(s,{class:"wrap-icon",onClick:i.muteSound},{default:Object(c["F"])((function(){return[a.$store.state.ifMuted?(Object(c["p"])(),Object(c["d"])("span",E," volume_up ")):(Object(c["p"])(),Object(c["d"])("span",q," volume_off "))]})),_:1},8,["onClick"])}var F={name:"muteSound",components:{wrapIcons:I},data:function(){return{isMuted:!1}},methods:{muteSound:function(){this.$store.state.ifMuted=!this.$store.state.ifMuted}}};n("6395");F.render=M;var $=F,A={name:"buttonsPlace",components:{fullScreen:_,muteSound:$}};n("e130");A.render=S,A.__scopeId="data-v-6d2b037a";var B=A,T={name:"toolBar",components:{buttonsPlace:B},data:function(){return{}}};n("13d5");T.render=v,T.__scopeId="data-v-0e5870b0";var N=T,V=n("06f2"),P=Object(c["I"])("data-v-33954a95");Object(c["s"])("data-v-33954a95");var z={class:"col"},L={class:"f-center text-center"},G=Object(c["g"])("i",{class:"las la-hourglass-half"},null,-1),H=Object(c["f"])(" : ");Object(c["q"])();var D=P((function(e,t,n,r,o,i){return Object(c["p"])(),Object(c["d"])("div",{class:["row",0===o.seconds?"transparent-color":"main-color"]},[Object(c["g"])("div",z,[Object(c["g"])("h2",L,[G,Object(c["g"])("div",null,Object(c["z"])(o.seconds),1),H,Object(c["g"])("div",null,Object(c["z"])(o.minutes),1)])])],2)})),J={name:"timer",data:function(){return{totalSeconds:0,seconds:0,minutes:0,interval:null}},mounted:function(){this.interval=setInterval(this.setTime,1e3)},computed:{endEscapeRoom:function(){return this.$store.state.endEscapeRoom}},methods:{setTime:function(){++this.totalSeconds,this.seconds=this.pad(this.totalSeconds%60),this.minutes=this.pad(parseInt(this.totalSeconds/60))},pad:function(e){var t=e+"";return t.length<2?"0"+t:t}},watch:{endEscapeRoom:function(e){e&&(clearInterval(this.interval),this.$store.commit("passEndTimer",{seconds:this.seconds,minutes:this.minutes}),this.$store.dispatch("addScore"))}}};n("7c731");J.render=D,J.__scopeId="data-v-33954a95";var K=J,U={name:"App",components:{toolBar:N,bg:V["a"],timer:K},computed:{name:function(){return this.$store.state.name}}};n("de93");U.render=s,U.__scopeId="data-v-7f7e3649";var Y=U,W=(n("d3b7"),n("6c02")),Z=(n("4160"),n("159b"),n("96cf"),n("1da1")),Q=n("5502"),X=n("7d1d"),ee={state:function(){return{ifShuffle:!1,parts:[{img:n("23a2"),id:1},{img:n("820c"),id:2},{img:n("52af"),id:3},{img:n("65ba"),id:4},{img:n("52fe"),id:5},{img:n("9988"),id:6},{img:n("2064"),id:7},{img:n("b9af"),id:8},{img:n("8da7"),id:9},{img:n("61e1"),id:10},{img:n("6069"),id:11},{img:n("63ae"),id:12},{img:n("ef54"),id:13},{img:n("26c8"),id:14},{img:n("db55"),id:15}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.parts=Object(X["a"])(e.parts),e.ifShuffle=!0)}}},te=ee,ne={state:function(){return{bills:[{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:1},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:2},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:3},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:4},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:5},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:6},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:7},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:8},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:9},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:10},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:11},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:12},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:13},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:14},{img:n("4e7a"),ifSelect:!1,ifCorrect:!0,id:15},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:16},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:17},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:18},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:19},{img:n("9729"),ifSelect:!1,ifCorrect:!1,id:20},{img:n("9729"),ifSelect:!1,ifCorrect:!1,id:21},{img:n("9729"),ifSelect:!1,ifCorrect:!1,id:22},{img:n("9729"),ifSelect:!1,ifCorrect:!1,id:23},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:24},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:25},{img:n("1090"),ifSelect:!1,ifCorrect:!1,id:26},{img:n("8605"),ifSelect:!1,ifCorrect:!1,id:27},{img:n("8605"),ifSelect:!1,ifCorrect:!1,id:28},{img:n("8605"),ifSelect:!1,ifCorrect:!1,id:29},{img:n("8605"),ifSelect:!1,ifCorrect:!1,id:30}]}}},ce=ne,re={state:function(){return{boxes:[{num:"",operator:"+",class:"left",id:"m1"},{num:"",operator:"-",class:"left",id:"m2"},{num:"",operator:"+",class:"left",id:"m3"},{num:"",operator:"-",class:"left",id:"m4"},{num:"",operator:"+",class:"left",id:"m5"},{num:"",operator:"-",class:"bottom",id:"m6"},{num:"",operator:"+",class:"bottom",id:"m7"},{num:"",operator:"-",class:"bottom",id:"m8"},{num:"",operator:"+",class:"bottom",id:"m9"},{num:"",operator:"-",class:"bottom",id:"m10"},{num:"",operator:"+",class:"right",id:"m11"},{num:"",operator:"-",class:"right",id:"m12"},{num:"",operator:"+",class:"right",id:"m13"},{num:"",operator:"-",class:"right",id:"m14"},{num:"",operator:"+",class:"right",id:"m15"},{num:"",operator:"-",class:"top",id:"m16"},{num:"",operator:"+",class:"top",id:"m17"},{num:"",operator:"-",class:"top",id:"m18"},{num:"",operator:"+",class:"top",id:"m19"},{num:"",operator:"-",class:"left",id:"m20"},{num:"",operator:"+",class:"left",id:"m21"}]}}},oe=re,ie={state:function(){return{answers:[{ans:"מורה",id:1},{ans:"דיין",id:2},{ans:"דורש",id:3},{ans:"שוחט",id:4},{ans:"בודק",id:5},{ans:"חזן",id:6},{ans:"שמש",id:7}],correctAnswers:[]}}},ae=ie,se={state:function(){return{circles:[{top:34,left:38,ifSelect:!1,id:1},{top:39,left:2,ifSelect:!1,id:1},{top:40,left:55,ifSelect:!1,id:1},{top:30,left:11,ifSelect:!1,id:1}]}}},ue=se,le={state:function(){return{ifShuffle:!1,redSentences:[{text:"נקודת התחלה לוח אדום",num:2,arrow:"la-arrow-right",colorSquare:"red",id:0},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה.  מִי בָכֶם מִכָּל עַמּוֹ יְהִי אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:4,arrow:"la-arrow-down",colorSquare:"red",id:1},{text:"וַיְהִי בִּימֵי אֲחַשְׁוֵרוֹשׁ הוּא אֲחַשְׁוֵרוֹשׁ הַמֹּלֵךְ מֵהֹדּוּ וְעַד כּוּשׁ שֶׁבַע וְעֶשְׂרִים וּמֵאָה מְדִינָה... וְכָל מַעֲשֵׂה תָקְפּוֹ וּגְבוּרָתוֹ וּפָרָשַׁת גְּדֻלַּת מָרְדֳּכַי אֲשֶׁר גִּדְּלוֹ הַמֶּלֶךְ הֲלוֹא הֵם כְּתוּבִים עַל סֵפֶר דִּבְרֵי הַיָּמִים לְמַלְכֵי מָדַי וּפָרָס.  כִּי מָרְדֳּכַי הַיְּהוּדִי מִשְׁנֶה לַמֶּלֶךְ אֲחַשְׁוֵרוֹשׁ וְגָדוֹל לַיְּהוּדִים...",num:2,arrow:"la-arrow-left",colorSquare:"red",id:2},{text:'אֲזַי דָּרְיָוֶשׁ הַמֶּלֶךְ שָׂם צַו, וּבִקְּרוּ בְּבֵית הַסְּפָרִים...וְנִמְצָא... בַּבִּירָה אֲשֶׁר בְּמָדַי הַמְּדִינָה, מְגִלָּה אַחַת, וְכֵן כָּתוּב בְּתוֹכָהּ: הַזִּכָּרוֹן: בִּשְׁנַת אַחַת לְכוֹרֶשׁ הַמֶּלֶךְ, כּוֹרֶשׁ הַמֶּלֶךְ שָׂם צַו: "בֵּית הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלַיִם הַבַּיִת יִבָּנֶה...וּמִמֶּנִּי [דריווש] הוּשַׂם צַו, לְמַה שֶׁתַּעֲשׂוּ עִם זִקְנֵי הַיְּהוּדִים הָאֵלֶּה, לִבְנוֹת אֶת בֵּית הָאֱלֹהִים הַזֶּה, וּמִנִּכְסֵי הַמֶּלֶךְ ...וְנִשְׁלַם בַּיִת זֶה עַד יוֹם שְׁלֹשָׁה לְחֹדֶשׁ אֲדָר, שֶׁהִיא שְׁנַת שֵׁשׁ לְמַלְכוּת דָּרְיָוֶשׁ הַמֶּלֶךְ.',num:3,arrow:"la-arrow-up",colorSquare:"red",id:3}],greenSentences:[{text:"נקודת התחלה לוח ירוק",num:2,arrow:"la-arrow-right",colorSquare:"green",id:4},{text:"בתקופה זו נהנו היהודים משלטונות נוחים יחסית, וקיימו קשרים רוחניים וכלכליים עם היישוב היהודי המתחדש בארץ ישראל, וכמובן עם היישוב בבבל: סרו למרותם של ראש הגולה בבבל ושל מרכזי התורה בסורא, נהרדעא ופומבדיתא, שפרחו תחת השושלת הפרסית.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:5},{text:"לאחר הכיבוש המוסלמי-הערבי חלה הרעה במצבה של הקהילה.",num:2,arrow:"la-arrow-left",colorSquare:"green",id:6},{text:"בתקופה זו החלה הגירה יהודית מאיראן לארץ ישראל, במקביל לעלייה הראשונה מאירופה ולעלייה מתימן.",num:2,arrow:"la-arrow-down",colorSquare:"green",id:7},{text:"ערב הקמת מדינת ישראל החלה בקהילה היהודית התעניינות ערה בציונות. באיראן היו אז כ-100,000 יהודים, וכ-20,000 יהודים פרסיים בארץ ישראל. עד לשנת 1968 עלו ארצה כ-70,000 מיהודי איראן. מאז המהפכה האיסלאמית ועלייתו לשלטון של חומייני, התערער מצבה של הקהילה היהודית באיראן ויהודים רבים עזבו את שטחה.",num:2,arrow:"la-arrow-right",colorSquare:"green",id:8}],redSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!0,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!1,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!0,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}],greenSquare:[{ifSelect:!1,ifCorrect:!1,id:1},{ifSelect:!1,ifCorrect:!0,id:2},{ifSelect:!1,ifCorrect:!0,id:3},{ifSelect:!0,ifCorrect:!0,id:4},{ifSelect:!1,ifCorrect:!1,id:5},{ifSelect:!1,ifCorrect:!1,id:6},{ifSelect:!1,ifCorrect:!0,id:7},{ifSelect:!1,ifCorrect:!1,id:8},{ifSelect:!1,ifCorrect:!1,id:9},{ifSelect:!1,ifCorrect:!1,id:10},{ifSelect:!1,id:11},{ifSelect:!1,ifCorrect:!0,id:12},{ifSelect:!1,ifCorrect:!0,id:13},{ifSelect:!1,ifCorrect:!0,id:14},{ifSelect:!1,ifCorrect:!1,id:15},{ifSelect:!1,ifCorrect:!1,id:16},{ifSelect:!1,ifCorrect:!1,id:17},{ifSelect:!1,ifCorrect:!1,id:18},{ifSelect:!1,ifCorrect:!0,id:19},{ifSelect:!1,ifCorrect:!1,id:20},{ifSelect:!1,ifCorrect:!1,id:21},{ifSelect:!1,ifCorrect:!0,id:22},{ifSelect:!1,ifCorrect:!0,id:23},{ifSelect:!1,ifCorrect:!0,id:24},{ifSelect:!1,ifCorrect:!1,id:25}]}},mutations:{shuffle:function(e){e.ifShuffle||(e.redSentences=Object(X["a"])(e.redSentences),e.greenSentences=Object(X["a"])(e.greenSentences),e.ifShuffle=!0)}}},de=le,fe=Object(Q["a"])({state:{name:"",endEscapeRoom:!1,endTime:{},ifMuted:!1,rooms:[{text:"חדר 1",link:"/MainRoom/1",code:14,ifCheck:!1,ifResolved:!1,id:1},{text:"חדר 2",link:"/MainRoom/2",code:15,ifCheck:!1,ifResolved:!1,id:2},{text:"חדר 3",link:"/MainRoom/3",code:7,ifCheck:!1,ifResolved:!1,id:3},{text:"חדר 4",link:"/MainRoom/4",code:7,ifCheck:!1,ifResolved:!1,id:4},{text:"חדר 5",link:"/MainRoom/5",code:4,ifCheck:!1,ifResolved:!1,id:5},{text:"חדר 6",link:"/MainRoom/6",code:20,ifCheck:!1,ifResolved:!1,id:6}],codesCorrectOrder:[{correct:7,input:"",id:1},{correct:14,input:"",id:2},{correct:15,input:"",id:3},{correct:20,input:"",id:4},{correct:7,input:"",id:5},{correct:4,input:"",id:6}]},mutations:{pushName:function(e,t){e.name=t},endTask:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifCheck=!0)}))},completeRoom:function(e,t){e.rooms.forEach((function(e){e.id===t&&(e.ifResolved=!0)}))},endEscapeRoom:function(e){e.endEscapeRoom=!0},passEndTimer:function(e,t){e.endTime=t,console.log("passEndTimer")}},actions:{addScore:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={name:e.state.name,endTime:e.state.endTime,collection:"escape-room"},console.log(n),t.next=5,fetch("https://free-services.herokuapp.com/rambam-quiz/add-score-simple",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return c=t.sent,t.next=8,c.json();case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},modules:{Gpuzzle:te,GmoneyBills:ce,GgridStory:oe,Gmori:ae,GfindInImg:ue,GarrangeSentences:de}}),me=n("805f"),pe=n.n(me),be=Object(c["I"])("data-v-48367304");Object(c["s"])("data-v-48367304");var ge={class:"row min-height-screen f-center position-relative"},he={class:"col "},ve={class:"container p-0"},je={class:"row mt-lg-5 mt-0"},Oe={class:"col-lg-4 order-lg-1 order-2 position-relative pt-3 pb-3 mt-lg-0 mt-5"},Se=Object(c["g"])("h3",{class:"fw-bold"},"הוראות",-1),Ce=Object(c["g"])("ul",{class:"ps-0"},[Object(c["g"])("li",null,"חדר הבריחה מתאים כמשחק תחרותי לקבוצות וכאתגר לשחקן יחידי"),Object(c["g"])("li",null,"למשחק מרובה משתתפים כל שחקן/קבוצה יחזיק/ו מכשיר שבו יוכל/ו לשחק"),Object(c["g"])("li",null,"מי שיגיע לסיום ראשון הוא המנצח!")],-1),ke={class:"w-100 ps-3"},we=Object(c["g"])("button",{class:"g-butt bg-gradient mt-3 h5 p-2 w-50 ",type:"submit"},"התחלה",-1),xe=Object(c["g"])("div",{class:"col-lg-8 order-lg-2 order-1 text-center"},[Object(c["g"])("img",{class:"logo",src:pe.a,alt:""})],-1);Object(c["q"])();var ye=be((function(e,t,n,r,o,i){var a=Object(c["x"])("aInput"),s=Object(c["x"])("installApp");return Object(c["p"])(),Object(c["d"])("div",ge,[Object(c["g"])("div",he,[Object(c["g"])("div",ve,[Object(c["g"])("div",je,[Object(c["g"])("div",Oe,[Object(c["g"])("form",{class:"p-3",onSubmit:t[2]||(t[2]=Object(c["H"])((function(){return i.pushName&&i.pushName.apply(i,arguments)}),["prevent"]))},[Se,Ce,Object(c["g"])("div",ke,[Object(c["g"])(a,{class:"mt-4",modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.name=e}),maxlength:"8",placeholder:"שם שחקן/קבוצה"},null,8,["modelValue"])]),we],32),Object(c["g"])(s,{class:"mt-3"})]),xe])])])])})),Ie=Object(c["I"])("data-v-403651d6"),Re=Ie((function(e,t,n,r,o,i){return Object(c["p"])(),Object(c["d"])("div",{class:"w-100 wrap",style:{color:n.color}},[Object(c["g"])("div",{class:"m-lab",style:{fontSize:o.ifFocus?n.labBSize+"px":n.labFSize+"px",top:o.ifFocus?-n.labBSize+"px":n.labFSize-10+"px"}},Object(c["z"])(n.placeholder),5),Object(c["g"])("input",{ref:"input",onFocus:t[1]||(t[1]=function(e){return o.ifFocus=!0}),style:{borderBottom:"solid ".concat(n.color," 2px"),color:n.color},onBlur:t[2]||(t[2]=function(){return i.checkFocus&&i.checkFocus.apply(i,arguments)}),value:n.modelValue,onInput:t[3]||(t[3]=function(){return i.emitText&&i.emitText.apply(i,arguments)}),required:n.required,type:n.type,pattern:n.pattern,minlength:n.minlength,maxlength:n.maxlength},null,44,["value","required","type","pattern","minlength","maxlength"])],4)})),_e=(n("a9e3"),{name:"aInput",components:{},props:{labFSize:{type:Number,default:23},labBSize:{type:Number,default:18},modelValue:String,placeholder:String,color:{type:String,default:"rgb(22, 22, 22)"},type:{type:String,default:"text"},required:{type:Boolean,default:!0},maxlength:String,minlength:String,pattern:String},data:function(){return{ifFocus:!1,text:""}},mounted:function(){this.checkFocus()},methods:{checkFocus:function(){this.modelValue?this.ifFocus=!0:this.ifFocus=!1},emitText:function(e){this.text=e.target.value,this.$emit("update:modelValue",e.target.value)}}});n("73c0");_e.render=Re,_e.__scopeId="data-v-403651d6";var qe=_e,Ee=Object(c["I"])("data-v-605af8ce");Object(c["s"])("data-v-605af8ce");var Me={class:"row"},Fe={class:"col f-center"},$e={ref:"addButton",class:"w-100 g-butt f-center p-2 c-p "},Ae=Object(c["g"])("span",{class:"material-icons-outlined m-1"}," download_for_offline ",-1),Be=Object(c["g"])("p",{class:"m-0"},"להתקנת האפליקציה לחץ כאן",-1);Object(c["q"])();var Te=Ee((function(e,t,n,r,o,i){return Object(c["G"])((Object(c["p"])(),Object(c["d"])("div",Me,[Object(c["g"])("div",Fe,[Object(c["g"])("div",$e,[Ae,Be],512)])],512)),[[c["D"],o.ifShow]])})),Ne=n("3d20"),Ve=n.n(Ne),Pe={name:"installApp",components:{},data:function(){return{ifShow:!1}},mounted:function(){var e,t=this,n=this.$refs.addButton;this.ifShow=!1,window.addEventListener("beforeinstallprompt",(function(c){c.preventDefault(),e=c,t.ifShow=!0,n.addEventListener("click",(function(){t.ifShow=!1,e.prompt(),e.userChoice.then((function(t){"accepted"===t.outcome?Ve.a.fire({icon:"success",title:"OK",text:"האפליקציה הותקנה בהצלחה!",timer:1500}):Ve.a.fire({icon:"error",title:"בוטל",text:"ההתקנה נכשלה",timer:1500}),e=null}))}))}))},computed:{}};n("8a52");Pe.render=Te,Pe.__scopeId="data-v-605af8ce";var ze=Pe,Le={name:"Home",components:{aInput:qe,installApp:ze},data:function(){return{name:""}},created:function(){this.name=this.$store.state.name},methods:{pushName:function(){this.$store.commit("pushName",this.name),this.$router.push("/Story")}}};n("6cc2");Le.render=ye,Le.__scopeId="data-v-48367304";var Ge=Le,He=function(e,t,n){fe.state.name?n():n({name:"Home"})},De=[{path:"/",name:"Home",component:Ge},{path:"/Story",name:"Story",component:function(){return n.e("about").then(n.bind(null,"095a"))},beforeEnter:He},{path:"/MainRoom",name:"MainRoom",component:function(){return n.e("chunk-3546639d").then(n.bind(null,"cf19"))},beforeEnter:He,children:[{path:"",name:"index",component:function(){return n.e("chunk-773ea8d6").then(n.bind(null,"80ad"))}},{path:"1",name:"1",component:function(){return n.e("chunk-615acb3a").then(n.bind(null,"b655"))}},{path:"2",name:"2",component:function(){return n.e("chunk-7c016c38").then(n.bind(null,"faca"))}},{path:"3",name:"3",component:function(){return n.e("chunk-73765c3a").then(n.bind(null,"ce91"))}},{path:"4",name:"4",component:function(){return n.e("chunk-4c690442").then(n.bind(null,"560c"))}},{path:"5",name:"5",component:function(){return n.e("chunk-2bb62532").then(n.bind(null,"875f"))}},{path:"6",name:"6",component:function(){return n.e("chunk-5e6a9a42").then(n.bind(null,"228a"))}},{path:"caveRoom",name:"caveRoom",component:function(){return n.e("chunk-3b8fab70").then(n.bind(null,"0f12"))}}]}],Je=Object(W["a"])({scrollBehavior:function(){return{left:0,top:0}},history:Object(W["b"])("/"),routes:De});Object(r["b"])(Je);var Ke=Je,Ue=(n("fc04"),n("96b1"),Object(c["I"])("data-v-378f5036"));Object(c["s"])("data-v-378f5036");var Ye={class:"row mt-3"},We={class:"col"},Ze={class:"row"},Qe={class:"col-lg-2 f-right-top main-color"},Xe=Object(c["g"])("h5",{class:"fw-bold mt-1 f-center g-butt p-2"},[Object(c["g"])("span",{class:"material-icons-outlined"}," double_arrow "),Object(c["f"])("חזרה לחדר הראשי")],-1),et={class:"col-lg-10"},tt={class:"row"},nt={class:"col-lg-2 order-lg-0 order-1"},ct={class:"row"},rt={class:"col-lg-12 col-9"},ot={class:"col-lg-12 col-3 pt-3 text-center"},it={class:"col-lg-10 order-lg-1 order-0"};Object(c["q"])();var at=Ue((function(e,t,n,r,o,i){var a=Object(c["x"])("router-link"),s=Object(c["x"])("checkCode");return Object(c["p"])(),Object(c["d"])("div",Ye,[Object(c["g"])("div",We,[Object(c["g"])("div",Ze,[Object(c["g"])("div",Qe,[Object(c["g"])(a,{to:"/MainRoom"},{default:Ue((function(){return[Xe]})),_:1})]),Object(c["g"])("div",et,[Object(c["w"])(e.$slots,"inst")])]),Object(c["g"])("div",tt,[Object(c["g"])("div",nt,[Object(c["g"])("div",ct,[Object(c["g"])("div",rt,[Object(c["g"])(s,{dataRoom:n.correntRoom},null,8,["dataRoom"])]),Object(c["g"])("div",ot,[Object(c["g"])("img",{class:"w-100",src:n.img},null,8,["src"])])])]),Object(c["g"])("div",it,[Object(c["w"])(e.$slots,"task")])])])])})),st=Object(c["I"])("data-v-415bf1b6");Object(c["s"])("data-v-415bf1b6");var ut={ref:"checkCode",class:"w-100 wrap-check img-contain f-right-top position-relative"},lt={key:1,class:"mt-lg-0 mt-3"},dt={key:1,class:"mt-lg-0 mt-3"},ft={class:"main-color fw-bolder h3"};Object(c["q"])();var mt=st((function(e,t,r,o,i,a){var s=Object(c["x"])("bg"),u=Object(c["x"])("autoAudio"),l=Object(c["x"])("aInput");return Object(c["p"])(),Object(c["d"])("div",ut,[Object(c["g"])(s,{coverOrContain:"contain",img:n("4fcf")},null,8,["img"]),i.play?(Object(c["p"])(),Object(c["d"])(u,{key:0,src:i.srcAudio,ifLoop:!1,maxVol:1,increment:1,speedOfIncrement:0,ifMuted:e.$store.state.ifMuted,onEndAudio:t[1]||(t[1]=function(e){return i.play=!1})},null,8,["src","ifMuted"])):Object(c["e"])("",!0),r.dataRoom.ifCheck?(Object(c["p"])(),Object(c["d"])(c["a"],{key:2},[r.dataRoom.ifResolved?(Object(c["p"])(),Object(c["d"])("h4",dt,[Object(c["f"])("הצופן של חדר מס' "+Object(c["z"])(r.dataRoom.id)+" הוא ",1),Object(c["g"])("span",ft,Object(c["z"])(r.dataRoom.code),1)])):(Object(c["p"])(),Object(c["d"])(c["a"],{key:0},[Object(c["g"])(l,{class:"mt-lg-0 mt-3",modelValue:i.code,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.code=e}),placeholder:"בדיקת צופן",required:!1},null,8,["modelValue"]),Object(c["g"])("div",{class:"g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3",onClick:t[3]||(t[3]=function(){return a.checkCode&&a.checkCode.apply(a,arguments)})},"בדיקה")],64))],64)):(Object(c["p"])(),Object(c["d"])("h4",lt,"לאחר סיום המשימה תוכלו לבדוק כאן את הצופן"))],512)})),pt=n("14e5"),bt={name:"checkCode",components:{aInput:qe,autoAudio:pt["a"],bg:V["a"]},props:{dataRoom:Object},data:function(){return{code:"",play:!1,srcAudio:null}},methods:{checkCode:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(+e.code!==e.dataRoom.code){t.next=9;break}return e.srcAudio="../audio/final-room.mp3",e.play=!0,e.$store.commit("completeRoom",e.dataRoom.id),t.next=6,Ve.a.fire({title:"יפה מאוד!",text:"הצלחתם למצוא את הצופן של חדר מס'"+e.dataRoom.id,timer:3e3,icon:"success",timerProgressBar:!0});case 6:e.$router.push("/mainRoom/"),t.next=10;break;case 9:Ve.a.fire({title:"קוד שגוי",text:"נסו שוב",timer:3e3,icon:"error",timerProgressBar:!0});case 10:case"end":return t.stop()}}),t)})))()}},computed:{ifCheck:function(){return this.dataRoom.ifCheck}},watch:{ifCheck:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return this.srcAudio="../audio/final-task.mp3",this.play=!0,e.next=5,Ve.a.fire({title:"סיימתם את המשימה. עכשיו נותר לכם למצוא את הצופן ולבדוק אותו בשדה הטקסט",timer:4e3,icon:"success",timerProgressBar:!0});case 5:this.$refs.checkCode.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};n("f183");bt.render=mt,bt.__scopeId="data-v-415bf1b6";var gt=bt,ht={name:"roomSlots",components:{checkCode:gt},props:{img:String,correntRoom:Object},data:function(){return{}}};n("5812");ht.render=at,ht.__scopeId="data-v-378f5036";var vt=ht,jt=n("9483");Object(jt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ot=Object(c["c"])(Y);Ot.component("roomSlots",vt),Ot.use(r["a"],{property:{id:"G-73VKYBNZY2"}}),Ot.use(fe).use(Ke).mount("#app")},5812:function(e,t,n){"use strict";n("fb55")},"5e9d":function(e,t,n){},6069:function(e,t,n){e.exports=n.p+"img/ass11.71a57f64.jpg"},"61e1":function(e,t,n){e.exports=n.p+"img/ass10.fd86d695.jpg"},6395:function(e,t,n){"use strict";n("748f")},"63ae":function(e,t,n){e.exports=n.p+"img/ass12.848121b9.jpg"},"65ba":function(e,t,n){e.exports=n.p+"img/ass4.9dfa1ac0.jpg"},"6cc2":function(e,t,n){"use strict";n("7a78")},"73c0":function(e,t,n){"use strict";n("e1ce")},"748f":function(e,t,n){},"74e0":function(e,t,n){"use strict";n("5060")},"7a78":function(e,t,n){},"7c6a":function(e,t,n){},"7c731":function(e,t,n){"use strict";n("f53b")},"7d1d":function(e,t,n){"use strict";var c=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[n],e[n]=c}return e};t["a"]=c},"805f":function(e,t,n){e.exports=n.p+"img/ass23.08464f0c.png"},"820c":function(e,t,n){e.exports=n.p+"img/ass2.7627729c.jpg"},8605:function(e,t,n){e.exports=n.p+"img/ass3.ea1cbdc6.jpg"},"8a52":function(e,t,n){"use strict";n("7c6a")},"8da7":function(e,t,n){e.exports=n.p+"img/ass9.ffe9cbe6.jpg"},"96b1":function(e,t,n){},9729:function(e,t,n){e.exports=n.p+"img/ass2.1ea7c2fa.jpg"},9988:function(e,t,n){e.exports=n.p+"img/ass6.7b313dfc.jpg"},a283:function(e,t,n){"use strict";n("c8e3")},a5b6:function(e,t,n){"use strict";n("ec48")},acb1:function(e,t,n){},b9af:function(e,t,n){e.exports=n.p+"img/ass8.d7dfa216.jpg"},beed:function(e,t,n){e.exports=n.p+"img/ass.42b5ae18.jpg"},c1c1:function(e,t,n){"use strict";n("5e9d")},c8e3:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.48af489b.png"},db55:function(e,t,n){e.exports=n.p+"img/ass15.d5544ee2.jpg"},de93:function(e,t,n){"use strict";n("200a")},e130:function(e,t,n){"use strict";n("2b59")},e1ce:function(e,t,n){},ec48:function(e,t,n){},ed92:function(e,t,n){},ef54:function(e,t,n){e.exports=n.p+"img/ass13.f5cdde5b.jpg"},f183:function(e,t,n){"use strict";n("acb1")},f53b:function(e,t,n){},fb55:function(e,t,n){},fc04:function(e,t,n){}});
//# sourceMappingURL=app.0fb9c2f6.js.map