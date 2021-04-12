<template>
  <div class="row">
    <div class="col-md-4">
      <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="sentences" v-slot:default="slotProps">
          <div class="w-75 border-start">
            <h6>{{slotProps.item.text}}</h6>
          </div>
          <div class="w-25 f-center-around">
            <h3 class="m-0">{{slotProps.item.num}}</h3>
            <i :class="slotProps.item.arrow" class="las la-arrow-right h4 m-0"></i>
            <div class="square">
            </div>
          </div>
      </dragDrop>
    </div>
    <div class="col-md-8 pt-2">
       <div class="w-100 f-center">
         <div class="w-50 f-center">
           <div class="square-table" v-for="item in 25" :key="item">

           </div>
         </div>
         <div class="w-50 f-center">
           <div class="square-table" v-for="item in 25" :key="item">

           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import dragDrop from '@/components/dragDrop.vue'


  export default {
    name: 'arrangeSentences',
    components: {
      dragDrop
    },
    data() {
      return {
        sentences: [{
            text: `כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם
          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי
          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא
          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.`,
            num: 1,
            arrow: 'la-arrow-right',
            id: 1
          },
          {
            text: `כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם
          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי
          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא
          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.`,
            num: 2,
            arrow: 'la-arrow-right',
            id: 2
          },
          {
            text: `כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם
          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי
          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא
          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.`,
            num: 3,
            arrow: 'la-arrow-right',
            id: 3
          },
          {
            text: `כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם
          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי
          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא
          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.`,
            num: 4,
            arrow: 'la-arrow-right',
            id: 4
          },
        ]
      }
    }
  }
</script>

<style>
  .sentence {
    border: solid 2px var(--main-color);
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 3px 10px #3d3d3d;
  }

  .sentence h6 {
    font-size: 13px;
  }

  .square {
    width: 20px;
    height: 20px;
    background-color: #000;
  }

  .square-table {
    width: 20%;
    padding-top: 20%;
    background-color: #000;
    border: solid 1px rgb(255, 255, 255);
  }

  @media (max-width: 767.98px) {}
</style>