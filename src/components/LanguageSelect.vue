<template>
  <div class="language-selector">
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-btn text
          v-bind="attrs"
          v-on="{ ...menu }"
          :small="isMobile">
          <v-icon :left="!isMobile">mdi-translate</v-icon>
          <template v-if="!isMobile">
            {{ $t("__languagename") }}
            <v-icon right>mdi-menu-down</v-icon>
          </template>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in localeOptions"
          :key="index"
          @click="setLocale(index)">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setLocale(index){
      const locale = this.localeOptions[index].value
      this.$i18n.locale = locale
      localStorage.locale = locale
    }
  },
  data() {
    return {
      localeOptions: this.$i18n.availableLocaleOptions
    }
  }
}
</script>