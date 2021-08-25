<template>
  <div>
    <transition name="mobile-router">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "UserMobilePage"
};
</script>
<style lang="scss" scoped>
.mobile-router-enter-active {
  animation: coming 0.5s;
}
.mobile-router-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes coming {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
