<template>
  <v-container class="bg-white h-100 px-5">
    <div class="text-h5 my-3">
      <v-icon color="orange" class="mr-2">mdi-store</v-icon>
      關注店家清單
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
            商店一
          </div>
          <div>
            這是商店一，我們有很多商品
          </div>
        </v-col>
        <v-col cols="2" class="text-right">
          <v-btn color="primary">
            購物去
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
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </v-col>
        <v-col cols="7">
          <div class="text-h6 font-weight-bold">
            商店二
          </div>
          <div>
            這是商店二，我們有很多商品，Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro, eaque. Voluptatem assumenda aliquam
            cupiditate vel amet pariatur adipisci eius nesciunt quod asperiores
            similique delectus, unde laborum sed inventore provident quae.
          </div>
        </v-col>
        <v-col cols="2" class="text-right">
          <v-btn color="primary">
            購物去
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="mt-3" />
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "FollowedStore",
  data() {
    return {};
  }
};
</script>
