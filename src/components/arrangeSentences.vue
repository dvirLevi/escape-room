<template>
  <div class="row">
    <div class="col-md-4">
      <dragDropWrap itemsClass="w-100 f-center sentence p-2 mt-2" :items="sentences" v-slot:default="slotProps">
          <div class="w-75 border-start">
            <h6>{{slotProps.item.text}}</h6>
          </div>
          <div class="w-25 f-center-around">
            <h3 class="m-0">{{slotProps.item.num}}</h3>
            <i :class="slotProps.item.arrow" class="las la-arrow-right h4 m-0"></i>
            <div class="square">
            </div>
          </div>
      </dragDropWrap>
    </div>
    <div class="col-md-8">

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import dragDropWrap from '@/components/dragDropWrap.vue'


  export default {
    name: 'arrangeSentences',
    components: {
      dragDropWrap
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

  @media (max-width: 767.98px) {}
</style>