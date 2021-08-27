<template>
  <v-container class="bg-white h-100 px-5">
    <v-row justify="space-between" align="center" class="mb-2">
      <v-col cols="3">
        <v-btn text color="primary" @click="backToOrders">
          <v-icon class="mr-2">mdi-arrow-left-bold-circle-outline</v-icon>
          回上頁
        </v-btn>
      </v-col>
      <v-col cols="6" class="text-right">
        訂單編號: 1234567 |
        <span class="orange--text font-weight-bold">已完成</span>
      </v-col>
    </v-row>
    <div class="stepper d-flex">
      <div class="stepper_step"></div>
    </div>
    <v-card
      flat
      outlined
      link
      class="mb-3"
      v-for="order in orderData"
      :key="order.id"
      @click="toOrder(order.id)"
    >
      <v-card-title class="justify-space-between">
        <div>
          <v-icon color="primary">mdi-store</v-icon>
          {{ order.storeName }}
        </div>
        <div>
          <v-icon color="success">
            mdi-truck-check
          </v-icon>
          {{ order.status }}
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text
        class="d-flex justify-space-between align-center"
        v-for="item in order.items"
        :key="item.id"
      >
        <v-img :src="item.photoUrl" max-width="100px"></v-img>
        <p class="text-left text-subtitle-1">{{ item.name }}</p>
        <p class="text-subtitle-1">x{{ item.qty }}</p>
        <p class="text-subtitle-1">${{ item.price }}</p>
      </v-card-text>
      <v-divider />
      <div class="d-flex justify-end px-3">
        <p class="text-subtitle-1">
          <v-icon color="orange">mdi-cash-usd-outline</v-icon>總金額:
          <span class="text-h6 orange--text">${{ order.totalPrice }}</span>
        </p>
      </div>
      <v-card-actions class="justify-end">
        <v-btn color="primary">聯絡店家</v-btn>
        <v-btn color="primary" outlined>查看店家</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
      orderData: [
        {
          id: "123465789",
          storeName: "123店家",
          status: "完成",
          items: [
            {
              id: "1111",
              name: "商品一",
              photoUrl: "https://lorempixel.com/400/400/",
              qty: 3,
              price: 10
            },
            {
              id: "22222",
              name: "商品二",
              photoUrl: "https://lorempixel.com/500/500/",
              qty: 10,
              price: 20
            }
          ],
          totalPrice: 230
        }
      ]
    };
  },
  methods: {
    backToOrders() {
      this.$router.push({ name: "UserOrders" });
    }
  }
};
</script>
