<template>
  <div>
    <v-divider />
    <h3 class="text-h4 text-center py-3">服務方案</h3>
    <v-divider />
    <v-row justify="center" class="mt-3">
      <v-col :cols="isMobile ? 12 : 5" class="text-center">
        <v-btn-toggle
          v-model="serviceSelect"
          background-color="white"
          color="primary"
        >
          <v-btn
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.data.name }}
          </v-btn>
        </v-btn-toggle>
        <v-btn
          color="primary"
          small
          text
          class="ml-2"
          @click="toStoreTelegramBot"
          >{{ $t("__service__store_info_more_service") }}</v-btn
        >
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        :cols="isMobile ? 12 : 3"
        v-for="item in categoryItems"
        :key="item.id"
      >
        <v-card flat>
          <v-card-title class="justify-center">{{
            item.data.name
          }}</v-card-title>
          <v-card-text class="text-center">
            <p v-html="item.data.introduction"></p>
          </v-card-text>
          <v-card-actions>
            <v-btn block dark color="primary" @click="toStoreTelegramBot">{{
              $t("__service__store_info_go_book")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ProjectIntro",
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      categories: "store/categories",
      categoryItems: "store/categoryItems"
    })
  },
  data() {
    return {
      serviceSelect: null,
      categoryItemsData: []
    };
  },
  methods: {
    loadCategoryAllItems() {
      return this.$store
        .dispatch("store/getStoreCategoryAllItemIDs", this.serviceSelect)
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    },
    toStoreTelegramBot() {
      this.$emit("toStoreTelegramBot");
    }
  },
  watch: {
    categories: {
      immediate: true,
      handler(val) {
        if (val.length) {
          this.serviceSelect = val[0].id;
        }
      }
    },
    serviceSelect: {
      immediate: true,
      handler(val) {
        if (val) this.loadCategoryAllItems();
      }
    },
    categoryItems: {
      immediate: true,
      handler(val) {
        if (val.length > 3) {
          val.splice(3, val.length);
        }
      }
    }
  }
};
</script>
