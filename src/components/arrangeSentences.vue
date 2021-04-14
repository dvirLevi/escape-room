<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col-6">
          <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="redSentences" v-slot:default="slotProps">
            <div class="w-75 border-start">
              <h6>{{slotProps.item.text}}</h6>
            </div>
            <div class="w-25 f-center-around">
              <i :class="slotProps.item.arrow" class="las h4 m-0"></i>
              <h3 class="m-0">{{slotProps.item.num}}</h3>
              <div class="square" :style="{backgroundColor: slotProps.item.colorSquare}">
              </div>
            </div>
          </dragDrop>
        </div>
        <div class="col-6">
          <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="greenSentences" v-slot:default="slotProps">
            <div class="w-75 border-start">
              <h6>{{slotProps.item.text}}</h6>
            </div>
            <div class="w-25 f-center-around">
              <i :class="slotProps.item.arrow" class="las h4 m-0"></i>
              <h3 class="m-0">{{slotProps.item.num}}</h3>
              <div class="square" :style="{backgroundColor: slotProps.item.colorSquare}">
              </div>
            </div>
          </dragDrop>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="w-100 f-center">
            <div class="w-50 f-center">
              <div class="square-table" v-for="item in redSquare" :key="item.id"
                @click="item.id !== 4? item.ifSelect = !item.ifSelect: null"
                :style="{backgroundColor: item.ifSelect? 'red':'#fff'}">

              </div>
            </div>
            <div class="w-50 f-center">
              <div class="square-table" v-for="item in greenSquare" :key="item"
                @click="item.id !== 4? item.ifSelect = !item.ifSelect: null"
                :style="{backgroundColor: item.ifSelect? 'green':'#fff'}">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-md-4">
      <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="sentences" v-slot:default="slotProps">
        <div class="w-75 border-start">
          <h6>{{slotProps.item.text}}</h6>
        </div>
        <div class="w-25 f-center-around">
          <i :class="slotProps.item.arrow" class="las h4 m-0"></i>
          <h3 class="m-0">{{slotProps.item.num}}</h3>
          <div class="square" :style="{backgroundColor: slotProps.item.colorSquare}" >
          </div>
        </div>
      </dragDrop>
    </div>
    <div class="col-md-8 pt-md-2 pt-3">
      <div class="w-100 f-center">
        <div class="w-50 f-center">
          <div class="square-table" v-for="item in redSquare" :key="item.id" @click="item.ifSelect = !item.ifSelect"
            :style="{backgroundColor: item.ifSelect? 'red':'#fff'}">

          </div>
        </div>
        <div class="w-50 f-center">
          <div class="square-table" v-for="item in greenSquare" :key="item" @click="item.ifSelect = !item.ifSelect"
            :style="{backgroundColor: item.ifSelect? 'green':'#fff'}">

          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import dragDrop from '@/components/dragDrop.vue'
  import shuffle from '../helpers/shuffle'

  export default {
    name: 'arrangeSentences',
    components: {
      dragDrop
    },
    data() {
      return {
        redSentences: [{
            text: `נקודת התחלה לוח אדום`,
            num: 2,
            arrow: 'la-arrow-right',
            colorSquare: 'red',
            id: 0
          },
          {
            text: `כֹּה אָמַר כֹּרֶשׁ מֶלֶךְ פָּרַס כֹּל מַמְלְכוֹת הָאָרֶץ נָתַן לִי ה' אֱלֹהֵי הַשָּׁמָיִם
          וְהוּא פָקַד עָלַי לִבְנוֹת לוֹ בַיִת בִּירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה. מִי בָכֶם מִכָּל עַמּוֹ יְהִי
          אֱלֹהָיו עִמּוֹ וְיַעַל לִירוּשָׁלַ‍ִם אֲשֶׁר בִּיהוּדָה וְיִבֶן אֶת בֵּית ה' אֱלֹהֵי יִשְׂרָאֵל הוּא
          הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלָ‍ִם.`,
            num: 4,
            arrow: 'la-arrow-down',
            colorSquare: 'red',
            id: 1
          },
          {
            text: `וַיְהִי בִּימֵי אֲחַשְׁוֵרוֹשׁ הוּא אֲחַשְׁוֵרוֹשׁ הַמֹּלֵךְ מֵהֹדּוּ וְעַד כּוּשׁ שֶׁבַע וְעֶשְׂרִים וּמֵאָה מְדִינָה... וְכָל מַעֲשֵׂה תָקְפּוֹ וּגְבוּרָתוֹ וּפָרָשַׁת גְּדֻלַּת מָרְדֳּכַי אֲשֶׁר גִּדְּלוֹ הַמֶּלֶךְ הֲלוֹא הֵם כְּתוּבִים עַל סֵפֶר דִּבְרֵי הַיָּמִים לְמַלְכֵי מָדַי וּפָרָס.  כִּי מָרְדֳּכַי הַיְּהוּדִי מִשְׁנֶה לַמֶּלֶךְ אֲחַשְׁוֵרוֹשׁ וְגָדוֹל לַיְּהוּדִים...`,
            num: 2,
            arrow: 'la-arrow-left',
            colorSquare: 'red',
            id: 2
          },
          {
            text: `אֲזַי דָּרְיָוֶשׁ הַמֶּלֶךְ שָׂם צַו, וּבִקְּרוּ בְּבֵית הַסְּפָרִים...וְנִמְצָא... בַּבִּירָה אֲשֶׁר בְּמָדַי הַמְּדִינָה, מְגִלָּה אַחַת, וְכֵן כָּתוּב בְּתוֹכָהּ: הַזִּכָּרוֹן: בִּשְׁנַת אַחַת לְכוֹרֶשׁ הַמֶּלֶךְ, כּוֹרֶשׁ הַמֶּלֶךְ שָׂם צַו: "בֵּית הָאֱלֹהִים אֲשֶׁר בִּירוּשָׁלַיִם הַבַּיִת יִבָּנֶה...וּמִמֶּנִּי [דריווש] הוּשַׂם צַו, לְמַה שֶׁתַּעֲשׂוּ עִם זִקְנֵי הַיְּהוּדִים הָאֵלֶּה, לִבְנוֹת אֶת בֵּית הָאֱלֹהִים הַזֶּה, וּמִנִּכְסֵי הַמֶּלֶךְ ...וְנִשְׁלַם בַּיִת זֶה עַד יוֹם שְׁלֹשָׁה לְחֹדֶשׁ אֲדָר, שֶׁהִיא שְׁנַת שֵׁשׁ לְמַלְכוּת דָּרְיָוֶשׁ הַמֶּלֶךְ.`,
            num: 3,
            arrow: 'la-arrow-up',
            colorSquare: 'red',
            id: 3
          }
        ],
        greenSentences: [{
            text: `נקודת התחלה לוח ירוק`,
            num: 2,
            arrow: 'la-arrow-right',
            colorSquare: 'green',
            id: 4
          },
          {
            text: `בתקופה זו נהנו היהודים משלטונות נוחים יחסית, וקיימו קשרים רוחניים וכלכליים עם היישוב היהודי המתחדש בארץ ישראל, וכמובן עם היישוב בבבל: סרו למרותם של ראש הגולה בבבל ושל מרכזי התורה בסורא, נהרדעא ופומבדיתא, שפרחו תחת השושלת הפרסית.`,
            num: 2,
            arrow: 'la-arrow-down',
            colorSquare: 'green',
            id: 5
          },
          {
            text: `לאחר הכיבוש המוסלמי-הערבי חלה הרעה במצבה של הקהילה.`,
            num: 2,
            arrow: 'la-arrow-left',
            colorSquare: 'green',
            id: 6
          },
          {
            text: `בערך באותה התקופה החלה הגירה יהודית מאיראן לארץ ישראל, במקביל לעלייה הראשונה מאירופה ולעלייה מתימן.`,
            num: 2,
            arrow: 'la-arrow-down',
            colorSquare: 'green',
            id: 7
          },
          {
            text: `החלה בקהילה היהודית התעניינות ערה בציונות, ערב הקמת מדינת ישראל היו באיראן כ-100,000 יהודים, וכ-20,000 יהודים פרסיים בארץ ישראל. עד לשנת 1968 עלו ארצה כ-70,000 מיהודי איראן. מאז המהפכה האיסלאמית ועלייתו לשלטון של חומייני, התערער מצבה של הקהילה היהודית באיראן ויהודים רבים עזבו את שטחה.`,
            num: 2,
            arrow: 'la-arrow-right',
            colorSquare: 'green',
            id: 8
          }
        ],
        redSquare: [{
            ifSelect: false,
            ifCorrect: false,
            id: 1
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 2
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 3
          },
          {
            ifSelect: true,
            ifCorrect: true,
            id: 4
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 5
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 6
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 7
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 8
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 9
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 10
          },
          {
            ifSelect: false,
            id: 11
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 12
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 13
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 14
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 15
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 16
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 17
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 18
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 19
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 20
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 21
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 22
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 23
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 24
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 25
          }
        ],
        greenSquare: [{
            ifSelect: false,
            ifCorrect: false,
            id: 1
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 2
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 3
          },
          {
            ifSelect: true,
            ifCorrect: true,
            id: 4
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 5
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 6
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 7
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 8
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 9
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 10
          },
          {
            ifSelect: false,
            id: 11
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 12
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 13
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 14
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 15
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 16
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 17
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 18
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 19
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 20
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 21
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 22
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 23
          },
          {
            ifSelect: false,
            ifCorrect: true,
            id: 24
          },
          {
            ifSelect: false,
            ifCorrect: false,
            id: 25
          }
        ]
      }
    },
    mounted() {
      this.redSentences = shuffle(this.redSentences)
      this.greenSentences = shuffle(this.greenSentences)
    },
    computed: {
      ifEndGame() {
        let check = true;
        for (let i in this.redSquare) {
          if (this.redSquare[i].ifCorrect && !this.redSquare[i].ifSelect || !this.redSquare[i].ifCorrect && this
            .redSquare[i].ifSelect) {
            check = false;
          }
        }
        for (let i in this.greenSquare) {
          if (this.greenSquare[i].ifCorrect && !this.greenSquare[i].ifSelect || !this.greenSquare[i].ifCorrect && this
            .greenSquare[i].ifSelect) {
            check = false;
          }
        }
        return check;
      }
    },
    watch: {
      ifEndGame: function (ifEndGame) {
        if (ifEndGame) {
          this.$emit('end-game');
        }
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
    border: solid 1px rgb(0, 0, 0);
  }

  @media (max-width: 767.98px) {
    .sentence h6 {
      font-size: 10px;
    }
  }
</style>