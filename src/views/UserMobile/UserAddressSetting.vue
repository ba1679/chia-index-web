<template>
  <div>
    <MobileTopBar
      :title="'收件地址設定'"
      :backPath="{ name: 'userAccountMobile' }"
      :actionText="'儲存'"
      @action="save"
    />
    <v-container>
      <div class="d-flex">
        <v-btn class="ml-auto" color="primary">
          新增收件地址
        </v-btn>
      </div>
      <v-card
        class="my-5"
        flat
        outlined
        v-for="data in userAddressData"
        :key="data.name"
      >
        <v-card-title class="justify-end">
          <v-btn outlined color="primary">刪除</v-btn>
        </v-card-title>
        <v-card-text>
          <v-row align="center" v-for="title in userAddressTitle" :key="title">
            <v-col cols="3">
              <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
            </v-col>
            <v-col cols="9">
              <p class="mb-0">{{ data[title] }}</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";

export default {
  name: "UserAddressSetting",
  components: {
    MobileTopBar
  },
  data() {
    return {
      userAddressTitle: ["name", "phone", "address"],
      userAddressData: [
        {
          name: "OOO",
          phone: "123456789",
          address: "台中市xx區xx路"
        },
        {
          name: "xxx",
          phone: "0988777444",
          address: "台北市xx區xx路"
        },
        {
          name: "123",
          phone: "0988777444",
          address: "台北市xx區xx路"
        }
      ]
    };
  },
  methods: {
    save() {}
  }
};
</script>
