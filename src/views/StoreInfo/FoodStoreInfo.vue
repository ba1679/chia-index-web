<template>
  <div class="store-info">
    <!-- First bg photo -->
    <div class="relative">
      <v-img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      >
        <!-- store intro -->
        <v-container>
          <v-row justify="center" class="text-left">
            <v-col class="store-intro pa-8" cols="12">
              <h1 class="text-md-h3 mb-3">OO咖啡館</h1>
              <p class="font-weight-bold">
                精實十五年，OO咖啡館
                以「咖啡、蛋糕與烘培」經典組合，深耕全台都會商圈與鄉間小鎮。堅持「物超所值」的初衷，分享精緻蛋糕與美味烘培，搭配健康食尚飲品，除咖啡、茶、蛋糕之外，亦有冰沙、果汁、伴手禮、麵包類等食品。
              </p>
              <v-btn outlined color="white" class="font-weight-bold">
                {{ $t("__food_book_now") }}
                <v-icon>mdi-silverware-fork-knife</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
    <v-container class="text-center">
      <!-- photo & video -->
      <section class="mb-8">
        <iframe
          class="img-fluid"
          width="980"
          height="420"
          src="https://www.youtube.com/embed/XCoDrGC3VQA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <!-- items infomation -->
      <v-container>
        <v-row>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-1">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1519333796630-4b7d19ad1bb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
              <div class="overlay-bg d-flex flex-column justify-center">
                <h3 class="text-sm-h4">極致拿鐵</h3>
                <h4 class="text-sm-h5">$80</h4>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
              <div class="overlay-bg d-flex flex-column justify-center">
                <h3 class="text-sm-h4">驚動美式</h3>
                <h4 class="text-sm-h5">$120</h4>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2">
              <v-img
                src="https://images.unsplash.com/photo-1592663527144-3afb8d150556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2">
              <v-img
                src="https://images.unsplash.com/photo-1600326145552-327f74b9c189?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2">
              <v-img
                src="https://images.unsplash.com/photo-1569929232526-d9c6578e1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2">
              <v-img
                src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!-- Second bg photo with store info -->
    <section>
      <v-img
        src="https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80"
        class="relative"
      >
        <StoreIntro
          :storeName="'oo咖啡館'"
          :storePhoto="
            'https://upload.wikimedia.org/wikipedia/zh/thumb/b/bf/Starbucks_Coffee.svg/1200px-Starbucks_Coffee.svg.png'
          "
        />
      </v-img>
    </section>
    <v-container>
      <!-- store description -->
      <v-sheet flat class="pa-5 rounded-lg">
        <p>
          曾經，咖啡對我來說只是種苦澀提神的功能性飲品，但在哥斯大黎加生活時，一杯普通的黑咖啡，改變了我對咖啡的既有觀感，原來，咖啡也是會甜的，就像台灣的好茶一樣，也會回甘，也會令人回味不已。自此，喝杯咖啡成了我每日生活的莫大享受。我想把這些美好體驗分享給台灣愛好喝咖啡的朋友們，讓大家知道，在台灣想喝到一杯好喝的咖啡，真的不是一件難事。穎可達(Ines
          from Costa Rica)，Ines是創業者的西文名字，佐以哥斯大黎加之名Costa。
          Incosda咖啡以零售咖啡豆為主，我們精選世界各地別具特色的咖啡豆，希望顧客能透過Incosda找到生命中那支“對的咖啡豆”，並且讓更多人喜愛喝咖啡、發現咖啡的迷人之處。除了提供咖啡豆以外，Incosda還提供掛耳咖啡盒與生活飲品，讓大家隨時隨地都能享受咖啡，我們有義式濃縮咖啡飲料、手沖單品與虹吸式咖啡，提供多樣化的咖啡體驗。在咖啡之外，Incosda還提供香醇的茶飲、無咖啡因飲料與下午茶小點，舒適的客席區與會議室也開放包場，讓大家在忙碌的生活之餘也能別有一番風味。
        </p>
      </v-sheet>
      <!-- customer service -->
      <section class="mt-8">
        <v-divider />
        <h3 class="text-h4 text-center py-3">
          {{ $t("__store_info_book_service") }}
        </h3>
        <v-divider />
        <v-row justify="center" :class="{ 'px-10': !isMobile }">
          <v-col cols="12">
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__store_info_open_time")
                }}</v-list-item-title>
                <v-list-item-content>
                  每天 11:30 ~ 17:00
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__store_info_hold_reservation")
                }}</v-list-item-title>
                <v-list-item-content>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis assumenda aliquam sunt vel cupiditate! Unde id,
                  consectetur, ipsa ipsam quaerat dignissimos nesciunt, ducimus
                  a aspernatur possimus nam repellat error temporibus!
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__store_info_cancel_reservation")
                }}</v-list-item-title>
                <v-list-item-content>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis assumenda aliquam sunt vel cupiditate! Unde id,
                  consectetur, ipsa ipsam quaerat dignissimos nesciunt, ducimus
                  a aspernatur possimus nam repellat error temporibus!
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <div class="text-center">
              <v-btn color="primary" large
                >{{ $t("__food_book_now") }}
                <v-icon class="pl-2">mdi-silverware-fork-knife</v-icon></v-btn
              >
            </div>
          </v-col>
        </v-row>
      </section>
      <!-- recommend -->
      <section class="mt-8">
        <h3 class="text-h4 text-center">
          {{ $t("__store_info_people_recommend") }}
        </h3>
        <v-sheet
          outlined
          class="d-flex mx-auto my-5 align-center recommend"
          max-width="700"
          v-for="i in 3"
          :key="i"
        >
          <v-row align="center" :class="{ 'pa-3': isMobile }">
            <v-col :cols="isMobile ? 12 : 4" :class="recommendMobileClass">
              <v-img
                class="rounded-circle ma-3"
                src="https://lorempixel.com/150/150"
                max-width="150"
                max-height="150"
              ></v-img>
            </v-col>
            <v-col :cols="isMobile ? 12 : 8" class="d-flex flex-column">
              <p class="text-h6 font-weight-bold">
                舌尖上美味，只想一吃再吃
              </p>
              <p>
                忘不了的咖啡香，每天都想品嘗
              </p>
              <p class="text-right pr-2">
                林小姐 {{ $t("__store_info_kol_recommend_for_you") }}
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </section>
    </v-container>
    <!-- locatioin map -->
    <iframe
      class="img-fluid"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5849204944307!2d121.51372886382393!3d25.048156731639953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1627461025178!5m2!1szh-TW!2stw"
      width="1400"
      height="400"
      style="border:0;"
      allowfullscreen="true"
      loading="lazy"
    ></iframe>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StoreIntro from "@/components/StoreIntro";

