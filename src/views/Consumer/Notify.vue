<template>
  <v-container class="bg-white h-100 px-5">
    <div class="text-h5 my-3">
      <v-icon color="orange" class="mr-2">mdi-bell-ring-outline</v-icon>
      通知總覽
    </div>
    <v-divider />
    <v-card class="my-5" flat link>
      <v-row justify="space-between" no-gutters>
        <v-col cols="3">
          <v-img
            max-width="150"
            src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </v-col>
        <v-col cols="7">
          <div class="text-h6 font-weight-bold">
            收到商品了嗎? 歡迎給予評價!
          </div>
          <div>
            訂單<b>65418584fdsfsdfg</b>已完成。請不吝給予評價支持店家~
          </div>
          <div>2021-08-23 08:35</div>
        </v-col>
        <v-col cols="2" class="text-right">
          <v-btn outlined color="primary">
            評價訂單
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="mt-3" />
    </v-card>
    <v-card class="my-5" flat link>
      <v-row justify="space-between" no-gutters>
        <v-col cols="3">
          <v-img
            max-width="150"
            src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          />
        </v-col>
        <v-col cols="7">
          <div class="text-h6 font-weight-bold">
            商品已到貨
          </div>
          <div>
            訂單<b>65418584fdsfsdfg</b>已送達。
          </div>
          <div>2021-08-23 08:35</div>
        </v-col>
        <v-col cols="2" class="text-right">
          <v-btn outlined color="primary">
            查看訂單
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="mt-3" />
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Notify",
  data() {
    return {};
  }
};
</script>
