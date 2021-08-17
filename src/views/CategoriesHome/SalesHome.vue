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
                    <ul class="category-list category-list-1">
                      <li>各個分類內容1</li>
                    </ul>
                  </li>
                  <li class="category-tab-2">
                    零售分類2
                    <v-icon right color="white">mdi-arrow-right</v-icon>
                    <ul class="category-list category-list-2">
                      <li>各個分類內容2</li>
                    </ul>
                  </li>
                  <li class="category-tab-3">
                    零售分類3
                    <v-icon right color="white">mdi-arrow-right</v-icon>
                    <ul class="category-list category-list-3">
                      <li>各個分類內容3</li>
                    </ul>
                  </li>
                  <li class="category-tab-4">
                    零售分類4
                    <v-icon right color="white">mdi-arrow-right</v-icon>
                    <ul class="category-list category-list-4">
                      <li>各個分類內容4</li>
                    </ul>
                  </li>
                  <li class="category-tab-5">
                    零售分類5
                    <v-icon right color="white">mdi-arrow-right</v-icon>
                    <ul class="category-list category-list-5">
                      <li>各個分類內容5</li>
                    </ul>
                  </li>
                  <li class="category-tab-6">
                    零售分類6
                    <v-icon right color="white">mdi-arrow-right</v-icon>
                    <ul class="category-list category-list-6">
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
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
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
    <!-- recommend store -->
    <StoreCard
      :title="'recommend'"
      :icon="'mdi-fire'"
      @toStoreInfo="toSalesStoreInfo"
    />
    <!-- hot store -->
    <StoreCard :title="'hot'" :hot="true" :icon="'mdi-account-group'" />
    <!-- items -->
    <ItemCard />
  </div>
</template>
<script>
import StoreCard from "@/components/StoreCard";
import ItemCard from "@/components/ItemCard";

export default {
  name: "SalesHome",
  components: {
    StoreCard,
    ItemCard
  },
  data() {
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
    };
  },
  methods: {
    toSalesStoreInfo() {
      this.$router.push({
        name: "SalesStoreInfo",
        params: { id: "MTaqxL0kX1JnBANKHGgo" }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.category-tab {
  border-radius: 0 0 0 4px;
  border-left: 1px solid transparent;
  padding-left: 0;
  background-color: #f37ea5;
  color: #fff;
  li {
    padding: 10.5px;
    display: flex;
    justify-content: space-between;
  }
}
.category-tab-1:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-1 {
    display: block;
  }
}
.category-tab-2:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-2 {
    display: block;
  }
}
.category-tab-3:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-3 {
    display: block;
  }
}
.category-tab-4:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-4 {
    display: block;
  }
}
.category-tab-5:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-5 {
    display: block;
  }
}
.category-tab-6:hover {
  background-color: #fff;
  color: #f37ea5;
  border-color: #f37ea5;
  .category-list-6 {
    display: block;
  }
}
.category-list {
  color: #000;
  display: none;
  position: absolute;
  border: 2px solid #f37ea5;
  border-radius: 0 4px 4px 0;
  left: 100%;
  top: 0;
  z-index: 100;
  background-color: #fff;
  width: 400px;
  height: 100%;
}
</style>
