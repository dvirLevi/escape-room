(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4eeb52"],{1015:function(t,e,i){"use strict";i("4e75")},"1dde":function(t,e,i){var n=i("d039"),r=i("b622"),o=i("2d00"),s=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[],i=e.constructor={};return i[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2064:function(t,e,i){t.exports=i.p+"img/ass7.8aef508f.jpg"},"23a2":function(t,e,i){t.exports=i.p+"img/ass1.707868a5.jpg"},"26c8":function(t,e,i){t.exports=i.p+"img/ass14.c1c02665.jpg"},"29b5":function(t,e,i){"use strict";i("43a6")},4139:function(t,e,i){"use strict";i("ddd3")},"43a6":function(t,e,i){},"4de4":function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").filter,o=i("1dde"),s=i("ae40"),a=o("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e75":function(t,e,i){},"52af":function(t,e,i){t.exports=i.p+"img/ass3.11ce4a4d.jpg"},"52fe":function(t,e,i){t.exports=i.p+"img/ass5.046bf8f8.jpg"},6069:function(t,e,i){t.exports=i.p+"img/ass11.af93368c.jpg"},"61e1":function(t,e,i){t.exports=i.p+"img/ass10.5a20a79a.jpg"},"63ae":function(t,e,i){t.exports=i.p+"img/ass12.49499b44.jpg"},"65ba":function(t,e,i){t.exports=i.p+"img/ass4.dc6d8fe7.jpg"},"7d1d":function(t,e,i){"use strict";var n=function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}return t};e["a"]=n},"820c":function(t,e,i){t.exports=i.p+"img/ass2.7b3005ca.jpg"},"8da7":function(t,e,i){t.exports=i.p+"img/ass9.faea3aaf.jpg"},"8e3c":function(t,e,i){"use strict";var n=i("7a23"),r=Object(n["G"])("data-v-28edaba2"),o=r((function(t,e,i,o,s,a){var c=Object(n["x"])("dragDropItem");return Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.items,(function(o){return Object(n["p"])(),Object(n["d"])(c,{class:i.itemsClass,placeDragClass:i.placeDragClass,dragClass:i.dragClass,style:i.itemsStyle,item:o,key:o.id,id:o.id,elDrop:s.elDrop,onPassDragIndex:e[1]||(e[1]=function(t){return s.dragId=t}),onEndDrop:a.endDrop,onDropMomile:e[2]||(e[2]=function(t){return s.elDrop=t}),onIfDrop:e[3]||(e[3]=function(t){return s.ifDrop=t}),ifDrop:s.ifDrop},{default:r((function(){return[Object(n["w"])(t.$slots,"default",{item:o})]})),_:2},1032,["class","placeDragClass","dragClass","style","item","id","elDrop","onEndDrop","ifDrop"])})),128)}));i("c740");function s(t,e,i,r,o,s){return Object(n["p"])(),Object(n["d"])("div",{id:"drag"+i.id,class:["drag-drop",o.el_prime?i.placeDragClass:""],onMousedown:e[1]||(e[1]=function(){return s.clone&&s.clone.apply(s,arguments)}),onMouseover:e[2]||(e[2]=function(){return s.drop&&s.drop.apply(s,arguments)}),onTouchstart:e[3]||(e[3]=function(){return s.clone&&s.clone.apply(s,arguments)})},[Object(n["w"])(t.$slots,"default")],42,["id"])}i("a9e3");var a={name:"dragDropItem",props:{id:Number,elDrop:String,item:Object,placeDragClass:{default:"p-drag-el",type:String},dragClass:{default:"drag-el",type:String},ifDrop:Boolean},data:function(){return{rect:null,el_prime:null}},methods:{clone:function(t){var e=this;if(!this.el_prime){var i=document.getElementById("drag"+this.id);this.el_prime=i.cloneNode(!0);var n=i.parentElement;n.appendChild(this.el_prime),this.rect=i.getBoundingClientRect(),this.el_prime.id="activeDrag",this.el_prime.classList.add(this.dragClass),this.el_prime.style.position="fixed",this.el_prime.style.setProperty("width",this.rect.width+"px","important"),this.el_prime.style.setProperty("height",this.rect.height+"px","important"),this.el_prime.style.setProperty("pointer-events","none","important"),this.el_prime.style.setProperty("margin","0px","important"),this.el_prime.style.left=this.rect.left+"px",this.el_prime.style.top=this.rect.top+"px",setTimeout((function(){e.el_prime.style.setProperty("transition",".2s"),e.follow(t)}),3),this.$emit("pass-drag-index",this.id);var r=document.body;if(this.el_prime){var o=function(){e.el_prime.ontransitionend=function(){e.el_prime&&(e.el_prime.remove(),e.el_prime=null,e.$emit("if-drop",!0))},e.$emit("if-drop",!1),e.el_prime.style.setProperty("transition",".2s"),e.rect=i.getBoundingClientRect(),e.el_prime.style.left=e.rect.left+"px",e.el_prime.style.top=e.rect.top+"px",r.onmousemove=null,r.onmouseup=null,r.ontouchend=null};r.onmousemove=function(t){e.drag(t)},r.onmouseup=function(){o()},i.addEventListener("touchmove",(function(t){t.preventDefault()}),{passive:!1}),r.ontouchmove=function(t){e.drag(t),e.dropMomile(t)},r.ontouchend=function(){o()}}}},drag:function(t){this.el_prime.style.setProperty("transition","none"),this.follow(t)},drop:function(){var t=document.getElementById("activeDrag");t&&!this.el_prime&&this.ifDrop&&this.$emit("end-drop",this.id)},dropMomile:function(t){var e=t.touches[0],i=document.elementFromPoint(e.clientX,e.clientY);this.$emit("drop-momile",i.id)},follow:function(t){"mousemove"===t.type||"mousedown"===t.type?(this.el_prime.style.left=t.clientX-this.rect.width/2+"px",this.el_prime.style.top=t.clientY-this.rect.height/2+"px"):"touchmove"!==t.type&&"touchstart"!==t.type||(this.el_prime.style.left=t.touches[0].clientX-this.rect.width/2+"px",this.el_prime.style.top=t.touches[0].clientY-this.rect.height/2+"px")}},watch:{elDrop:function(){if(this.elDrop==="drag"+this.id){var t=document.getElementById("activeDrag");t&&!this.el_prime&&this.$emit("end-drop",this.id)}}}};i("29b5");a.render=s;var c=a,d={name:"dragDrop",components:{dragDropItem:c},props:{items:Array,itemsClass:String,itemsStyle:Object,placeDragClass:{default:"p-drag-el",type:String},dragClass:{default:"drag-el",type:String}},emits:["end-drop"],data:function(){return{dragId:null,elDrop:null,ifDrop:!0}},methods:{endDrop:function(t){var e=function(t,e,i){var n=i.findIndex((function(e){return e.id===t})),r=i.findIndex((function(t){return t.id===e})),o=i[n],s=i[r];i[n]=s,i[r]=o};e(this.dragId,t,this.items),this.$emit("end-drop",this.items)}}};i("1015");d.render=o,d.__scopeId="data-v-28edaba2";e["a"]=d},9424:function(t,e,i){t.exports=i.p+"img/ass8.d2a2d29d.png"},9988:function(t,e,i){t.exports=i.p+"img/ass6.7a9bc95a.jpg"},b655:function(t,e,i){"use strict";i.r(e);var n=i("7a23"),r=Object(n["G"])("data-v-6598c401");Object(n["s"])("data-v-6598c401");var o=Object(n["g"])("h3",null,"סדרו את המפה שתנחה את השליח מתימן לספרד",-1);Object(n["q"])();var s=r((function(t,e,s,a,c,d){var p=Object(n["x"])("puzzle"),l=Object(n["x"])("roomSlots");return Object(n["p"])(),Object(n["d"])(l,{correntRoom:d.correntRoom,img:i("9424")},{inst:r((function(){return[o]})),task:r((function(){return[Object(n["g"])(p,{ifShuffle:d.correntRoom.ifResolved,onEndGame:e[1]||(e[1]=function(e){return t.$store.commit("endTask",d.correntRoom.id)})},null,8,["ifShuffle"])]})),_:1},8,["correntRoom","img"])})),a=(i("4de4"),i("b0c0"),{class:"row"}),c={class:"col f-center"},d={class:"f-center puzzle p-1 border-r"};function p(t,e,i,r,o,s){var p=Object(n["x"])("dragDrop");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["g"])("div",c,[Object(n["g"])("div",d,[Object(n["g"])(p,{onEndDrop:s.endGame,itemsClass:"wrap-part",itemsStyle:{width:i.widthParts+"%"},items:o.parts},{default:Object(n["D"])((function(t){return[Object(n["g"])("div",{class:"part img-contain",style:{backgroundImage:"url(".concat(t.item.img,")")}},null,4)]})),_:1},8,["onEndDrop","itemsStyle","items"])])])])}i("a9e3");var l=i("7d1d"),u=i("8e3c"),f={name:"puzzle",components:{dragDrop:u["a"]},props:{widthParts:{default:20,type:Number},ifShuffle:Boolean},data:function(){return{parts:[{img:i("23a2"),id:1},{img:i("820c"),id:2},{img:i("52af"),id:3},{img:i("65ba"),id:4},{img:i("52fe"),id:5},{img:i("9988"),id:6},{img:i("2064"),id:7},{img:i("b9af"),id:8},{img:i("8da7"),id:9},{img:i("61e1"),id:10},{img:i("6069"),id:11},{img:i("63ae"),id:12},{img:i("ef54"),id:13},{img:i("26c8"),id:14},{img:i("db55"),id:15}]}},mounted:function(){this.ifShuffle||(this.parts=Object(l["a"])(this.parts))},methods:{endGame:function(){this.ifEndGame&&this.$emit("end-game")}},computed:{ifEndGame:function(){var t=1,e=!0;for(var i in this.parts)this.parts[i].id===t?t++:e=!1;return e}}};i("4139");f.render=p;var m=f,g={name:"room1",components:{puzzle:m},computed:{correntRoom:function(){var t=this;return this.$store.state.rooms.filter((function(e){return e.id===+t.$route.name}))[0]}}};i("fdf6");g.render=s,g.__scopeId="data-v-6598c401";e["default"]=g},b9af:function(t,e,i){t.exports=i.p+"img/ass8.f0f0fea2.jpg"},bedd:function(t,e,i){},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,o=i("44d2"),s=i("ae40"),a="findIndex",c=!0,d=s(a);a in[]&&Array(1)[a]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},db55:function(t,e,i){t.exports=i.p+"img/ass15.b817f36d.jpg"},ddd3:function(t,e,i){},ef54:function(t,e,i){t.exports=i.p+"img/ass13.d11a6422.jpg"},fdf6:function(t,e,i){"use strict";i("bedd")}}]);
//# sourceMappingURL=chunk-6b4eeb52.1dc6779e.js.map