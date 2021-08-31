<template>
  <div class="h-100">
    <MobileTopBar
      :title="'關注店家清單'"
      :backPath="{ name: 'AccountMobile' }"
    />
    <v-card class="my-5 pa-1" flat link>
      <div class="d-flex justify-space-around">
        <div>
          <v-avatar size="80">
            <v-img
              src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
          </v-avatar>
        </div>
        <div class="w-100 mx-2">
          <div class="text-subtitle-1 font-weight-bold">
            商店一
          </div>
          <div class="text-caption">
            這是商店一，我們有很多商品
          </div>
        </div>
        <div class="text-right">
          <v-btn color="primary" small>
            購物去
          </v-btn>
        </div>
      </div>

      <v-divider class="mt-3" />
    </v-card>
    <v-card class="my-5 pa-1" flat link>
      <div class="d-flex justify-space-around">
        <div>
          <v-avatar size="80">
            <v-img
              src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </v-avatar>
        </div>
        <div class="w-100 mx-2">
          <div class="text-subtitle-1 font-weight-bold">
            商店2
          </div>
          <div class="text-caption">
            這是商店2，我們有很多商品，Lorem ipsum similique repudiandae culpa
            excepturi obcaecati harum.iandae culpa excepturi obcaecati harum.
          </div>
        </div>
        <div class="text-right">
          <v-btn color="primary" small>
            購物去
          </v-btn>
        </div>
      </div>

      <v-divider class="mt-3" />
    </v-card>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";

export default {
  name: "FollowedStoreMobile",
  components: {
    MobileTopBar
  },
  data() {
    return {};
  }
};
</script>
