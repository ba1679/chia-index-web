<template>
  <div class="product-intro" v-if="data">
    <v-sheet flat class="mt-3" :class="{'pa-5': !isMobile}">
      <v-row dense justify="center">
        <v-col :cols="isMobile ? 10 : 6" class="relative">
          <v-img :src="data['media_urls']['main_image']"></v-img>
        </v-col>
        <v-col :cols="isMobile ? 10 : 6" class="text-left d-flex flex-column">
          <h3 class="text-h5 font-weight-bold">{{data.name}}</h3>
          <v-row dense class="mt-5">
            <v-col class="d-flex justify-center">
              <v-list class="pt-0">
                <v-list-item class="pl-0" v-for="(item,i) in storeData" :key="i">
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
            <v-col class="d-flex align-center flex-column">
              <qrcode-vue
                :value="storeQrcodeLink"
                size="120"
                renderAs="canvas"
              />
              <div class="mt-5">
                <v-btn large block color="primary"
                  ><v-icon left>mdi-plus</v-icon>{{$t('__follow')}}</v-btn
                >
              </div>
            </v-col>
          </v-row>
        
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="pa-5">
          <p v-html="data.introduction">
          </p>
        </v-col>
      </v-row>
      <v-row v-if="recommendedItemsData.length">
        <v-col :cols="isMobile ? 12 : 4">
          <v-card link class="ma-1 text-center" flat>
            <v-img contain src=https://picsum.photos/id/77/300></v-img>
            <div class="item-tag">
              {{this.$t('__one_web_store_hot_item')}}
            </div>
            <v-card-title class="pb-0 justify-center"> 
              <p>熱賣商品名稱</p> 
            </v-card-title>
            <v-card-text class="pb-0">
              <p class="text-h6 primary--text mb-0">$55</p>
              <p class="text-caption lighten-4--text mb-0">
                已售出: 88件
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" dark block>
                {{$t('__shop_immediately')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col :cols="isMobile ? 12 : 4">
          <v-card link class="ma-1 text-center" flat>
            <v-img cover :src="recommendedItemsData[0].photoUrl"></v-img>
            <div class="item-tag">
              {{this.$t('__one_web_store_recommended_by_manager')}}
            </div>
            <v-card-title class="pb-0 justify-center"> 
              <p>{{recommendedItemsData[0].name}}</p> 
            </v-card-title>
            <v-card-text class="pb-0">
              <p class="text-h6 primary--text mb-0">{{recommendedItemsData[0].description}}</p>
              <!-- <p class="text-caption lighten-4--text mb-0">
                已售出: 88件
              </p> -->
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" dark block>
                {{$t('__shop_immediately')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col :cols="isMobile ? 12 : 4">
          <v-card link class="ma-1 text-center" flat>
            <v-img contain :src="recommendedItemsData[1].photoUrl"></v-img>
            <div class="item-tag">
              {{this.$t('__one_web_store_new_item')}}
            </div>
            <v-card-title class="pb-0 justify-center"> 
              <p>{{recommendedItemsData[1].name}}</p> 
            </v-card-title>
            <v-card-text class="pb-0">
              <p class="text-h6 primary--text mb-0">{{recommendedItemsData[1].description}}</p>
              <!-- <p class="text-caption lighten-4--text mb-0">
                已售出: 88件
              </p> -->
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" dark block>
                {{$t('__shop_immediately')}}
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
import format from "date-fns/format";
import { mapGetters } from "vuex";

export default {
  name: "StoreIntro",
  components: {
    QrcodeVue
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      data: "store/data"
    })
  },
  data() {
    return {
      storeQrcodeLink: "https://www.chia-market.com/",
      storeData:[],
      recommendedItemsData:[]
    };
  },
  methods:{
    updateStoreData() {
      this.storeData = [
        {
          title: this.$t("__one_web_store_num_of_chats"),
          content: this.data["number_of_chats"],
          icon: "mdi-account-multiple-outline"
        },
        {
          title: this.$t('__one_web_store_join_time'),
          content: format(new Date(this.data["create_time"]),"yyyy/MM/dd"),
          icon: "mdi-account-check"
        },
        {
          title: this.$t('__one_web_store_location'),
          content: "台北市, 中正區",
          icon: "mdi-map-marker"
        },
        {
          title: this.$t('__one_web_store_payment'),
          content: "現金、信用卡、Line pay",
          icon: "mdi-cash-usd-outline"
        },
        {
          title: this.$t('__one_web_store_shipping'),
          content: "到店取貨、貨到付款",
          icon: "mdi-truck-fast"
        },
        {
          title: this.$t('__one_web_store_auto_reply_time'),
          content: "週一至週五 9:00~17:00",
          icon: "mdi-message-text-clock"
        }
      ]
        
      
    },
    loadRecommendedItems(){
      const byManager = this.data['recommended_items']['by_manager'][0];
      const newItem = this.data['recommended_items']['new'][0]
      // const hotItem = this.data['recommended_items']['hot'].join(',')
      // console.log(hotItem);
      let itemAry = []
      itemAry.push(byManager,newItem)
      this.$store.dispatch('store/getItems',itemAry)
      .then((res)=>{
        const itemIDs = res['item_ids']
        for(const itemID of itemIDs){
          const itemData = res['items'][itemID]
          this.recommendedItemsData.push(
           {  
             name: itemData.name,
              photoUrl: itemData['photo_urls'][0],
              description: itemData.description,
           }
          )
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        if (val) {
          this.updateStoreData();
          this.loadRecommendedItems()
        }
      }
    }
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