(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3650166"],{"0457":function(e,t,n){},"1b8d":function(e,t,n){"use strict";n("a6be")},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"228a":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["F"])("data-v-7bb68cfa");Object(r["s"])("data-v-7bb68cfa");var i=Object(r["g"])("h4",null,"לפניכם מקורות מידע מן ההיסטוריה של יהודי פרס.",-1),c=Object(r["g"])("h5",null,"1. סדרו אותם לפי סדר כרונולוגי (סדר התרחשות).",-1),d=Object(r["g"])("h5",null,"2. לאחר שתמלאו נכון תוכלו להיעזר בהנחיות שעל יד כל מקור ולצבוע את המשבצות שלמטה.",-1),a=Object(r["g"])("h5",null,"3. אם סידרתם נכון וצבעתם נכון תקבלו את הקוד מיהדות פרס!!!",-1);Object(r["q"])();var s=o((function(e,t,s,u,l,p){var f=Object(r["x"])("arrangeSentences"),h=Object(r["x"])("roomSlots");return Object(r["p"])(),Object(r["d"])(h,{correntRoom:p.correntRoom,img:n("d167")},{inst:o((function(){return[i,c,d,a]})),task:o((function(){return[Object(r["g"])(f,{onEndGame:t[1]||(t[1]=function(t){return e.$store.commit("endTask",p.correntRoom.id)})})]})),_:1},8,["correntRoom","img"])})),u=(n("4de4"),n("b0c0"),Object(r["F"])("data-v-0ad44d76"));Object(r["s"])("data-v-0ad44d76");var l={class:"row"},p={class:"col-md-4"},f={class:"w-75 border-start"},h={class:"w-25 f-center-around"},m={class:"m-0"},b=Object(r["g"])("div",{class:"square"},null,-1),g=Object(r["g"])("div",{class:"col-md-8"},null,-1);Object(r["q"])();var v=u((function(e,t,n,o,i,c){var d=Object(r["x"])("dragDrop");return Object(r["p"])(),Object(r["d"])("div",l,[Object(r["g"])("div",p,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.sentences,(function(e){return Object(r["p"])(),Object(r["d"])(d,{class:"w-100 f-center sentence p-2 mt-2",key:e.id,id:e.id,onPassDragIndex:t[1]||(t[1]=function(e){return i.dragId=e}),onEndDrop:c.endDrop},{default:u((function(){return[Object(r["g"])("div",f,[Object(r["g"])("h6",null,Object(r["z"])(e.text),1)]),Object(r["g"])("div",h,[Object(r["g"])("h3",m,Object(r["z"])(e.num),1),Object(r["g"])("i",{class:[e.arrow,"las la-arrow-right h4 m-0"]},null,2),b])]})),_:2},1032,["id","onEndDrop"])})),128))]),g])})),j=(n("c740"),Object(r["F"])("data-v-7569869f")),O=j((function(e,t,n,o,i,c){return Object(r["p"])(),Object(r["d"])("div",{id:"drag"+n.id,class:{opacity:i.el_prime},onMousedown:t[1]||(t[1]=function(){return c.clone&&c.clone.apply(c,arguments)}),onMouseover:t[2]||(t[2]=function(){return c.drop&&c.drop.apply(c,arguments)}),onTouchstart:t[3]||(t[3]=function(){return c.clone&&c.clone.apply(c,arguments)}),onTouchmove:t[4]||(t[4]=function(){return c.drop&&c.drop.apply(c,arguments)})},[Object(r["w"])(e.$slots,"default")],42,["id"])})),x=(n("a9e3"),{name:"dragDrop",props:{id:Number},data:function(){return{rect:null,el_prime:null}},methods:{clone:function(e){var t=this,n=document.getElementById("drag"+this.id);this.el_prime=n.cloneNode(!0);var r=n.parentElement;r.appendChild(this.el_prime),this.rect=n.getBoundingClientRect(),this.el_prime.id="activeDrag",this.el_prime.style.position="fixed",this.el_prime.style.left=e.clientX-this.rect.width/2+"px",this.el_prime.style.top=e.clientY-this.rect.height/2+"px",this.el_prime.style.setProperty("width",this.rect.width+"px","important"),this.el_prime.style.setProperty("height",this.rect.height+"px","important"),this.el_prime.style.setProperty("box-shadow","2px 3px 20px #3d3d3d"),this.el_prime.style.setProperty("pointer-events","none","important"),this.$emit("pass-drag-index",this.id);var o=document.body;this.el_prime&&(o.onmousemove=function(e){t.drag(e)},o.onmouseup=function(){t.el_prime.remove(),t.el_prime=null,o.onmousemove=null,o.onmouseup=null},n.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1}),o.ontouchmove=function(e){t.drag(e)},o.ontouchend=function(){t.el_prime.remove(),t.el_prime=null,o.ontouchmove=null,o.ontouchend=null})},drag:function(e){"mousemove"===e.type?(this.el_prime.style.left=e.clientX-this.rect.width/2+"px",this.el_prime.style.top=e.clientY-this.rect.height/2+"px"):"touchmove"===e.type&&(this.el_prime.style.left=e.changedTouches[0].clientX-this.rect.width/2+"px",this.el_prime.style.top=e.changedTouches[0].clientY-this.rect.height/2+"px")},drop:function(){var e=document.getElementById("activeDrag");console.log(this.id),e&&this.$emit("end-drop",this.id)}},computed:{}}),y=(n("e1b6"),n("d3fe")),_=n.n(y);x.render=O,x.__scopeId="data-v-7569869f","function"===typeof _.a&&_()(x);var w=x,I={name:"arrangeSentences",components:{dragDrop:w},data:function(){return{dragId:null,sentences:[{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:1,arrow:"la-arrow-right",id:1},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:2,arrow:"la-arrow-right",id:2},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:3,arrow:"la-arrow-right",id:3},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:4,arrow:"la-arrow-right",id:4}]}},methods:{endDrop:function(e){var t=function(e,t,n){var r=n.findIndex((function(t){return t.id===e})),o=n.findIndex((function(e){return e.id===t})),i=n[r],c=n[o];n[r]=c,n[o]=i};t(this.dragId,e,this.sentences)}},computed:{}};n("1b8d");I.render=v,I.__scopeId="data-v-0ad44d76";var D=I,E={name:"room1",components:{arrangeSentences:D},data:function(){return{}},computed:{correntRoom:function(){var e=this;return this.$store.state.rooms.filter((function(t){return t.id===+e.$route.name}))[0]}}};n("7f3b");E.render=s,E.__scopeId="data-v-7bb68cfa";t["default"]=E},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),c=n("ae40"),d=i("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!d||!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"7f3b":function(e,t,n){"use strict";n("fd31")},a6be:function(e,t,n){},c740:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,i=n("44d2"),c=n("ae40"),d="findIndex",a=!0,s=c(d);d in[]&&Array(1)[d]((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!s},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(d)},d167:function(e,t,n){e.exports=n.p+"img/ass12.d04687b2.jpg"},d3fe:function(e,t){},e1b6:function(e,t,n){"use strict";n("0457")},fd31:function(e,t,n){}}]);
//# sourceMappingURL=chunk-c3650166.a2c108a0.js.map