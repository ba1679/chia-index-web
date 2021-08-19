<template>
  <div class="home-page">
    <v-container class="pa-0">
      <v-card flat>
        <v-card-text class="pb-0">
          <v-btn
            dark
            color="pink lighten-2"
            class="mr-2"
            :to="{ name: 'SalesHome' }"
            >零售</v-btn
          >
          <v-btn
            dark
            color="purple lighten-2"
            class="mr-2"
            :to="{ name: 'CateringHome' }"
            >餐飲</v-btn
          >
          <v-btn
            dark
            color="blue lighten-2"
            class="mr-2"
            :to="{ name: 'ServiceHome' }"
            >服務</v-btn
          >
        </v-card-text>
      </v-card>
      <!-- 對應各分類入口網站 -->
      <router-view></router-view>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
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
