(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e5b0d8d"],{"0d4f":function(t,e,n){"use strict";n("a8ff")},"14e5":function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["G"])("data-v-9bd4ac32"),s=a((function(t,e,n,a,s,i){return Object(c["p"])(),Object(c["d"])("audio",{ref:"audio",loop:"",src:n.src},null,8,["src"])})),i=(n("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number},ifMuted:Boolean},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.ifMuted||(this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume())},methods:{incrementVolume:function(){var t=this;this.setInterval=setInterval((function(){t.volume>t.maxVol-t.increment?clearInterval(t.setInterval):(t.volume+=t.increment,t.$refs.audio.volume=t.volume)}),500)}},watch:{ifMuted:function(){this.$refs.audio.muted=this.ifMuted}},unmounted:function(){clearInterval(this.setInterval)}});n("86ba");i.render=s,i.__scopeId="data-v-9bd4ac32";e["a"]=i},"86ba":function(t,e,n){"use strict";n("c8b3")},a8ff:function(t,e,n){},c8b3:function(t,e,n){},cf19:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["G"])("data-v-0ac6cc7e");Object(c["s"])("data-v-0ac6cc7e");var s={class:"row main-room min-height-screen position-relative"},i={class:"col "},o={class:"container p-0 pb-md-5"};Object(c["q"])();var u=a((function(t,e,n,a,u,r){var d=Object(c["x"])("autoAudio"),l=Object(c["x"])("timer"),f=Object(c["x"])("router-view");return Object(c["p"])(),Object(c["d"])("div",s,[Object(c["g"])(d,{src:"https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_deep_investigation_126.mp3?_=4",ifMuted:t.$store.state.ifMuted},null,8,["ifMuted"]),Object(c["g"])("div",i,[Object(c["g"])("div",o,[Object(c["g"])(l,{class:"mt-1"}),Object(c["g"])(f)])])])})),r=Object(c["G"])("data-v-02ee34dc");Object(c["s"])("data-v-02ee34dc");var d={class:"col"},l={class:"f-center text-center"},f=Object(c["g"])("i",{class:"las la-hourglass-half"},null,-1),m=Object(c["f"])(" : ");Object(c["q"])();var b=r((function(t,e,n,a,s,i){return Object(c["p"])(),Object(c["d"])("div",{class:["row",0===s.seconds?"transparent-color":"main-color"]},[Object(c["g"])("div",d,[Object(c["g"])("h2",l,[f,Object(c["g"])("div",null,Object(c["z"])(s.seconds),1),m,Object(c["g"])("div",null,Object(c["z"])(s.minutes),1)])])],2)})),v={name:"timer",data:function(){return{totalSeconds:0,seconds:0,minutes:0}},mounted:function(){setInterval(this.setTime,1e3)},methods:{setTime:function(){++this.totalSeconds,this.seconds=this.pad(this.totalSeconds%60),this.minutes=this.pad(parseInt(this.totalSeconds/60))},pad:function(t){var e=t+"";return e.length<2?"0"+e:e}}};n("0d4f");v.render=b,v.__scopeId="data-v-02ee34dc";var p=v,h=n("14e5"),O={name:"MainRoom",components:{autoAudio:h["a"],timer:p}};n("eb64");O.render=u,O.__scopeId="data-v-0ac6cc7e";e["default"]=O},eb64:function(t,e,n){"use strict";n("ff04")},ff04:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2e5b0d8d.571a9a3e.js.map