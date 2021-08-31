<template>
  <div class="h-100">
    <MobileTopBar
      :title="
        method === 'credit'
          ? $t('__add_new_payment_credit')
          : $t('__add_new_payment_bank')
      "
      :backPath="{ name: 'PaymentMobile' }"
      :actionText="$t('__save')"
      @action="save"
    />
    <v-container>
      <v-form ref="credit" v-model="creditIsValid" v-if="method === 'credit'">
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_credit_name')"
          required
        />
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_credit_num')"
          required
          type="number"
        />
        <v-select
          outlined
          dense
          :label="$t('__add_new_payment_credit_type')"
          required
        />
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_credit_expired')"
          required
          type="number"
        />
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_credit_security')"
          required
          type="number"
        />
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_credit_bill_address')"
          readonly
          type="number"
        />
      </v-form>
      <v-form ref="bank" v-model="bankIsValid" v-if="method === 'bank'">
        <!-- name -->
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_bank_fullname')"
          required
        />
        <!-- ID -->
        <v-text-field
          outlined
          dense
          :label="$t('__add_new_payment_bank_ID')"
          type="number"
          required
        />
        <!-- birthday -->
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              outlined
              dense
              v-model="date"
              :label="$t('__add_new_payment_bank_birth')"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>

          <v-date-picker
            v-model="date"
            ref="picker"
            :max="birthDayMaxDate"
            min="1950-01-01"
            :locale="$i18n.locale"
            @change="saveDate"
          ></v-date-picker>
        </v-menu>
        <!-- address -->
        <div class="text-h7">
          {{ $t("__add_new_payment_address") }}
        </div>
        <AddressInput />
      </v-form>
    </v-container>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";
import AddressInput from "@/components/AddressInput";
import { format } from "date-fns";

export default {
  name: "NewPaymentForm",
  components: {
    MobileTopBar,
    AddressInput
  },
  computed: {
    birthDayMaxDate() {
      let date = format(new Date(), "yyyy-MM-dd");
      return date;
    }
  },
  data() {
    return {
      creditIsValid: false,
      bankIsValid: false,
      method: "",
      date: null,
      menu: false
    };
  },
  methods: {
    save() {},
    saveDate(date) {
      this.$refs.menu.save(date);
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  created() {
    this.method = this.$route.params.method;
  }
};
</script>
