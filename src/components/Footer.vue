<template>
  <div class="footer">
    <v-footer dark padless>
      <v-card flat tile dark class="primary text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4 white--text"
            icon
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <v-row justify="center">
            <v-col cols="4">
              <p class="text-h5 font-weight-bold">{{ $t("__functions") }}</p>
              <router-link :to="{ name: 'Home' }" class="white--text">{{
                $t("__services")
              }}</router-link>
            </v-col>
            <v-col cols="4"
              ><p class="text-h5 font-weight-bold">擴充模組</p>
              <router-link :to="{ name: 'Home' }" class="white--text"
                >Telegram安裝</router-link
              ></v-col
            >
            <v-col cols="4"
              ><p class="text-h5 font-weight-bold">
                {{ $t("__more_resources") }}
              </p>
              <div class="d-flex flex-column">
                <router-link :to="{ name: 'Home' }" class="white--text">{{
                  $t("__store_lecture")
                }}</router-link>
                <router-link :to="{ name: 'Home' }" class="white--text">{{
                  $t("__blog")
                }}</router-link>
                <router-link :to="{ name: 'Home' }" class="white--text">{{
                  $t("__recommend_article")
                }}</router-link>
                <router-link :to="{ name: 'Home' }" class="white--text">{{
                  $t("__corporation")
                }}</router-link>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <v-row justify="center">
            <v-col sm="6" lg="4">
              <strong>Copyright &copy; </strong>
              {{ new Date().getFullYear() }} —
              <strong>{{ $t("__chia_copyright") }}</strong>
            </v-col>
            <v-col cols="4" class="hidden-md-and-down"></v-col>
            <v-col sm="6" lg="4">
              <router-link class="white--text mr-3" :to="{ name: 'Home' }">{{
                $t("__terms_of_services")
              }}</router-link>
              <router-link class="white--text" :to="{ name: 'Home' }">{{
                $t("__privacy_policy")
              }}</router-link>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        { name: "mdi-facebook", link: "https://www.facebook.com/chiarobot" },
        { name: "mdi-telegram", link: "https://t.me/chia_market" },
        { name: "mdi-instagram", link: "#" }
      ]
    };
  }
};
</script>
