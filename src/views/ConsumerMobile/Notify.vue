<template>
  <div>
    <MobileTopBar :title="'通知總覽'" :backPath="{ name: 'AccountMobile' }" />
    <v-card class="my-3" flat link>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="3">
            <v-img
              src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
          </v-col>
          <v-col cols="9">
            <div class="text-subtitle-1 font-weight-bold">
              收到商品了嗎? 歡迎給予評價!
            </div>
            <div class="text-caption">
              訂單<b>65418584fdsfsdfg</b>已完成。請不吝給予評價支持店家~
            </div>
            <div class="text-caption">2021-08-23 08:35</div>
          </v-col>
        </v-row>
        <v-divider class="mt-3" />
      </v-container>
    </v-card>
    <v-card class="my-3" flat link>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="3">
            <v-img
              src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            />
          </v-col>
          <v-col cols="9">
            <div class="text-subtitle-1 font-weight-bold">
              商品已到貨
            </div>
            <div class="text-caption">
              訂單<b>65418584fdsfsdfg</b>已送達。
            </div>
            <div class="text-caption">2021-08-23 08:35</div>
          </v-col>
        </v-row>
        <v-divider class="mt-3" />
      </v-container>
    </v-card>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";

export default {
  name: "NotifyMobile",
  components: {
    MobileTopBar
  },
  data() {
    return {};
  }
};
</script>
