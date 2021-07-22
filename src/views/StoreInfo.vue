<template>
  <div class="store-info">
    <v-container class="my-5">
      <v-row>
        <v-col sm="12" md="5" style="height: 100%">
          <v-card class="mx-auto" max-width="434" height="100%" elevation="1">
            <v-row class="fill-height">
              <v-col align-self="start" sm="12" lg="6">
                <v-avatar class="ml-2" color="grey" size="150">
                  <v-img
                    src="https://pic.pimg.tw/ste06192003/48d4b0919c0d4.jpg"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col sm="12" lg="6">
                <v-list>
                  <v-list-item>
                    商店名稱
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      簡短描述 slkjfsoijfwekflwheoi
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn outlined block color="primary"
                ><v-icon>mdi-plus</v-icon>關注店家</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="12" md="7">
          <v-row>
            <v-col cols="6">
              <v-list>
                <v-list-item>
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
                <v-list-item>
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
                <v-list-item>
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
            <v-col cols="6" class="d-flex jusfify-center align-center">
              <qrcode-vue
                :value="storeQrcodeLink"
                size="120"
                renderAs="canvas"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="my-5">
      <v-card elevation="1">
        <v-card-text>
          店家詳細介紹 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Natus, aperiam quaerat. Maxime ut reiciendis sequi vitae accusantium
          atque quia, iure expedita, nostrum necessitatibus doloribus veritatis
          quibusdam recusandae optio dicta obcaecati deserunt blanditiis
          corrupti magni eum temporibus quae. Maxime doloribus commodi, est,
          aliquam sit magnam voluptate quidem, debitis doloremque consequuntur
          veritatis? Minus velit earum similique consequuntur asperiores libero
          dolorem nulla deserunt pariatur ducimus dolore, soluta aspernatur,
          illum laborum voluptatem cumque! Accusantium ducimus maiores veritatis
          omnis numquam ea veniam ipsa debitis quos quia sequi optio saepe
          alias, provident voluptates dolorum earum vitae eius ex dolorem quo.
          Tenetur maiores consectetur quis magnam et!
        </v-card-text>
      </v-card>
    </v-container>
    <item-data></item-data>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import ItemData from "@/components/store/ItemData.vue";

export default {
  name: "StoreInfo",
  components: {
    QrcodeVue,
    ItemData
  },
  data() {
    return {
      storeQrcodeLink: "https://www.chia-market.com/"
    };
  },
  methods: {}
};
</script>
