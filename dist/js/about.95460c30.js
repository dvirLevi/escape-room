(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"095a":function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),a=n("c290"),i=n.n(a),s=n("76e9"),o=n.n(s),r=Object(c["F"])("data-v-782e17b4");Object(c["s"])("data-v-782e17b4");var u={class:"row min-height-screen position-relative"},l={class:"col "},d={class:"container p-0"},p={class:"row mt-5"},b={class:"col position-relative"},f={class:"position-relative"},m=Object(c["g"])("img",{src:i.a,class:"el secret-el"},null,-1),v=Object(c["g"])("img",{src:o.a,class:"el journey-el"},null,-1);Object(c["q"])();var g=r((function(t,e,a,i,s,o){var r=Object(c["x"])("autoAudio"),g=Object(c["x"])("bg"),j=Object(c["x"])("textTyping");return Object(c["p"])(),Object(c["d"])("div",u,[Object(c["g"])(r,{src:"https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_orlamusic_Epic%20004.mp3?_=5"}),Object(c["g"])(g,{img:n("beed")},null,8,["img"]),Object(c["g"])("div",l,[Object(c["g"])("div",d,[Object(c["g"])("div",p,[Object(c["g"])("div",b,[Object(c["g"])("h1",f,[Object(c["f"])("שלום "+Object(c["z"])(t.$store.state.name)+", נבחרת להיות שליח למשימה סודית! ",1),m]),Object(c["g"])(j,{class:"text-typing p-3 mb-3",text:s.text,fontFamily:"Miriam Libre",color:"#fff",onEndTyping:e[1]||(e[1]=function(t){return s.showButt=!0})},null,8,["text"]),s.showButt?(Object(c["p"])(),Object(c["d"])(c["a"],{key:0},[Object(c["g"])("button",{class:"g-butt bg-gradient h5 p-2 ps-3 pe-3",onClick:e[2]||(e[2]=function(e){return t.$router.push("/MainRoom")})},"קדימה למשימה!"),v],64)):Object(c["e"])("",!0)])])])])])})),j=n("06f2"),O=Object(c["F"])("data-v-3910c60f");Object(c["s"])("data-v-3910c60f");var h={ref:"audio",loop:"",src:"../audio/typewriter.mp3"},x=Object(c["g"])("span",null,null,-1);Object(c["q"])();var y=O((function(t,e,n,a,i,s){return Object(c["p"])(),Object(c["d"])("p",null,[Object(c["g"])("audio",h,null,512),Object(c["f"])(" "+Object(c["z"])(i.typeText)+" ",1),x])})),I=(n("a9e3"),{name:"textTyping",props:{text:String,speed:{type:Number,default:60}},data:function(){return{setInterval:null,typeText:"",textIndex:0}},mounted:function(){var t=this;this.$refs.audio.play(),this.setInterval=setInterval((function(){t.typing()}),this.speed)},methods:{typing:function(){this.typeText+=this.text[this.textIndex],this.textIndex===this.text.length-1&&(clearInterval(this.setInterval),this.$refs.audio.pause(),this.$emit("end-typing")),this.textIndex++}}});n("74d5");I.render=y,I.__scopeId="data-v-3910c60f";var w=I,_=n("14e5"),$={name:"Story",components:{autoAudio:_["a"],textTyping:w,bg:j["a"]},data:function(){return{showButt:!1,text:'יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.\nבכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.\nעוזרי משיח השקר גנבו את האיגרת והצפינו אותה בתיבה נעולה עליך לחלץ את האיגרת מהתיבה על ידי גלוי הקוד הסודי בו היא נעולה ולהעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.\nבכל אחת מן הדלתות שעל המסך תוכל להגיע לחידה שבפתירתה תקבל רמז לחלק מהצופן שיסייע בהמשך לחשוף את הקוד הסודי בשלימותו.'}}};n("637f");$.render=g,$.__scopeId="data-v-782e17b4";e["default"]=$},"14e5":function(t,e,n){"use strict";var c=n("7a23"),a=Object(c["F"])("data-v-47fb1278"),i=a((function(t,e,n,a,i,s){return Object(c["p"])(),Object(c["d"])("audio",{ref:"audio",loop:"",src:n.src},null,8,["src"])})),s=(n("a9e3"),{name:"autoAudio",props:{src:String,maxVol:{default:.6,type:Number},speedOfIncrement:{default:500,type:Number},increment:{default:.1,type:Number}},data:function(){return{volume:0,setInterval:null}},mounted:function(){this.$refs.audio.volume=this.volume,this.$refs.audio.play(),this.incrementVolume()},methods:{incrementVolume:function(){var t=this;this.setInterval=setInterval((function(){t.volume>t.maxVol-t.increment?clearInterval(t.setInterval):(t.volume+=t.increment,t.$refs.audio.volume=t.volume)}),500)}}});n("8ad2");s.render=i,s.__scopeId="data-v-47fb1278";e["a"]=s},"637f":function(t,e,n){"use strict";n("99a3")},"74d5":function(t,e,n){"use strict";n("9c71")},"76e9":function(t,e,n){t.exports=n.p+"img/ass6.897f39c5.png"},"8ad2":function(t,e,n){"use strict";n("9b17")},"99a3":function(t,e,n){},"9b17":function(t,e,n){},"9c71":function(t,e,n){},c290:function(t,e,n){t.exports=n.p+"img/ass11.f4e6c7fd.png"}}]);
//# sourceMappingURL=about.95460c30.js.map