<template>
  <div>
     <!-- ad -->
      <v-card flat rounded="false" class="mb-2">
        <v-card-text class="pt-0">
          <v-row align="start" dense>
            <v-col md="12" lg="8" class="pt-0">
              <v-row no-gutters>
                <v-col lg="3" class="hidden-md-and-down">
                   <ul class="category-tab relative">
                    <li class="category-tab-1">
                      零售分類1 
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-1" >
                        <li>各個分類內容1</li>
                      </ul>
                    </li>
                    <li class="category-tab-2">
                      零售分類2
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-2" >
                        <li>各個分類內容2</li>
                      </ul>
                    </li>
                    <li class="category-tab-3">
                      零售分類3
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-3" >
                        <li>各個分類內容3</li>
                      </ul>
                    </li>
                    <li class="category-tab-4">
                      零售分類4
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-4" >
                        <li>各個分類內容4</li>
                      </ul>
                    </li>
                    <li class="category-tab-5">
                      零售分類5
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-5" >
                        <li>各個分類內容5</li>
                      </ul>
                    </li>
                    <li class="category-tab-6">
                      零售分類6
                      <v-icon right color="white">mdi-arrow-right</v-icon>
                      <ul class="category-list category-list-6" >
                        <li>各個分類內容6</li>
                      </ul>
                    </li>
                  </ul> 
                </v-col>
                <v-col lg="9">
                   <v-carousel
                      cycle
                      height="280"
                      hide-delimiter-background
                      show-arrows-on-hover
                    >
                      <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                          <v-row class="fill-height" align="center" justify="center">
                      <div class="text-h2">{{ slide }} Slide</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
                </v-col>
              </v-row> 
            </v-col>
            <v-col cols="4" class="hidden-md-and-down pt-0">
              <v-row class="flex-column">
                <v-col cols="12">
                  <a href="#">
                    <v-img
                      height="115px"
                      src="https://cf.shopee.tw/file/cc925a0864d7b34e2b0cb9b3c55c0b7d_xhdpi"
                    ></v-img>
                  </a>
                </v-col>
                <v-col cols="12">
                  <a href="#">
                    <v-img
                      height="115px"
                      src="https://cf.shopee.tw/file/cc925a0864d7b34e2b0cb9b3c55c0b7d_xhdpi"
                    ></v-img>
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center flex-wrap">
          <v-btn
            class="mr-3 mb-3 d-block"
            text
            x-large
            v-for="btn in featureItems"
            :key="btn.icon"
          >
            <div class="d-flex flex-column">
              <v-icon large>{{ btn.icon }}</v-icon>
              <p class="h6">{{ btn.text }}</p>
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-img
        src="https://cf.shopee.tw/file/b81648692a6302400d577b5c5a4cd83f_xxhdpi"
      ></v-img>
      <v-card flat rounded="false" class="my-2" elevation="1">
        <v-card-title><v-icon color="red">mdi-fire</v-icon>{{$t('__recommend_store')}}</v-card-title>
        <v-divider />
        <v-slide-group
          class="pa-2"
          show-arrows
        >
          <v-slide-item
            v-for="n in 6"
            :key="n"
            class="mr-2" 
          >
          <v-card link max-width="250" class="ma-1" :to="{name:'StoreInfo'}">
            <v-img contain src=https://picsum.photos/id/3/200></v-img>
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
      </v-card>
      <!-- hot store -->
      <v-card flat rounded="false" class="my-2" elevation="1">
        <v-card-title><v-icon color="pink">mdi-account-group</v-icon>{{$t('__hot_store')}}</v-card-title>
        <v-divider />
              <v-slide-group
                class="pa-2"
                show-arrows
              >
                <v-slide-item
                  v-for="n in 6"
                  :key="n"
                  class="mr-2" 
                >
                <v-card link max-width="250" class="ma-1 mt-2 relative">
                    <div class="store-badge">
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
      </v-card>
      <!-- items -->
      <v-card flat rounded="false" class="my-2" elevation="1">
        <v-card-title><v-icon color="orange">mdi-new-box</v-icon>{{$t('__good_items')}}</v-card-title>
        <v-divider />
        <v-container fluid>
          <v-row>
            <v-col sm="6" md="3" lg="2" v-for="i in 6" :key="i">
              <v-card link>
                <v-img contain src="https://picsum.photos/200"></v-img>
                <v-card-title> 商品{{ i }} </v-card-title>
                <v-card-text class="d-flex justify-space-around pa-0">
                  <p class="primary--text">{{$t('__store')}}</p>
                  <p class="grey--text">店家名稱</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </div>
</template>
<script>
export default {
  name:'SalesHome',
  data(){
    return {
       colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      featureItems: [
        {
          icon: "mdi-shopping-outline",
          text: "免運直送"
        },
        {
          icon: "mdi-fire",
          text: "免運直送"
        },
        {
          icon: "mdi-cctv",
          text: "免運直送"
        },
        {
          icon: "mdi-cart",
          text: "免運直送"
        },
        {
          icon: "mdi-account",
          text: "免運直送"
        },
        {
          icon: "mdi-merge",
          text: "免運直送"
        },
        {
          icon: "mdi-message-alert",
          text: "免運直送"
        },
        {
          icon: "mdi-message-plus-outline",
          text: "免運直送"
        },
        {
          icon: "mdi-fit-to-page",
          text: "免運直送"
        },
        {
          icon: "mdi-fishbowl",
          text: "免運直送"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.category-card {
  cursor: pointer;
  border: 1px solid #eee;
  transition: all 0.3s;
}
.category-card:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

.category-tab {
  border-radius: 4px 0 0 4px;
  border-left: 1px solid transparent;
  padding-left: 0;
  background-color: #0071bc;
  color: #fff;
  li {
    padding: 10.5px;
    display: flex;
    justify-content: space-between;
  }
}
.category-tab-1:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-1 {
    display: block;
  }
}
.category-tab-2:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-2 {
    display: block;
  }
}
.category-tab-3:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-3 {
    display: block;
  }
}
.category-tab-4:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-4 {
    display: block;
  }
}
.category-tab-5:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-5 {
    display: block;
  }
}
.category-tab-6:hover {
  background-color: #fff;
  color: #0071bc;
  border-color: #0071bc;
  .category-list-6 {
    display: block;
  }
}
.category-list {
  color: #000;
  display: none;
  position: absolute;
  border: 2px solid #0071bc;
  border-radius: 0 4px 4px 0;
  left: 100%;
  top: 0;
  z-index: 100;
  background-color: #fff;
  width: 400px;
  height: 100%;
}
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
