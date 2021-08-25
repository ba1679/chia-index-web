<template>
  <div>
    <v-sheet
      class="pa-2 d-flex align-center"
      :class="{ 'justify-space-around': actionText }"
    >
      <router-link :to="backPath">
        <v-icon>mdi-chevron-left</v-icon>
        回上頁
      </router-link>
      <div class="text-h6 ml-5">
        {{ title }}
      </div>
      <v-btn text color="primary" v-if="actionText" @click="action">{{
        actionText
      }}</v-btn>
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
    },
    actionText: {
      type: String
    }
  },
  methods: {
    action() {
      this.$emit("action");
    }
  }
};
</script>
<style lang="scss" scoped>
.title-center {
  width: 60%;
  text-align: center;
}
</style>
