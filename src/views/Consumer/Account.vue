<template>
  <div class="user-account">
    <v-container>
      <v-row>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <v-img
              class="rounded-circle"
              src="https://randomuser.me/api/portraits/men/51.jpg"
              max-width="150px"
            ></v-img>
          </div>
          <v-list class="side-list">
            <template v-for="item in sideList">
              <v-list-group
                v-if="item.items"
                :key="item.title"
                v-model="item.active"
                prepend-icon="mdi-account-circle"
                append-icon=""
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  link
                  v-for="child in item.items"
                  :key="child.title"
                  v-model="child.active"
                  :to="child.to"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ child.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else link :key="item.title" :to="item.to">
                <v-list-item-icon>
                  <v-icon :color="item.color">{{ item.action }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-col cols="9">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "UserAccount",
  data() {
    return {
      sideList: [
        {
          action: "mdi-account-circle",
          color: "primary",
          active: true,
          items: [
            { title: "個人資料", to: { name: "ProfileForm" } },
            { title: "收件地址", to: { name: "Address" } },
            { title: "支付管理", to: { name: "Payment" } }
          ],
          title: "我的帳戶"
        },
        {
          action: "mdi-clipboard-list-outline",
          color: "primary",
          to: { name: "Orders" },
          title: "購買清單"
        },
        {
          action: "mdi-bell-circle-outline",
          color: "orange",
          title: "通知總覽"
        },
        {
          action: "mdi-store",
          color: "orange",
          title: "關注店家清單"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.user-account {
  background-color: #f5f5f5;
}
.side-list.v-list {
  background-color: transparent;
}
</style>
