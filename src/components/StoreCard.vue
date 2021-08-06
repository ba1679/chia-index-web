<template>
  <v-card flat rounded="false" class="my-2" elevation="1">
    <v-card-title>
      <v-icon :color="hot ? 'pink':'red'">{{icon}}</v-icon>{{$t(`__${title}_store`)}}
    </v-card-title>
    <v-divider />
    <template v-if="!isMobile">
      <v-slide-group
        class="pa-2"
        show-arrows
      >
        <v-slide-item
          v-for="n in 6"
          :key="n"
          class="mr-2" 
        >
        <v-card link max-width="250" class="ma-1 mt-2 relative" :to="{name:'SalesStoreInfo'}">
            <div class="store-badge" v-if="hot">
            TOP {{n}}
          </div>
          <v-img contain src=https://picsum.photos/id/55/200></v-img>
          <v-card-title class="text-h5-1 primary--text pb-0"> 
            店家名稱 
          </v-card-title>
          <v-card-text class="pb-0">
          <v-divider />
          </v-card-text>
          <v-card-text>
            店家簡介dolor sit amet consectetur, adipisicing elit.
          </v-card-text>
          <v-card-text class="text-left py-0">
              <v-icon small>mdi-account-group</v-icon> <span>1200 位粉絲</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined link color="primary" class="store-btn">{{$t('__shop_now')}} <v-icon class="icon-transition">mdi-arrow-right</v-icon></v-btn>
          </v-card-actions>
        </v-card>
        </v-slide-item>
      </v-slide-group>
    </template>
    <template v-else>
      <v-card-text>
      <v-row>
        <v-col v-for="n in 6"
        :key="n" cols="12">
            <v-card link class="ma-1 mt-2 relative" :to="{name:'SalesStoreInfo'}">
              <div class="store-badge" v-if="hot">
              TOP {{n}}
            </div>
            <v-img contain src=https://picsum.photos/id/55/200></v-img>
            <v-card-title class="text-h5-1 primary--text pb-0"> 
              店家名稱 
            </v-card-title>
            <v-card-text class="pb-0">
            <v-divider />
            </v-card-text>
            <v-card-text>
              店家簡介dolor sit amet consectetur, adipisicing elit.
            </v-card-text>
            <v-card-text class="text-left py-0">
                <v-icon small>mdi-account-group</v-icon> <span>1200 位粉絲</span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined link color="primary" class="store-btn">{{$t('__shop_now')}} <v-icon class="icon-transition">mdi-arrow-right</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
    </v-card-text>
    </template>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name:'StoreCard',
    computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  props:{
    title: {
      type: String
    },
    storeData:{
      type: Array //預設傳進來的店家資料，等有API再確定
    },
    icon:{
      type: String
    },
    hot:{
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.store-badge {
  position: absolute;
  z-index: 100;
  top: -5px;
  left: 10px;
  padding: 5px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  background-color: orange;
  color: #fff;
  border-radius: 8px;
}
.icon-transition {
  transform: scale(0.5);
  transition: all 0.3s;
}
.store-btn:hover {
  .icon-transition {
    transform: scale(1);
  }
}
</style>