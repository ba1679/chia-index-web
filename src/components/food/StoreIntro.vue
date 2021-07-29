<template>
  <!-- store intro -->
  <v-row justify="center" class="store-info-card text-center">
    <v-col :cols="isMobile ? 12 : 5" class="d-flex flex-column align-center ">
      <v-card flat color="transparent" class="white--text">
        <v-img
          width="350"
          height="350"
          class="rounded-circle"
          src="https://upload.wikimedia.org/wikipedia/zh/thumb/b/bf/Starbucks_Coffee.svg/1200px-Starbucks_Coffee.svg.png"
        ></v-img>
        <v-card-text>
          <h3 class="text-h5 font-weight-bold mt-3">OO咖啡館</h3>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn icon>
            <v-icon color="white">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="white">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="white">mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="isMobile ? 12 : 5">
      <v-row dense class="mt-5">
        <v-col class="d-flex justify-center">
          <v-list class="pt-0 text-left" color="transparent">
            <v-list-item
              class="pl-0"
              v-for="item in storeData"
              :key="item.icon"
            >
              <v-list-item-icon>
                <v-icon color="white">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="white--text">
                <v-list-item-title
                  >{{ item.title }}:
                  <span class="orange--text font-weight-bold">{{
                    item.content
                  }}</span></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="d-flex align-center flex-column">
          <qrcode-vue :value="storeQrcodeLink" size="120" renderAs="canvas" />
          <div class="mt-5">
            <v-btn large block color="primary"
              ><v-icon left>mdi-plus</v-icon>{{ $t("__follow") }}</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import QrcodeVue from "qrcode.vue";

export default {
  name: "StoreIntro",
  components: {
    QrcodeVue
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      storeQrcodeLink: "https://www.chia-market.com/",
      storeData: [
        {
          title: "粉絲人數",
          content: "123",
          icon: "mdi-account-multiple-outline"
        },
        {
          title: "加入時間",
          content: "2021/07/22",
          icon: "mdi-account-check"
        },
        {
          title: "地點",
          content: "台北市, 中正區",
          icon: "mdi-map-marker"
        },
        {
          title: "支付方式",
          content: "現金、信用卡、Line pay",
          icon: "mdi-cash-usd-outline"
        },
        {
          title: "自動回覆時間",
          content: "週一至週五 9:00~17:00",
          icon: "mdi-message-text-clock"
        }
      ]
    };
  }
};
</script>
