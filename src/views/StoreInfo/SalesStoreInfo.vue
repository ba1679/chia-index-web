<template>
  <div class="store-info">
    <div class="relative">
      <v-img src="https://lorempixel.com/1200/900">
        <!-- store intro -->
        <v-container>
          <v-row justify="center" class="text-center">
            <v-col class="store-intro" cols="12">
              <h1 class="text-md-h3">零售店家名稱</h1>
              <p class="font-weight-bold">
                歡迎光臨本商店，本店所有商品實物拍攝，質量保證，如需商品諮詢請隨時聯繫我們客服。祝大家在本店購物愉快
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
          src="https://www.youtube.com/embed/ecYFQpHeDnQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <!-- store infomation -->
      <!-- product intro -->
      <ProductIntro />
      <!-- Q&A -->
      <section class="mt-8">
        <v-row justify="center" align="center">
          <v-col :cols="isMobile ? 12 : 6">
            <v-btn block dark elevation="0" color="blue darken-3">
              <v-icon class="mr-2">mdi-facebook</v-icon>Facebook
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0">
          <v-col :cols="isMobile ? 12 : 6">
            <v-btn block dark elevation="0" color="pink">
              <v-icon class="mr-2">mdi-instagram</v-icon>Instagram
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col :cols="isMobile ? 12 : 6">
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in 5" :key="i">
                <v-expansion-panel-header class="font-weight-bold">
                  Q{{ item }} 保固方法與期限 ?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </section>
      <!-- recommend -->
      <section class="mt-8">
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
      </section>
      <!-- intro table -->
      <section class="mb-8">
        <h3 class="text-h4 text-center">
          市場極致表現
        </h3>
        <table class="mx-auto compare-table text-left">
          <thead>
            <tr>
              <th></th>
              <th>本產品</th>
              <th>A公司</th>
              <th>B公司</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>雙鏡頭對焦</th>
              <td class="our-style">
                <span class="d-flex justify-space-between">
                  快速對焦 不晃不模糊
                  <v-icon class="pl-2" color="primary">mdi-check-circle</v-icon>
                </span>
              </td>
              <td>比較項目描述 比較項目</td>
              <td>比較項目描述 比較項目</td>
            </tr>
            <tr>
              <th>NFC感應支付</th>
              <td class="our-style">
                <span class="d-flex justify-space-between">
                  3s 以內
                  <v-icon class="pl-2" color="primary">mdi-check-circle</v-icon>
                </span>
              </td>
              <td>15 - 30 s</td>
              <td>15 - 30 s</td>
            </tr>
            <tr>
              <th>藍牙感測定位</th>
              <td class="our-style">
                <span class="d-flex justify-space-between">
                  16cm
                  <v-icon class="pl-2" color="primary">mdi-check-circle</v-icon>
                </span>
              </td>
              <td>20m 以上</td>
              <td>20m 以上</td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- locatioin map -->
      <section class="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5849204944307!2d121.51372886382393!3d25.048156731639953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1627461025178!5m2!1szh-TW!2stw"
          width="1200"
          height="400"
          style="border:0;"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
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
                  $t("__store_info_customer_service_return")
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
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductIntro from "@/components/sales/ProductIntro";

export default {
  name: "StoreInfo",
  components: {
    ProductIntro
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {};
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
