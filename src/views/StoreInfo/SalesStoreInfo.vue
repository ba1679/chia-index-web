<template>
  <div class="store-info" v-if="data">
    <div class="relative">
      <v-img :src="data['media_urls']['background_image']">
        <!-- store intro -->
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col class="store-intro" cols="12">
              <h1 class="text-md-h3">{{ data.name }}</h1>
              <p class="font-weight-bold">
                {{ data.description }}
              </p>
              <v-btn outlined color="white" class="font-weight-bold">
                {{ $t("__shop_now") }} <v-icon>mdi-cart-arrow-right</v-icon>
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
          :src="youtubeLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <!-- store infomation -->
      <!-- product intro -->
      <StoreIntro class="mb-8" />
      <!-- Q&A -->
      <section class="mb-8">
        <v-row justify="center" align="center">
          <v-col :cols="isMobile ? 12 : 6">
            <v-btn
              block
              dark
              elevation="0"
              color="blue darken-3"
              :href="data.links.fb"
              target="_blank"
            >
              <v-icon class="mr-2">mdi-facebook</v-icon>Facebook
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0">
          <v-col :cols="isMobile ? 12 : 6">
            <v-btn
              block
              dark
              elevation="0"
              color="pink"
              :href="data.links.ig"
              target="_blank"
            >
              <v-icon class="mr-2">mdi-instagram</v-icon>Instagram
            </v-btn>
          </v-col>
        </v-row>
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
      </section>
      <!-- recommend -->
      <!-- <section class="mt-8">
        <h3 class="text-h4 text-center">
          {{ $t("__store_info_kol_recommend") }}
        </h3>
        <v-sheet
          outlined
          class="d-flex mx-auto my-5 align-center recommend"
          max-width="700"
          v-for="i in 3"
          :key="i"
        >
          <v-img
            class="rounded-circle ma-3"
            src="https://lorempixel.com/150/150"
            max-width="150"
            max-height="150"
          ></v-img>
          <div class="d-flex flex-column pa-3">
            <p class="text-h6 font-weight-bold">
              品牌強力推薦使用，標題認證介紹說明
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              doloremque in adipisci consequuntur perferendis quos.
            </p>
            <p class="text-right">
              某知名藝人 {{ $t("__store_info_kol_recommend_for_you") }}
            </p>
          </div>
        </v-sheet>
      </section> -->
      <!-- intro table -->
      <section class="mb-8">
        <h3 class="text-h4 text-center">
          {{ $t("__one_web_store_comparison_table") }}
        </h3>
        <table class="mx-auto compare-table text-left">
          <thead>
            <tr>
              <th></th>
              <th>{{ $t("__one_web_store_comparison_table_our") }}</th>
              <th>{{ $t("__one_web_store_comparison_table_A") }}</th>
              <th>{{ $t("__one_web_store_comparison_table_B") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, i) in tableData" :key="i">
              <th>{{ data.feature.texts }}</th>
              <td class="our-style">
                <span class="d-flex justify-space-between">
                  {{ data.our.texts }}
                  <v-icon class="pl-2" color="primary" v-if="data.our.checked"
                    >mdi-check-circle</v-icon
                  >
                </span>
              </td>
              <td>
                <span class="d-flex justify-space-between">
                  {{ data.aStore.texts }}
                  <v-icon
                    class="pl-2"
                    color="primary"
                    v-if="data.aStore.checked"
                    >mdi-check-circle</v-icon
                  >
                </span>
              </td>
              <td>
                <span class="d-flex justify-space-between">
                  {{ data.bStore.texts }}
                  <v-icon
                    class="pl-2"
                    color="primary"
                    v-if="data.bStore.checked"
                    >mdi-check-circle</v-icon
                  >
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- customer service -->
      <section class="mt-8">
        <v-divider />
        <h3 class="text-h4 text-center py-3">
          {{ $t("__store_info_customer_service") }}
        </h3>
        <v-divider />
        <v-row justify="center" class="px-5">
          <v-col cols="12">
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__store_info_customer_service_law")
                }}</v-list-item-title>
                <v-list-item-content>
                  {{ data["customer_service_policy"]["terms_and_conditions"] }}
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  $t("__store_info_customer_service_return")
                }}</v-list-item-title>
                <v-list-item-content>
                  {{ data["customer_service_policy"]["return_policy"] }}
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <!-- locatioin map -->
    <!-- <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5849204944307!2d121.51372886382393!3d25.048156731639953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1627461025178!5m2!1szh-TW!2stw"
        width="100%"
        height="400"
        style="border:0;"
        allowfullscreen="true"
        loading="lazy"
      ></iframe>
    </section> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { consumerAPI } from "@/plugins/service";
import StoreIntro from "@/components/sales/StoreIntro";

export default {
  name: "StoreInfo",
  components: {
    StoreIntro
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      data: "store/data",
      itemIDs: "store/itemIDs"
    }),
    numOfItems() {
      return this.itemIDs.length;
    },
    youtubeLink() {
      const link = this.data["media_urls"]["introduction_youtube"];
      const embedLink = link.replace("watch?v=", "embed/");
      return embedLink;
    },
    tableData() {
      let textLength = this.data.tables.comparison.texts.length / 4;
      let comparisonTexts = this.data.tables.comparison.texts;
      let comparisonChecked = this.data.tables.comparison.checked;
      let texts = [];
      for (let i = 0; i < textLength; i++) {
        let textAry = [];
        let checkedAry = [];
        textAry = comparisonTexts.splice(0, 4);
        checkedAry = comparisonChecked.splice(0, 4);
        texts.push({
          feature: {
            texts: textAry[0],
            checked: checkedAry[0]
          },
          our: {
            texts: textAry[1],
            checked: checkedAry[1]
          },
          aStore: {
            texts: textAry[2],
            checked: checkedAry[2]
          },
          bStore: {
            texts: textAry[3],
            checked: checkedAry[3]
          }
        });
      }
      return texts;
    }
  },
  data() {
    return {};
  },
  methods: {
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
    loadItem() {
      consumerAPI
        .getItems(["itemIDs"])
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getStoreAllItem() {
      consumerAPI
        .getStoreAllItemIDs(this.storeID)
        .then(res => {
          this.numOfItems = res["item_ids"].length;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.storeID = this.$route.params.id;
    this.loadStore();
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
    right: 10px;
  }
}
@media (max-width: 600px) {
  .recommend {
    flex-direction: column;
  }
}
.compare-table {
  margin-top: 10px;
  border-collapse: collapse;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  th,
  td {
    border: 1px solid #000;
    padding: 15px;
  }
  tr:first-child {
    border-bottom: 2px solid #000;
    th:nth-child(2) {
      background-color: orange;
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }
  .our-style {
    background-color: orange;
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}
</style>
