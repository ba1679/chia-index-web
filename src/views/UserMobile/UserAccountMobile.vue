<template>
  <div class="user-account-mobile">
    <v-sheet color="primary lighten-1" class="mb-3">
      <v-card width="90%" flat class="profile-card mx-auto">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3 rounded-circle" size="100" tile>
            <v-img src="https://randomuser.me/api/portraits/men/75.jpg"></v-img>
          </v-avatar>
          <div>
            <v-card-title>Alex</v-card-title>
            <v-card-subtitle>alex@email.com</v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-sheet>
    <v-card flat class="order">
      <v-card-title @click="toOrders">
        <v-icon color="primary" class="mr-3">
          mdi-clipboard-list-outline
        </v-icon>
        我的訂單
        <v-icon class="ml-auto" right>
          mdi-chevron-right
        </v-icon>
      </v-card-title>
      <v-card-text class="d-flex justify-space-around">
        <div
          class="d-flex flex-column"
          v-for="status in orderStatus"
          :key="status.icon"
        >
          <v-icon large>{{ status.icon }}</v-icon>
          <div>{{ status.status }}</div>
        </div>
      </v-card-text>
    </v-card>
    <v-card flat class="profile mt-5">
      <v-card-title>
        <v-icon color="primary" class="mr-3">
          mdi-account-circle-outline
        </v-icon>
        個人設定
      </v-card-title>
      <v-card-text class="d-flex justify-space-around">
        <div
          class="d-flex flex-column"
          v-for="setting in profileSetting"
          :key="setting.icon"
          @click="toPage(setting.to)"
        >
          <v-icon large :color="setting.color">{{ setting.icon }}</v-icon>
          <div>{{ setting.title }}</div>
        </div>
      </v-card-text>
    </v-card>
    <v-card flat class="other-info mt-5">
      <v-card-text class="d-flex justify-space-around">
        <div
          class="d-flex flex-column"
          v-for="info in otherInfo"
          :key="info.icon"
        >
          <v-icon large :color="info.color">{{ info.icon }}</v-icon>
          <div>{{ info.title }}</div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "UserAccountMobile",
  data() {
    return {
      orderStatus: [
        {
          icon: "mdi-wallet-outline",
          status: "待付款"
        },
        {
          icon: "mdi-timetable",
          status: "待出貨"
        },
        {
          icon: "mdi-truck-fast-outline",
          status: "待收貨"
        },
        {
          icon: "mdi-checkbox-marked-circle-outline",
          status: "已完成"
        }
      ],
      profileSetting: [
        {
          icon: "mdi-account-edit-outline",
          title: "帳號資訊",
          color: "green",
          to: { name: "UserProfileSetting" }
        },
        {
          icon: "mdi-map-marker-radius-outline",
          title: "收件地址",
          color: "orange",
          to: { name: "UserAddressSetting" }
        },
        {
          icon: "mdi-cash-lock",
          title: "支付管理",
          color: "red lighten-2",
          to: { name: "UserPaymentSetting" }
        }
      ],
      otherInfo: [
        {
          icon: "mdi-bell-ring-outline",
          title: "通知",
          color: "primary"
        },
        {
          icon: "mdi-store",
          title: "關注店家",
          color: "orange"
        }
      ]
    };
  },
  methods: {
    toOrders() {
      this.$router.push({ name: "UserOrdersMobile" });
    },
    toPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.user-account-mobile {
  height: 100%;
  background-color: #f5f5f5;
}
.profile-card {
  transform: translateY(50%);
  margin-bottom: 75px;
}
</style>
