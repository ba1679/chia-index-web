<template>
  <div class="item-data">
    <v-container class="my-5">
      <v-row>
        <v-col cols="3">
          <v-list>
            <h3 class="mb-2">
              <v-icon class="pr-2">mdi-format-list-bulleted-square</v-icon>分類
            </h3>
            <v-list-item-group v-model="categorySelect">
              <v-list-item v-for="i in 6" :key="i">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ `分類 ${i}` }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="9">
          <v-sheet color="grey lighten-4" width="100%" class="px-5 py-2">
            <v-row align="center">
              <v-col cols="6">
                <v-tabs background-color="grey lighten-4">
                  <v-tab>綜合排名</v-tab>
                  <v-tab>人氣商品</v-tab>
                  <v-tab>最新</v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="3">
                <v-select label="價格" :items="priceSortOption"> </v-select>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn-toggle>
                  <v-btn>
                    <v-icon>mdi-menu-left</v-icon>
                  </v-btn>
                  <v-btn>
                    <v-icon>mdi-menu-right</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-sheet>
          <v-card flat>
            <v-card-text class="pa-0">
              <v-row class="flex-wrap" dense>
                <v-col cols="3" v-for="i in 10" :key="i">
                   <v-card link max-width="200" class="ma-1">
                      <v-img contain src=https://picsum.photos/id/99/200></v-img>
                      <v-card-title class="pb-0"> 
                        商品名稱 
                      </v-card-title>
                      <v-card-text >
                        <p class="text-h6 primary--text">$55</p>
                        <p class="text-caption lighten-4--text">
                          已售出: 88件
                        </p>
                      </v-card-text>
                    </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
           <div class="text-center mt-3">
              <v-pagination
                v-model="itemPage"
                :length="15"
                :total-visible="7"
              ></v-pagination>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ItemData",
  data() {
    return {
      categorySelect: "",
      priceSortOption: ["由低至高", "由高至低"],
      itemPage: 1
    };
  }
};
</script>
