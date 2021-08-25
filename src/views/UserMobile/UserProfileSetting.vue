<template>
  <div>
    <MobileTopBar
      :title="'帳號資訊設定'"
      :backPath="{ name: 'userAccountMobile' }"
      :actionText="'儲存'"
      @action="save"
    />
    <v-container>
      <div class="d-flex flex-column align-center">
        <v-img
          class="rounded-circle"
          src="https://randomuser.me/api/portraits/men/51.jpg"
          max-width="150px"
        ></v-img>
        <v-btn outlined class="mt-3">上傳圖片</v-btn>
      </div>
      <v-divider class="my-3" />
      <v-row
        v-for="profileInputLabel in profileInputLabels"
        :key="profileInputLabel"
        align="start"
      >
        <v-col cols="4">
          <v-subheader>{{ profileInputLabel }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field outlined dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";
export default {
  name: "UserProfileSetting",
  components: {
    MobileTopBar
  },
  data() {
    return {
      profileInputLabels: ["使用者帳號", "姓名", "Email", "電話"]
    };
  },
  methods: {
    save() {}
  }
};
</script>
