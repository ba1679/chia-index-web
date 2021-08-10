<template>
  <div class="pricing">
    <section class="pricing-header">
      <h1 class="text-md-h3 font-weight-bold">
        {{ $t("__store_pricing_title") }}
      </h1>
      <div class="pricing-tab-switch">
        <div
          class="switch-tab-btn"
          :class="{ 'btn-active': currentTab === 'payAsYouGo' }"
          @click="currentTab = 'payAsYouGo'"
        >
          {{ $t("__store_pricing_pay_as_you_go") }}
        </div>
        <div
          class="switch-tab-btn"
          :class="{ 'btn-active': currentTab === 'month' }"
          @click="currentTab = 'month'"
        >
          {{ $t("__store_pricing_month") }}
        </div>
      </div>
    </section>
    <PayAsYouGo v-show="currentTab === 'payAsYouGo'" />
    <Monthly v-show="currentTab === 'month'" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PayAsYouGo from "@/components/pricing/PayAsYouGo";
import Monthly from "@/components/pricing/Monthly";

export default {
  name: "Pricing",
  components: {
    PayAsYouGo,
    Monthly
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      currentTab: "payAsYouGo"
    };
  }
};
</script>
<style lang="scss">
.pricing {
  background-color: #f4f5f7;
}
.pricing-header {
  background-color: #90e0ef;
  text-align: center;
  padding: 80px 0;
  position: relative;
}
.pricing-tab-switch {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  .switch-tab-btn {
    background-color: #f4f5f7;
    padding: 10px 50px;
    cursor: pointer;
    &:first-child {
      border-top-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
    }
  }
  .btn-active {
    background-color: #0071bc;
    color: #fff;
  }
}
.card-badge {
  position: absolute;
  background: orange;
  color: #fff;
  left: -10px;
  border-radius: 5px;
  top: -5px;
  padding: 5px;
}
.tbody-header:hover {
  background-color: #0071bc !important;
}
</style>
