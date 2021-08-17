<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />

    <loading-overlay :active.sync="isLoading" loader="dots" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading"
    })
  },
  watch: {
    "$vuetify.breakpoint.mobile": {
      immediate: true,
      handler(val) {
        this.$store.dispatch("setIsMobile", val);
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
