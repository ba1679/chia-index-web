<template>
  <div>
    <StoreOnePageWeb
      :industryType="'catering'"
      @loadStore="loadStore"
      ref="storeOnePageWeb"
    />
  </div>
</template>
<script>
import StoreOnePageWeb from "@/components/onePageWeb/StoreOnePageWeb";

export default {
  name: "CateringStoreInfo",
  components: {
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
