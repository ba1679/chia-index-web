<template>
  <div class="store-info">
    <!-- First bg photo -->
    <div class="relative">
      <v-img
        src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      >
        <!-- store intro -->
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col class="store-intro pa-8" cols="12">
              <h1 class="text-md-h3 mb-3">123美甲美睫</h1>
              <p class="font-weight-bold pa-5">
                店家環境日式簡約,搭配櫻花樹來點綴店內環境,給您不一樣的感覺,熱蠟美肌提供隱密性的空間,讓您無負擔.全新開幕,乾淨舒適的環境,提供美甲,美睫,飄眉,熱蠟美肌的服務,歡迎詢問
              </p>
              <v-btn outlined color="white" class="font-weight-bold">
                {{ $t("__catering_book_now") }}
                <v-icon>mdi-calendar-clock</v-icon>
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
          src="https://www.youtube.com/embed/dgKrV-LwvjY"
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
            <v-card flat link class="relative item-card-1" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              ></v-img>
              <div class="overlay-bg d-flex flex-column justify-center">
                <h3 class="text-sm-h4">絢麗美甲</h3>
                <h4 class="text-sm-h5">$500</h4>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80"
              ></v-img>
              <div class="overlay-bg d-flex flex-column justify-center">
                <h3 class="text-sm-h4">驚動美睫</h3>
                <h4 class="text-sm-h5">$800</h4>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1523374488371-bf3bafcf86bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1600228390270-970186129936?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1531751519425-e1fa9110434b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></v-img>
            </v-card>
          </v-col>
          <v-col :cols="isMobile ? 12 : 4">
            <v-card flat link class="relative item-card-2" height="100%">
              <v-img
                class="item-bg"
                src="https://images.unsplash.com/photo-1521145369939-d3a47a4e18fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=769&q=80"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!-- Second bg photo with store info -->
    <section>
      <v-img
        src="https://images.unsplash.com/photo-1548966438-f876c7af4577?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="relative"
      >
        <StoreIntro
          :storeName="'123美甲'"
          :storePhoto="'https://img95.699pic.com/xsj/1n/k9/3h.jpg!/fh/300'"
        />
      </v-img>
    </section>
    <v-container>
      <!-- store description -->
      <v-sheet flat class="pa-5 rounded-lg">
        <p>
          ❤️20歲當時水晶指甲正是風迷全台時花了10萬學全科班，就為了考ㄧ張2級美甲師證照。
          學完後自己在男朋友的美髮店，隔了ㄧ區位置給我做美甲客人，但還是覺得自己有不足的地方。
          ❤️21歲大學畢業，北上找工作，還是喜歡美甲也不想浪費當初的10萬元於是開始找美甲店應徵美甲師，應徵到的是美甲師助理月薪約1.5萬，才發現自己真的有很多不足的地方，但是我知道自己要的是什麼，所以會把自己不足的地方學起來累積自己的能量和經驗，也謝謝當時的丹丹指藝pink店長照顧我很多也教會我很多美甲的絕技，沒有你就沒有今天的我。
          ❤️22歲開始在自己租的套房，隔一區位置當工作室，謝謝ㄧ路上相信我陪伴我的朋友，姐妹，家人支持著我。
          ❤️終於25歲開了ㄧ家美甲店，終於完成夢想當老闆，聲勢浩大辦了開幕酒會，當天很多ㄧ路上相信我的朋友都來到場為我祝福，開心的參與我的開幕日^_^
        </p>
      </v-sheet>
      <!-- customer service -->
      <section class="mt-8">
        <v-divider />
        <h3 class="text-h4 text-center py-3">
          {{ $t("__service_store_book_notice") }}
        </h3>
        <v-divider />
        <v-row justify="center" :class="{ 'px-10': !isMobile }">
          <v-col cols="12">
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__service_store_book_available")
                }}</v-list-item-title>
                <v-list-item-content>
                  每天 11:30 ~ 17:00
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__service_store_book_cancel_method")
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
                  $t("__service_store_book_other_notice")
                }}</v-list-item-title>
                <v-list-item-content>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis assumenda aliquam sunt vel cupiditate! Unde id,
                  consectetur, ipsa ipsam quaerat dignissimos nesciunt, ducimus
                  a aspernatur possimus nam repellat error temporibus!
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </section>
      <!-- project intro -->
      <ProjectIntro />
      <!-- recommend -->
      <section class="mt-8">
        <h3 class="text-h4 text-center">
          {{ $t("__service__store_info_people_recommend") }}
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
                指甲做的超美!
              </p>
              <p>
                下次還會再預約
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
import ProjectIntro from "@/components/service/ProjectIntro";

export default {
  name: "StoreInfo",
  components: {
    StoreIntro,
    ProjectIntro
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
    height: 100%;
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
    right: 10px;
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
