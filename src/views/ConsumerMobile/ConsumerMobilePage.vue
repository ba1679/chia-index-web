<template>
  <div>
    <transition name="mobile-router">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "ConsumerMobile"
};
</script>
<style lang="scss" scoped>
.mobile-router-enter {
  transform: translateX(50%);
}
.mobile-router-enter-active {
  transition: all 0.5s;
}
.mobile-router-enter-to {
  transform: translateX(0);
}
.mobile-router-leave {
  transform: translateX(-30%);
}
.mobile-router-leave-active {
  transition: all 0.5s;
}
.mobile-router-leave-to {
  transform: translateX(-100%);
}
</style>
