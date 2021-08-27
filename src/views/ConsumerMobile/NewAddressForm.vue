<template>
  <div>
    <MobileTopBar
      :title="'新增收件地址'"
      :backPath="{ name: 'AddressMobile' }"
      :actionText="'儲存'"
      @action="save"
    />
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";

export default {
  name: "NewAddressForm",
  components: {
    MobileTopBar
  },
  data() {
    return {};
  }
};
</script>
