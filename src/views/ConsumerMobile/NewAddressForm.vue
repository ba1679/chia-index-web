<template>
  <div class="h-100">
    <MobileTopBar
      :title="$t('__add_new_receive_address')"
      :backPath="{ name: 'AddressMobile' }"
      :actionText="$t('__save')"
      @action="save"
    />
    <v-container>
      <v-form ref="form" v-model="isValid">
        <v-text-field outlined dense label="收件人姓名" required />
        <v-text-field outlined dense label="收件人電話" required type="tel" />
        <AddressInput />
      </v-form>
    </v-container>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";
import AddressInput from "@/components/AddressInput";

export default {
  name: "NewAddressForm",
  components: {
    MobileTopBar,
    AddressInput
  },
  data() {
    return {
      isValid: false
    };
  },
  methods: {
    save() {}
  }
};
</script>
