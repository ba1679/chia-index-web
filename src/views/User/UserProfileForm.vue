<template>
  <v-container class="bg-white h-100">
    <v-row class="my-3">
      <v-col cols="12">
        <div class="text-h5">
          個人資料
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="my-3">
      <v-col cols="7">
        <v-row
          v-for="profileInputLabel in profileInputLabels"
          :key="profileInputLabel"
          align="start"
        >
          <v-col cols="3">
            <v-subheader>{{ profileInputLabel }}</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <div class="d-flex flex-column align-center">
          <v-img
            class="rounded-circle"
            src="https://randomuser.me/api/portraits/men/51.jpg"
            max-width="150px"
          ></v-img>
          <v-btn outlined class="mt-3">上傳圖片</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      profileInputLabels: ["使用者帳號", "姓名", "Email", "電話"]
    };
  }
};
</script>
<style lang="scss">
.side-list.v-list {
  background-color: transparent;
}
</style>
