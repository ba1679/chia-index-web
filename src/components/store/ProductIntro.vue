<template>
  <div class="product-intro">
    <h3 class="text-h4 text-center">
      店家資訊
    </h3>
    <v-sheet flat class="mt-3 pa-5">
      <v-row dense justify="center">
        <v-col :cols="isMobile ? 10 : 6">
          <v-img src="https://lorempixel.com/450/450"></v-img>
        </v-col>
        <v-col :cols="isMobile ? 10 : 6" class="text-left d-flex flex-column">
          <h3 class="text-h5 font-weight-bold">店家名稱</h3>
          <v-row dense>
            <v-col class="d-flex justify-center align-center">
              <v-list>
                <v-list-item class="pl-0">
                  <v-list-item-icon>
                    <v-icon color="black">mdi-storefront-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >總商品數:
                      <span class="primary--text font-weight-bold"
                        >155</span
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-icon>
                    <v-icon color="black">mdi-account-multiple-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >粉絲人數:
                      <span class="primary--text font-weight-bold"
                        >155</span
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="pl-0">
                  <v-list-item-icon>
                    <v-icon color="black">mdi-account-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >加入時間:
                      <span class="primary--text font-weight-bold"
                        >2021/07/22</span
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col class="d-flex align-center justify-center">
              <qrcode-vue
                :value="storeQrcodeLink"
                size="120"
                renderAs="canvas"
              />
            </v-col>
          </v-row>
          <div>
            <v-btn outlined block color="primary"
              ><v-icon left small>mdi-plus</v-icon>關注店家</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="isMobile ? 6 : 3" v-for="i in 4" :key="i">
          <v-card link class="ma-1 text-center" outlined>
            <v-img contain src=https://picsum.photos/id/168/200></v-img>
            <v-card-title class="pb-0 justify-center"> 
              <p>商品名稱</p> 
            </v-card-title>
            <v-card-text class="pb-0">
              <p class="text-h6 primary--text mb-0">$55</p>
              <p class="text-caption lighten-4--text mb-0">
                已售出: 88件
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" dark block>
                立即購物
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductIntro",
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
      storeQrcodeLink: "https://www.chia-market.com/"
    };
  }
};
</script>
