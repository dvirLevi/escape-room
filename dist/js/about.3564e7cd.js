(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"095a":function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),a=n("c290"),c=n.n(a),s=n("76e9"),u=n.n(s),o=Object(i["G"])("data-v-23314aa0");Object(i["s"])("data-v-23314aa0");var r={class:"row min-height-screen position-relative"},d={class:"col "},l={class:"container p-0"},f={class:"row mt-5"},p={class:"col position-relative"},b={class:"position-relative"},m=Object(i["g"])("img",{src:c.a,class:"el secret-el"},null,-1),v=Object(i["g"])("img",{src:u.a,class:"el journey-el"},null,-1);Object(i["q"])();var j=o((function(t,e,n,a,c,s){var u=Object(i["x"])("autoAudio"),o=Object(i["x"])("textTyping");return Object(i["p"])(),Object(i["d"])("div",r,[Object(i["g"])(u,{src:"https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_orlamusic_Epic%20004.mp3?_=5",ifMuted:t.$store.state.ifMuted},null,8,["ifMuted"]),Object(i["g"])("div",d,[Object(i["g"])("div",l,[Object(i["g"])("div",f,[Object(i["g"])("div",p,[Object(i["g"])("h1",b,[Object(i["f"])("שלום "+Object(i["z"])(t.$store.state.name)+", נבחרת להיות שליח למשימה סודית! ",1),m]),Object(i["g"])(o,{class:"text-typing p-3 mb-3",text:c.text,fontFamily:"Miriam Libre",color:"#fff",onEndTyping:e[1]||(e[1]=function(t){return c.showButt=!0})},null,8,["text"]),c.showButt?(Object(i["p"])(),Object(i["d"])(i["a"],{key:0},[Object(i["g"])("button",{class:"g-butt bg-gradient h5 p-2 ps-3 pe-3",onClick:e[2]||(e[2]=function(e){return t.$router.push("/MainRoom")})},"קדימה למשימה!"),v],64)):Object(i["e"])("",!0)])])])])])})),O=Object(i["G"])("data-v-fb9f5500");Object(i["s"])("data-v-fb9f5500");var h=Object(i["g"])("span",null,null,-1);Object(i["q"])();var g=O((function(t,e,n,a,c,s){var u=Object(i["x"])("autoAudio");return Object(i["p"])(),Object(i["d"])("p",null,[c.ifSound?(Object(i["p"])(),Object(i["d"])(u,{key:0,src:"../audio/typewriter.mp3",ifMuted:t.$store.state.ifMuted},null,8,["ifMuted"])):Object(i["e"])("",!0),Object(i["f"])(" "+Object(i["z"])(c.typeText)+" ",1),h])})),x=(n("a9e3"),n("14e5")),y={name:"textTyping",components:{autoAudio:x["a"]},props:{text:String,speed:{type:Number,default:60}},data:function(){return{setInterval:null,typeText:"",textIndex:0,ifSound:!0}},mounted:function(){var t=this;this.setInterval=setInterval((function(){t.typing()}),this.speed)},methods:{typing:function(){this.typeText+=this.text[this.textIndex],this.textIndex===this.text.length-1&&(clearInterval(this.setInterval),this.ifSound=!1,this.$emit("end-typing")),this.textIndex++}}};n("ea84");y.render=g,y.__scopeId="data-v-fb9f5500";var I=y,w={name:"Story",components:{autoAudio:x["a"],textTyping:I},data:function(){return{showButt:!1,text:'יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.\nבכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.\nעוזרי משיח השקר גנבו את האיגרת והצפינו אותה בתיבה נעולה עליך לחלץ את האיגרת מהתיבה על ידי גלוי הקוד הסודי בו היא נעולה ולהעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.\nבכל אחת מן הדלתות שעל המסך תוכל להגיע לחידה שבפתירתה תקבל רמז לחלק מהצופן שיסייע בהמשך לחשוף את הקוד הסודי בשלימותו.'}}};n("f36d");w.render=j,w.__scopeId="data-v-23314aa0";e["default"]=w},"14e5":function(t,e,n){"use strict";var i=n("7a23"),a=Object(i["G"])("data-v-9bd4ac32"),c=a((function(t,e,n,a,c,s){return Object(i["p"])(),Object(i["d"])("audio",{ref:"audio",loop:"",src:n.src},null,8,["src"])})),s=(n("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number},ifMuted:Boolean},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.ifMuted||(this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume())},methods:{incrementVolume:function(){var t=this;this.setInterval=setInterval((function(){t.volume>t.maxVol-t.increment?clearInterval(t.setInterval):(t.volume+=t.increment,t.$refs.audio.volume=t.volume)}),500)}},watch:{ifMuted:function(){this.$refs.audio.muted=this.ifMuted}},unmounted:function(){clearInterval(this.setInterval)}});n("86ba");s.render=c,s.__scopeId="data-v-9bd4ac32";e["a"]=s},6788:function(t,e,n){},"76e9":function(t,e,n){t.exports=n.p+"img/ass6.897f39c5.png"},"86ba":function(t,e,n){"use strict";n("c8b3")},c290:function(t,e,n){t.exports=n.p+"img/ass11.f4e6c7fd.png"},c8b3:function(t,e,n){},d328:function(t,e,n){},ea84:function(t,e,n){"use strict";n("6788")},f36d:function(t,e,n){"use strict";n("d328")}}]);
//# sourceMappingURL=about.3564e7cd.js.map