export default {
  name: "StoreInfo",
  components: {
    StoreIntro
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      recommendMobileClass: {
        "d-flex": this.isMobile,
        "justify-center": this.isMobile
      }
    };
  },
  watch: {
    isMobile: {
      immediate: true,
      handler(val) {
        if (val) {
          this.recommendMobileClass["d-flex"] = val;
          this.recommendMobileClass["justify-center"] = val;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.store-info {
  background-color: #f4f4f4;
}
.item-card-1,
.item-card-2 {
  overflow: hidden;
}
@media (min-width: 1024px) {
  .item-bg {
    transform: scale(1);
    transition: all 0.3s;
  }
  .item-card-1:hover,
  .item-card-2:hover {
    .item-bg {
      transform: scale(1.3);
    }
    .overlay-bg {
      opacity: 1;
    }
  }
}
.overlay-bg {
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (min-width: 1024px) {
    opacity: 0;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
}
.store-intro {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  @media (min-width: 600px) {
    position: absolute;
    bottom: 50%;
  }
}
@media (max-width: 600px) {
  .recommend {
    flex-direction: column;
  }
}
.store-info-card {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  @media (min-width: 600px) {
    position: absolute;
    width: 100%;
    bottom: 50%;
    transform: translate(1%, 50%);
  }
}
</style>
