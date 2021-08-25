<template>
  <div>
    <v-sheet class="pa-2 d-flex align-center">
      <router-link :to="backPath">
        <v-icon>mdi-chevron-left</v-icon>
        回上頁
      </router-link>
      <div class="text-h6 title-center">
        {{ title }}
      </div>
    </v-sheet>
    <v-divider />
  </div>
</template>
<script>
export default {
  name: "MobileTopBar",
  props: {
    title: {
      type: String
    },
    backPath: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.title-center {
  width: 65%;
  text-align: center;
}
</style>
