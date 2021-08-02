<template>
  <v-container class="bg-white h-100">
    <v-row class="my-3">
      <v-col cols="12">
        <div class="text-h5 d-flex">
          我的地址
          <v-btn class="ml-auto" color="primary">
            新增收件地址
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-card
      class="my-5"
      flat
      v-for="(data, i) in userAddressData"
      :key="data.name"
    >
      <v-row justify="space-around">
        <v-col cols="10">
          <v-row align="center" v-for="title in userAddressTitle" :key="title">
            <v-col cols="2">
              <v-subheader>{{ title }}</v-subheader>
            </v-col>
            <v-col cols="10">
              <p class="mb-0">{{ data[title] }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-btn outlined color="primary">刪除</v-btn>
        </v-col>
      </v-row>
      <v-divider v-if="i < userAddressData.length - 1" />
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "UserAddress",
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
  }
};
</script>
