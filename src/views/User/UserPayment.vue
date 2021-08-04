<template>
  <v-container class="bg-white h-100 px-5">
    <!-- credit card -->
    <v-row class="my-3">
      <v-col cols="12">
        <div class="text-h5 d-flex">
          信用卡管理
          <v-btn class="ml-auto" color="primary">
            新增信用卡
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-card
      class="my-5"
      flat
      v-for="(data, i) in creditCardData"
      :key="data.name"
    >
      <v-row justify="space-around">
        <v-col class="text-center" cols="4">
          {{ data.type }}
          <span class="ml-3">{{ data.name }}</span>
        </v-col>
        <v-col class="text-center" cols="4">
          {{ data.cardNum }}
        </v-col>
        <v-col class="text-center" cols="4">
          <v-btn outlined color="grey" class="mr-2">刪除</v-btn>
          <v-btn outlined color="primary">設為預設</v-btn>
        </v-col>
      </v-row>
      <v-divider class="mt-3" v-if="i < creditCardData.length - 1" />
    </v-card>
    <!-- bank account -->
    <v-row class="my-3">
      <v-col cols="12">
        <div class="text-h5 d-flex">
          銀行帳戶管理
          <v-btn class="ml-auto" color="primary">
            新增帳戶
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-card class="my-5" flat v-for="(data, i) in bankData" :key="data.name">
      <v-row justify="space-around">
        <v-col class="text-left" cols="3">
          <div class="d-flex flex-column">
            <p>{{ data.bank }}</p>
            <p>{{ data.name }}</p>
            <div>
              <span> {{ data.area }} {{ data.branch }}</span>
            </div>
          </div>
        </v-col>
        <v-col class="text-center" cols="3">
          {{ data.last5digit }}
        </v-col>
        <v-col class="text-center" cols="3">
          <v-btn outlined color="grey" class="mr-2">刪除</v-btn>
          <v-btn outlined color="primary">設為預設</v-btn>
        </v-col>
      </v-row>
      <v-divider class="mt-3" v-if="i < creditCardData.length - 1" />
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "UserPayment",
  data() {
    return {
      creditCardData: [
        {
          type: "master card",
          name: "OOO",
          cardNum: "123456789"
        },
        {
          type: "visa card",
          name: "XXX",
          cardNum: "**** **** **** 0123"
        }
      ],
      bankData: [
        {
          bank: "玉山銀行",
          name: "王大明",
          area: "台中市",
          branch: "XX分行",
          last5digit: "**545"
        }
      ]
    };
  }
};
</script>
