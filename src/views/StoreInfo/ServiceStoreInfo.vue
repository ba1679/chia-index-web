<template>
  <div class="store-info" v-if="data">
    <!-- First bg photo -->
    <div class="relative">
      <v-img :src="data['media_urls']['background_image']">
        <!-- store intro -->
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col class="store-intro pa-8" cols="12">
              <h1 class="text-md-h3 mb-3">{{ data.name }}</h1>
              <p class="font-weight-bold pa-5">
                {{ data.description }}
              </p>
              <v-btn
                outlined
                color="white"
                class="font-weight-bold"
                @click="toStoreTelegramBot"
              >
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
      <section class="mb-8" v-if="youtubeLink">
        <iframe
          class="img-fluid"
          width="980"
          height="420"
          :src="youtubeLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <!-- items infomation -->
      <ItemsAlbum
        :items="data.tables.services"
        @toStoreTelegramBot="toStoreTelegramBot"
      />
    </v-container>
    <!-- Second bg photo with store info -->
    <section>
      <v-img :src="data['media_urls']['background_image']" class="relative">
        <StoreIntro @toStoreTelegramBot="toStoreTelegramBot" />
      </v-img>
    </section>
    <v-container>
      <!-- store description -->
      <v-sheet flat class="pa-5 rounded-lg">
        <p v-html="data.introduction"></p>
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
            <!-- <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__service_store_book_available")
                }}</v-list-item-title>
                <v-list-item-content>
                  每天 11:30 ~ 17:00
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item> -->
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__service_store_book_cancel_method")
                }}</v-list-item-title>
                <v-list-item-content>
                  {{ data["customer_service_policy"]["return_policy"] }}
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__service_store_book_other_notice")
                }}</v-list-item-title>
                <v-list-item-content>
                  {{ data["customer_service_policy"]["terms_and_conditions"] }}
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </section>
      <!-- Q&A -->
      <v-row justify="center">
        <v-col :cols="isMobile ? 12 : 6">
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in data.qa" :key="i">
              <v-expansion-panel-header class="font-weight-bold">
                Q{{ i + 1 }} {{ item.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.answer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <!-- project intro -->
      <ProjectIntro class="mt-8" @toStoreTelegramBot="toStoreTelegramBot" />
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
    <!-- <iframe
      class="img-fluid"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5849204944307!2d121.51372886382393!3d25.048156731639953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1627461025178!5m2!1szh-TW!2stw"
      width="1400"
      height="400"
      style="border:0;"
      allowfullscreen="true"
      loading="lazy"
    ></iframe> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StoreIntro from "@/components/StoreIntro";
import ProjectIntro from "@/components/service/ProjectIntro";
import ItemsAlbum from "@/components/ItemsAlbum"

export default {
  name: "StoreInfo",
  components: {
    StoreIntro,
    ProjectIntro,
    ItemsAlbum
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      data: "store/data",

    }),
    youtubeLink() {
      if(this.data["media_urls"]["introduction_youtube"]){
        const link = this.data["media_urls"]["introduction_youtube"];
        const embedLink = link.replace("watch?v=", "embed/");
        return embedLink;
      }else{
        return null
      }
    },
  },
  data() {
    return {
      recommendMobileClass: {
        "d-flex": this.isMobile,
        "justify-center": this.isMobile
      }
    };
  },
   methods:{
    loadStore() {
      this.$store.dispatch("setIsLoading", true);
      return this.$store
        .dispatch("store/fetchStore", this.$route.params.id)
        .then(() => {
          this.$store.dispatch("setIsLoading", false);
        })
        .catch(err => {
          console.error(err);
          this.$store.dispatch("setIsLoading", false);
          this.$router.replace("/");
        });
    },
    toStoreTelegramBot(){
      window.open(`http://t.me/${this.data.['telegram_bot_id']}`)
    }
  },
  created() {
    this.loadStore();
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
