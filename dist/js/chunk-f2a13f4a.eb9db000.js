(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2a13f4a"],{"1b8d":function(t,e,n){"use strict";n("a6be")},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f7d":function(t,e,n){},"228a":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o=Object(r["F"])("data-v-7bb68cfa");Object(r["s"])("data-v-7bb68cfa");var i=Object(r["g"])("h4",null,"לפניכם מקורות מידע מן ההיסטוריה של יהודי פרס.",-1),c=Object(r["g"])("h5",null,"1. סדרו אותם לפי סדר כרונולוגי (סדר התרחשות).",-1),d=Object(r["g"])("h5",null,"2. לאחר שתמלאו נכון תוכלו להיעזר בהנחיות שעל יד כל מקור ולצבוע את המשבצות שלמטה.",-1),a=Object(r["g"])("h5",null,"3. אם סידרתם נכון וצבעתם נכון תקבלו את הקוד מיהדות פרס!!!",-1);Object(r["q"])();var s=o((function(t,e,s,u,l,p){var f=Object(r["x"])("arrangeSentences"),m=Object(r["x"])("roomSlots");return Object(r["p"])(),Object(r["d"])(m,{correntRoom:p.correntRoom,img:n("d167")},{inst:o((function(){return[i,c,d,a]})),task:o((function(){return[Object(r["g"])(f,{onEndGame:e[1]||(e[1]=function(e){return t.$store.commit("endTask",p.correntRoom.id)})})]})),_:1},8,["correntRoom","img"])})),u=(n("4de4"),n("b0c0"),Object(r["F"])("data-v-0ad44d76"));Object(r["s"])("data-v-0ad44d76");var l={class:"row"},p={class:"col-md-4"},f={class:"w-75 border-start"},m={class:"w-25 f-center-around"},h={class:"m-0"},b=Object(r["g"])("div",{class:"square"},null,-1),g=Object(r["g"])("div",{class:"col-md-8"},null,-1);Object(r["q"])();var v=u((function(t,e,n,o,i,c){var d=Object(r["x"])("dragDrop");return Object(r["p"])(),Object(r["d"])("div",l,[Object(r["g"])("div",p,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.sentences,(function(t){return Object(r["p"])(),Object(r["d"])(d,{class:"w-100 f-center sentence p-2 mt-2",key:t.id,id:t.id,onPassDragIndex:e[1]||(e[1]=function(t){return i.dragId=t}),onEndDrop:c.endDrop},{default:u((function(){return[Object(r["g"])("div",f,[Object(r["g"])("h6",null,Object(r["z"])(t.text),1)]),Object(r["g"])("div",m,[Object(r["g"])("h3",h,Object(r["z"])(t.num),1),Object(r["g"])("i",{class:[t.arrow,"las la-arrow-right h4 m-0"]},null,2),b])]})),_:2},1032,["id","onEndDrop"])})),128))]),g])})),j=(n("c740"),Object(r["F"])("data-v-05547e39")),O=j((function(t,e,n,o,i,c){return Object(r["p"])(),Object(r["d"])("div",{id:"drag"+n.id,class:{opacity:i.el_prime},onMousedown:e[1]||(e[1]=function(){return c.clone&&c.clone.apply(c,arguments)}),onMouseover:e[2]||(e[2]=function(){return c.drop&&c.drop.apply(c,arguments)}),onTouchstart:e[3]||(e[3]=function(){return c.clone&&c.clone.apply(c,arguments)}),onTouchmove:e[4]||(e[4]=function(){return c.drop&&c.drop.apply(c,arguments)})},[Object(r["w"])(t.$slots,"default")],42,["id"])})),x=(n("a9e3"),{name:"dragDrop",props:{id:Number},data:function(){return{rect:null,el_prime:null}},methods:{clone:function(t){var e=this,n=document.getElementById("drag"+this.id);this.el_prime=n.cloneNode(!0);var r=n.parentElement;r.appendChild(this.el_prime),this.rect=n.getBoundingClientRect(),this.el_prime.id="activeDrag",this.el_prime.style.position="fixed",this.el_prime.style.left=t.clientX-this.rect.width/2+"px",this.el_prime.style.top=t.clientY-this.rect.height/2+"px",this.el_prime.style.setProperty("width",this.rect.width+"px","important"),this.el_prime.style.setProperty("height",this.rect.height+"px","important"),this.el_prime.style.setProperty("box-shadow","2px 3px 20px #3d3d3d"),this.el_prime.style.setProperty("pointer-events","none","important"),this.$emit("pass-drag-index",this.id);var o=document.body;this.el_prime&&(o.onmousemove=function(t){e.drag(t)},o.onmouseup=function(){e.el_prime.remove(),e.el_prime=null,o.onmousemove=null},o.ontouchmove=function(t){t.stopPropagation(),e.drag(t)},o.ontouchend=function(t){t.stopPropagation(),e.el_prime.remove(),e.el_prime=null,o.onmousemove=null})},drag:function(t){this.el_prime.style.left=t.clientX-this.rect.width/2+"px",this.el_prime.style.top=t.clientY-this.rect.height/2+"px"},drop:function(){var t=document.getElementById("activeDrag");t&&!this.el_prime&&this.$emit("end-drop",this.id)}},computed:{}}),_=(n("bf28"),n("d3fe")),w=n.n(_);x.render=O,x.__scopeId="data-v-05547e39","function"===typeof w.a&&w()(x);var y=x,I={name:"arrangeSentences",components:{dragDrop:y},data:function(){return{dragId:null,sentences:[{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:1,arrow:"la-arrow-right",id:1},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:2,arrow:"la-arrow-right",id:2},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:3,arrow:"la-arrow-right",id:3},{text:"כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם\n          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי\n          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא\n          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.",num:4,arrow:"la-arrow-right",id:4}]}},methods:{endDrop:function(t){var e=function(t,e,n){var r=n.findIndex((function(e){return e.id===t})),o=n.findIndex((function(t){return t.id===e})),i=n[r],c=n[o];n[r]=c,n[o]=i};e(this.dragId,t,this.sentences)}},computed:{}};n("1b8d");I.render=v,I.__scopeId="data-v-0ad44d76";var D=I,P={name:"room1",components:{arrangeSentences:D},data:function(){return{}},computed:{correntRoom:function(){var t=this;return this.$store.state.rooms.filter((function(e){return e.id===+t.$route.name}))[0]}}};n("7f3b");P.render=s,P.__scopeId="data-v-7bb68cfa";e["default"]=P},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),c=n("ae40"),d=i("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!d||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"7f3b":function(t,e,n){"use strict";n("fd31")},a6be:function(t,e,n){},bf28:function(t,e,n){"use strict";n("1f7d")},c740:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,i=n("44d2"),c=n("ae40"),d="findIndex",a=!0,s=c(d);d in[]&&Array(1)[d]((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!s},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(d)},d167:function(t,e,n){t.exports=n.p+"img/ass12.d04687b2.jpg"},d3fe:function(t,e){},fd31:function(t,e,n){}}]);
//# sourceMappingURL=chunk-f2a13f4a.eb9db000.js.map