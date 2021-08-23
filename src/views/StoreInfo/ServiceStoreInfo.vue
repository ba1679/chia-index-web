<template>
  <div>
    <StoreOnePageWeb
      :industryType="'service'"
      @loadStore="loadStore"
      ref="storeOnePageWeb"
    >
      <template v-slot:project>
        <ProjectIntro class="mt-8" @toStoreTelegramBot="toStoreTelegramBot" />
      </template>
    </StoreOnePageWeb>
  </div>
</template>
<script>
import ProjectIntro from "@/components/service/ProjectIntro";
import StoreOnePageWeb from "@/components/onePageWeb/StoreOnePageWeb";

export default {
  name: "ServiceStoreInfo",
  components: {
    ProjectIntro,
    StoreOnePageWeb
  },
  methods: {
    loadStore() {
      this.$store.dispatch("setIsLoading", true);
      return this.$store
        .dispatch("store/fetchStore", this.$route.params.id)
        .then(() => {
          this.$store.dispatch("setIsLoading", false);
        })
        .catch(err => {
          console.error(err);
          this.$store.dispatch("setIsLoading", false);
          this.$router.replace("/");
        });
    },
    toStoreTelegramBot() {
      const botID = this.$refs.storeOnePageWeb.data["telegram_bot_id"];
      window.open(`http://t.me/${botID}`);
    }
  }
};
</script>
