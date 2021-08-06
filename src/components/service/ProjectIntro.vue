<template>
  <div>
    <v-divider />
    <h3 class="text-h4 text-center py-3">服務方案</h3>
    <v-divider />
    <v-row justify="center" class="mt-3">
      <v-col :cols="isMobile ? 12 : 5" class="text-center">
        <v-btn-toggle
          v-model="serviceSelect"
          background-color="white"
          color="primary"
        >
          <v-btn>
            美甲
          </v-btn>
          <v-btn>
            美睫
          </v-btn>

          <v-btn>
            霧眉
          </v-btn>

          <v-btn>
            做臉
          </v-btn>
        </v-btn-toggle>
        <v-btn color="primary" small text class="ml-2">{{
          $t("__service__store_info_more_service")
        }}</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col :cols="isMobile ? 12 : 3" v-for="i in 3" :key="i">
        <v-card flat>
          <v-card-title class="justify-center"> 服務項目{{ i }} </v-card-title>
          <v-card-text class="text-center">
            <div class="text-h4 mb-3">
              NT$ 500
            </div>
            <p>
              光療指甲又可稱為凝膠指甲，材質是天然樹脂，照LED燈後會硬化，可以強化指甲、矯正指形、彩繪。
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn block dark color="primary">{{
              $t("__service__store_info_go_book")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ProjectIntro",
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      serviceSelect: 0
    };
  }
};
</script>
