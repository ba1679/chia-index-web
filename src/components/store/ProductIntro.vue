<template>
  <div class="product-intro">
    <v-sheet flat class="mt-3 pa-5">
      <v-row dense justify="center">
        <v-col :cols="isMobile ? 10 : 6" class="relative">
          <v-img src="https://lorempixel.com/450/450"></v-img>
        </v-col>
        <v-col :cols="isMobile ? 10 : 6" class="text-left d-flex flex-column">
          <h3 class="text-h5 font-weight-bold">店家名稱</h3>
          <v-row dense>
            <v-col class="d-flex justify-center align-center">
              <v-list>
                 <v-list-item class="pl-0" v-for="item in storeData" :key="item.icon">
                  <v-list-item-icon>
                    <v-icon color="black">{{item.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >{{item.title}}:
                      <span class="primary--text font-weight-bold"
                        >{{item.content}}</span
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
            
              </v-list>
            </v-col>
            <v-col class="d-flex justify-center">
              <qrcode-vue
                :value="storeQrcodeLink"
                size="120"
                renderAs="canvas"
              />
            </v-col>
          </v-row>
          <div>
            <v-btn block color="primary"
              ><v-icon left>mdi-plus</v-icon>關注店家</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="isMobile ? 12 : 4" v-for="i in items" :key="i.name">
          <v-card link class="ma-1 text-center" flat>
            <v-img contain src=https://picsum.photos/id/168/200></v-img>
            <div class="item-tag">
              {{i.category}}
            </div>
            <v-card-title class="pb-0 justify-center"> 
              <p>{{i.name}}</p> 
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
      storeQrcodeLink: "https://www.chia-market.com/",
      items:[
        {
          name: '商品一',
          category: '熱賣商品'
        },
        {
          name: '商品二',
          category: '店長推薦'
        },
        {
          name: '商品三',
          category: '新品推薦'
        }
      ],
      storeData:[
        {
          title: '總商品數',
          content: '123',
          icon: 'mdi-storefront-outline'
        }
        ,
        {
          title: '粉絲人數',
          content: '123',
          icon: 'mdi-account-multiple-outline'
        }
        ,
        {
          title: '加入時間',
          content: '2021/07/22',
          icon: 'mdi-account-check'
        }
        ,
        {
          title: '地點',
          content: '台北市中山區',
          icon: 'mdi-map-marker'
        },
        {
          title: '支付方式',
          content: '現金、貨到付款、Line pay',
          icon: 'mdi-cash-usd-outline'
        },
        {
          title: '物流方式',
          content: '黑貓、到店自取',
          icon: 'mdi-truck-fast'
        },
        {
          title: '自動回覆時間',
          content: '週一至週五 9:00~17:00',
          icon: 'mdi-message-text-clock'
        },
        {
          title: '聯絡我們',
          content: '(04)22557799',
          icon: 'mdi-phone-forward'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item-tag{
  background-color: orange;
  color: #fff;
  padding: 5px 10px;
  position: absolute;
  top: -4px;
  left: -5px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  &::before{
    content: '';
    background-color: orange;
    position: absolute;
    left: 0;
    bottom: -3px;
    border-bottom:5px solid currentColor;
    border-right:5px solid transparent;
  }
}
</style>