(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"095a":function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c=n("c290"),s=n.n(c),a=n("76e9"),o=n.n(a),r=Object(i["G"])("data-v-72daefd4");Object(i["s"])("data-v-72daefd4");var u={class:"row min-height-screen position-relative"},d={class:"col "},l={class:"container p-0"},b={class:"row mt-5"},p={class:"col position-relative"},f={class:"position-relative"},j=Object(i["g"])("img",{src:s.a,class:"el secret-el"},null,-1),O=Object(i["g"])("img",{src:o.a,class:"el journey-el"},null,-1);Object(i["q"])();var g=r((function(t,e,n,c,s,a){var o=Object(i["x"])("autoAudio"),r=Object(i["x"])("textTyping");return Object(i["p"])(),Object(i["d"])("div",u,[Object(i["g"])(o,{src:"../audio/story.mp3",ifMuted:t.$store.state.ifMuted},null,8,["ifMuted"]),Object(i["g"])("div",d,[Object(i["g"])("div",l,[Object(i["g"])("div",b,[Object(i["g"])("div",p,[Object(i["g"])("h1",f,[Object(i["f"])("שלום "+Object(i["z"])(t.$store.state.name)+", נבחרת להיות שליח למשימה סודית! ",1),j]),Object(i["g"])(r,{class:"text-typing p-3 mb-3",text:s.text,fontFamily:"Miriam Libre",color:"#fff",onEndTyping:e[1]||(e[1]=function(t){return s.showButt=!0})},null,8,["text"]),s.showButt?(Object(i["p"])(),Object(i["d"])(i["a"],{key:0},[Object(i["g"])("button",{ref:"button",class:"g-butt bg-gradient h2 p-2 ps-3 pe-3",onClick:e[2]||(e[2]=function(e){return t.$router.push("/MainRoom")})},"קדימה למשימה!",512),O],64)):Object(i["e"])("",!0)])])])])])})),v=Object(i["G"])("data-v-fb9f5500");Object(i["s"])("data-v-fb9f5500");var h=Object(i["g"])("span",null,null,-1);Object(i["q"])();var x=v((function(t,e,n,c,s,a){var o=Object(i["x"])("autoAudio");return Object(i["p"])(),Object(i["d"])("p",null,[s.ifSound?(Object(i["p"])(),Object(i["d"])(o,{key:0,src:"../audio/typewriter.mp3",ifMuted:t.$store.state.ifMuted},null,8,["ifMuted"])):Object(i["e"])("",!0),Object(i["f"])(" "+Object(i["z"])(s.typeText)+" ",1),h])})),m=(n("a9e3"),n("14e5")),y={name:"textTyping",components:{autoAudio:m["a"]},props:{text:String,speed:{type:Number,default:60}},data:function(){return{setInterval:null,typeText:"",textIndex:0,ifSound:!0}},mounted:function(){var t=this;this.setInterval=setInterval((function(){t.typing()}),this.speed)},methods:{typing:function(){this.typeText+=this.text[this.textIndex],this.textIndex===this.text.length-1&&(clearInterval(this.setInterval),this.ifSound=!1,this.$emit("end-typing")),this.textIndex++}}};n("ea84");y.render=x,y.__scopeId="data-v-fb9f5500";var w=y,I={name:"Story",components:{autoAudio:m["a"],textTyping:w},data:function(){return{showButt:!1,text:'יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.\nבכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.\nעוזרי משיח השקר גנבו את האיגרת והצפינו אותה בתיבה נעולה עליך לחלץ את האיגרת מהתיבה על ידי גלוי הקוד הסודי בו היא נעולה ולהעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.\nבכל אחת מן הדלתות שעל המסך תוכל להגיע לחידה שבפתירתה תקבל רמז לחלק מהצופן שיסייע בהמשך לחשוף את הקוד הסודי בשלימותו.'}},watch:{showButt:function(){var t=this;setTimeout((function(){t.$refs.button.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"},200)}))}}};n("0d36");I.render=g,I.__scopeId="data-v-72daefd4";e["default"]=I},"0d36":function(t,e,n){"use strict";n("48dd")},"48dd":function(t,e,n){},6788:function(t,e,n){},"76e9":function(t,e,n){t.exports=n.p+"img/ass6.897f39c5.png"},c290:function(t,e,n){t.exports=n.p+"img/ass11.9813df6b.png"},ea84:function(t,e,n){"use strict";n("6788")}}]);
//# sourceMappingURL=about.d58527f7.js.map