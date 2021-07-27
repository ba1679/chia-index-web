<template>
  <div class="store-info">
    <v-container class="text-center">
      <!-- photo & video -->
      <section class="mb-8">
        <img
          class="img-fluid"
          src="https://lorempixel.com/980/580"
          alt="店家圖片"
        />
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

      <!-- store intro -->
      <section class="mb-8">
        <div class="text-center">
          <h3 class="text-h4 mb-0">感光測試</h3>
          <p class="text-subtitle-1">不論陰天夜晚，辨識能力極高</p>
        </div>
        <v-row dense class="photo-intro" v-for="i in 2" :key="i">
          <v-col :cols="isMobile ? 12 : 6" class="photo-intro-img">
            <img
              class="img-fluid"
              src="https://lorempixel.com/460/307"
              alt="介紹圖片"
            />
          </v-col>
          <v-col :cols="isMobile ? 12 : 6" class="d-flex align-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              incidunt enim numquam expedita sapiente, rerum dicta aliquam
              quasi. Illum velit obcaecati modi veritatis voluptatibus
              repudiandae consequuntur dicta laborum sequi omnis.
            </p>
          </v-col>
        </v-row>
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
      <!-- recommend -->
      <section>
        <h3 class="text-h4 text-center">
          網紅聯名推薦
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
            <p class="text-right">某知名藝人 誠心推薦</p>
          </div>
        </v-sheet>
      </section>
      <!-- product intro -->
      <ProductIntro />
      <!-- Q&A -->
      <section class="mt-8">
        <v-row justify="center">
          <v-col cols="6">
            <v-btn block dark elevation="0" color="blue darken-3">
              <v-icon class="mr-2">mdi-facebook</v-icon>Facebook
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-0">
          <v-col cols="6">
            <v-btn block dark elevation="0" color="green">
              Line
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
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
      <!-- customer service -->
      <section class="mt-8">
        <v-divider />
        <h3 class="text-h4 text-center py-3">
          客戶服務
        </h3>
        <v-divider />
        <v-row
          justify="center"
          class="px-5"
          :class="{ 'flex-column': isMobile }"
        >
          <v-col :cols="isMobile ? 12 : 5">
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >支付方式</v-list-item-title
                >
                <v-list-item-subtitle
                  >現金、貨到付款、Line pay</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >物流方式</v-list-item-title
                >
                <v-list-item-subtitle
                  >到店自取、面交、黑貓宅急便</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >自動回覆時間</v-list-item-title
                >
                <v-list-item-subtitle
                  >週一 ~ 週五 9:00-17:00</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col :cols="isMobile ? 12 : 6">
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >聯絡我們</v-list-item-title
                >
                <v-list-item-subtitle>店家提供的聯絡方式</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line class="text-left">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >條款與細則</v-list-item-title
                >
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
                <v-list-item-title class="font-weight-bold"
                  >退換貨方式</v-list-item-title
                >
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
import ProductIntro from "@/components/store/ProductIntro";

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
@media (min-width: 960px) {
  .photo-intro:nth-child(even) {
    .photo-intro-img {
      order: 1;
    }
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
