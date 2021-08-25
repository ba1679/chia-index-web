<template>
  <div class="app-bar">
    <!-- top bar -->
    <v-system-bar
      height="50px"
      color="primary"
      dark
      elevation="0"
      class="hidden-sm-and-down"
    >
      <ul class="d-flex list-style-none pl-2">
        <li class="mr-2">
          <a href="https://store.chia-market.com/" target="_blank">{{
            $t("__store_backend_management")
          }}</a>
        </li>
        |
        <li class="mx-2">
          <router-link :to="{ name: 'Pricing' }">{{
            $t("__store_pricing")
          }}</router-link>
        </li>
        |
        <li class="ml-2 d-flex aligin-center">
          {{ $t("__follow_us") }}
          <a
            class="px-1"
            href="https://www.facebook.com/chiarobot"
            target="_blank"
            ><v-icon>mdi-facebook</v-icon></a
          >
          <a class="pr-1" href="https://t.me/chia_market" target="_blank"
            ><v-icon>mdi-telegram</v-icon></a
          >
          <a class="pr-1" href="#"><v-icon>mdi-instagram</v-icon></a>
        </li>
      </ul>
      <v-spacer></v-spacer>
      <ul class="d-flex align-center">
        <li>
          <v-menu
            open-on-hover
            down
            offset-y
            min-width="300px"
            nudge-left="80"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text dark v-bind="attrs" v-on="on">
                <v-icon class="pr-1">mdi-bell-outline</v-icon
                >{{ $t("__notifications") }}
              </v-btn>
            </template>

            <v-sheet min-height="200px" class="text-center">
              {{ $t("__no_notification") }}
            </v-sheet>
          </v-menu>
        </li>
        <li>
          <v-btn text dark class="pr-2"
            ><v-icon class="pr-1">mdi-comment-question-outline</v-icon
            >{{ $t("__helping_center") }}</v-btn
          >
        </li>
        <li>
          <LanguageSelect />
        </li>
      </ul>
      <v-btn text @click="toSignUp"> {{ $t("__register") }} </v-btn> |
      <v-btn text @click="toSignIn">
        {{ $t("__sign_in") }}
      </v-btn>
    </v-system-bar>
    <!-- search bar -->
    <v-app-bar :height="barHeight" color="primary" dark elevation="0">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-row dense :class="{ 'flex-column': isMobile }">
        <v-col md="1" sm="6">
          <v-toolbar-title class="headline mr-3">
            <router-link
              class="d-flex justify-center"
              :to="{ name: 'SalesHome' }"
            >
              <v-img
                alt="Logo"
                class="shrink mr-2"
                contain
                :src="require('@/assets/logo.svg')"
                width="36"
              />
              <span>{{ $t("__title") }}</span>
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-col md="11" sm="12">
          <div class="d-flex flex-column">
            <v-text-field
              :label="$t('__search_store')"
              dense
              outlined
              full-width
              hide-details
              append-icon="mdi-card-search-outline"
              background-color="white"
              light
              color="primary"
              @click:append="search"
            ></v-text-field>
            <p class="mb-0 pt-1">
              {{ $t("__hot_keywords") }}: 防疫用品、酒精、泡麵、冷凍食品
            </p>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <!--mobile side bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list nav dense expand>
        <template v-for="(item, i) in items">
          <template v-if="item.to">
            <v-list-item :key="i" :to="item.to" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-group no-action :key="i">
              <template v-slot:activator>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </template>
              <v-list-group
                no-action
                sub-group
                v-for="child in item.childs"
                :key="child.title"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item :key="i" link>
                  <v-list-item-title v-text="123"></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </template>
          <v-divider :key="`${i}-divider`" />
        </template>
        <v-list-item
          link
          href="https://apply.chia-market.com/sign-up"
          target="_blank"
        >
          <v-list-item-title>
            {{ $t("__register") }}
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item link href="https://store.chia-market.com/" target="_blank">
          <v-list-item-title>
            {{ $t("__store_backend_management") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="https://www.facebook.com/chiarobot/" class="mr-2">
              <v-icon color="primary">mdi-facebook</v-icon>
            </a>
            <a href="https://t.me/chia_market" class="mr-2">
              <v-icon color="primary">mdi-telegram</v-icon>
            </a>
            <a href="#" class="mr-2">
              <v-icon color="primary">mdi-instagram</v-icon>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <LanguageSelect />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <vue-telegram-login
      mode="redirect"
      telegram-login="chiamarket_bot"
      redirect-url="https://www.chia-market.com/"
    /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LanguageSelect from "./LanguageSelect";
// import { vueTelegramLogin } from "vue-telegram-login";

export default {
  name: "Navbar",
  components: {
    LanguageSelect
    // vueTelegramLogin
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    }),
    barHeight() {
      if (this.isMobile) {
        return "150px";
      } else {
        return "100px";
      }
    }
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          title: this.$t("__categories"),
          childs: [
            {
              title: "分類1",
              to: { name: "SalesHome" }
            },
            {
              title: "分類2",
              to: { name: "SalesHome" }
            },
            {
              title: "分類3",
              to: { name: "SalesHome" }
            }
          ]
        },
        {
          title: this.$t("__sign_in"),
          to: { name: "userAccountMobile" }
        }
      ]
    };
  },
  methods: {
    search() {},
    toSignUp() {
      window.location.replace("https://apply.chia-market.com/sign-up");
    },
    toSignIn() {
      this.$router.push({ name: "UserProfileForm" });
    }
  }
};
</script>

<style scoped>
.v-system-bar a,
.v-toolbar__title a {
  color: #fff;
  text-decoration: none;
}
</style>
