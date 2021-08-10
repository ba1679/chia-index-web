<template>
  <v-container>
    <v-radio-group v-model="pricePlan" row hide-details class="plan mb-5">
      <v-radio :label="$t('__store_pricing_monthly')" value="monthly" />
      <v-radio :label="$t('__store_pricing_year')" value="year" />
    </v-radio-group>
    <v-row justify="center">
      <v-col
        :cols="isMobile ? 10 : 3"
        v-for="data in monthlyDatas"
        :key="data.icon"
      >
        <v-card outlined height="100%" class="d-flex flex-column relative">
          <div class="card-badge">
            {{ data.badge }}
          </div>
          <v-card-text class="d-flex flex-column text-center">
            <v-icon x-large color="primary">
              {{ data.icon }}
            </v-icon>
            <div class="text-h5 black--text">{{ data.type }}</div>
            <div class="text-subtitle-1">{{ data.text }}</div>
            <div class="text-subtitle-1 text-decoration-line-through">
              {{
                pricePlan === "monthly"
                  ? data.monthPlanPrice
                  : data.yearPlanPrice | currency
              }}
            </div>
            <div class="text-h4 font-weight-bold orange--text">
              {{
                pricePlan === "monthly"
                  ? data.monthPlanDiscount
                  : data.yearPlanDiscount | currency
              }}
            </div>
          </v-card-text>
          <v-card-actions class="mt-auto">
            <v-btn rounded block max-width="150" color="primary">{{
              $t("__store_pricing_contact_service")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-md-h4 text-center my-5">
      {{ $t("__store_pricing_function") }}
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th></th>
            <th class="text-left text-md-h5 font-weight-bold">
              {{ $t("__store_pricing_individual") }}
            </th>
            <th class="text-left text-md-h5 font-weight-bold">
              {{ $t("__store_pricing_normal_business") }}
            </th>
            <th class="text-left text-md-h5 font-weight-bold">
              {{ $t("__store_pricing_large_business") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_platform") }}
            </th>
          </tr>
          <tr v-for="item in monthlyPlatformTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_online_pay") }}
            </th>
          </tr>
          <tr v-for="item in monthlyOnlinePayTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_payment") }}
            </th>
          </tr>
          <tr v-for="item in monthlyPaymentTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_shipping") }}
            </th>
          </tr>
          <tr v-for="item in monthlyShippingTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_consumer_web") }}
            </th>
          </tr>
          <tr v-for="item in monthlyConsumerWebTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_store_manage") }}
            </th>
          </tr>
          <tr v-for="item in monthlyStoreManageTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_sales_setting") }}
            </th>
          </tr>
          <tr v-for="item in monthlySalesSettingTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_ad_manage") }}
            </th>
          </tr>
          <tr v-for="item in monthlyAdMarketingTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_analysis") }}
            </th>
          </tr>
          <tr v-for="item in monthlyStoreAnalysisTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="4" class="text-md-subtitle-1">
              {{ $t("__store_pricing_telegram_bot") }}
            </th>
          </tr>
          <tr v-for="item in monthlyTelegramBotTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.individual === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.individual === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.individual }}</td>
            <td v-if="item.business === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.business === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.business }}</td>
            <td v-if="item.international === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.international === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.international }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Monthly",
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      pricePlan: "monthly",
      monthlyDatas: [
        {
          badge: this.$t("__store_pricing_bronze_level"),
          icon: "mdi-account",
          type: this.$t("__store_pricing_individual"),
          text: this.$t("__store_pricing_senior_individual_suitable"),
          yearPlanPrice: 72000,
          yearPlanDiscount: 30000,
          monthPlanPrice: 6000,
          monthPlanDiscount: 3000
        },
        {
          badge: this.$t("__store_pricing_silver_level"),
          icon: "mdi-store",
          type: this.$t("__store_pricing_business"),
          text: this.$t("__store_pricing_normal_business_suitable"),
          yearPlanPrice: 180000,
          yearPlanDiscount: 72000,
          monthPlanPrice: 15000,
          monthPlanDiscount: 7500
        },
        {
          badge: this.$t("__store_pricing_gold_level"),
          icon: "mdi-office-building-outline",
          type: this.$t("__store_pricing_business"),
          text: this.$t("__store_pricing_large_business_suitable"),
          yearPlanPrice: 180000,
          yearPlanDiscount: 72000,
          monthPlanPrice: 15000,
          monthPlanDiscount: 7500
        }
      ],
      monthlyPlatformTable: [
        {
          feature: this.$t("__store_pricing_platform_store_manage"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_chat_store"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_chia_entry"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_chia_entry_AD"),
          individual: this.$t("__store_pricing_platform_chia_entry_AD_text"),
          business: this.$t("__store_pricing_platform_chia_entry_AD_text"),
          international: this.$t("__store_pricing_platform_chia_entry_AD_text")
        },
        {
          feature: this.$t("__store_pricing_platform_chat_marketing"),
          individual: this.$t(
            "__store_pricing_platform_chat_marketing_retail_catering_live"
          ),
          business: this.$t(
            "__store_pricing_platform_chat_marketing_retail_catering_live_service"
          ),
          international: ""
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_web"),
          individual: this.$t("__store_pricing_platform_one_page_web_chia"),
          business: this.$t("__store_pricing_platform_one_page_web_chia"),
          international: this.$t("__store_pricing_platform_one_page_web_chia")
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_web_independent"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_store"),
          individual: this.$t("__store_pricing_platform_one_page_web_chia"),
          business: this.$t("__store_pricing_platform_one_page_web_chia"),
          international: this.$t("__store_pricing_platform_one_page_web_chia")
        },
        {
          feature: this.$t(
            "__store_pricing_platform_one_page_store_independent"
          ),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_chia_domain"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_platform_transaction_fees"),
          individual: "3%~1%",
          business: "2%~1%",
          international: this.$t(
            "__store_pricing_platform_transaction_fees_contract"
          )
        }
      ],
      monthlyOnlinePayTable: [
        {
          feature: this.$t("__store_pricing_tappay"),
          individual: false,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ecpay"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_paypal"),
          individual: false,
          business: true,
          international: true
        }
      ],
      monthlyPaymentTable: [
        {
          feature: this.$t("__store_pricing_cash"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_mobile_payment"),
          individual: this.$t("__store_pricing_third_party"),
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        },
        {
          feature: this.$t("__store_pricing_ATM"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_cash_on_delivery"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_bar_code"),
          individual: this.$t("__store_pricing_third_party"),
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        },
        {
          feature: this.$t("__store_pricing_store_cash_on_delivery"),
          individual: this.$t("__store_pricing_third_party"),
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        },
        {
          feature: this.$t("__store_pricing_credit_card"),
          individual: this.$t("__store_pricing_third_party"),
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        },
        {
          feature: this.$t("__store_pricing_credit_card_installment"),
          individual: this.$t("__store_pricing_third_party"),
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        }
      ],
      monthlyShippingTable: [
        {
          feature: this.$t("__store_pricing_shipping_post_office"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_shipping_custom"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_shipping_store_to_store"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_shipping_virtual_item"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_shipping_search_web"),
          individual: true,
          business: true,
          international: true
        }
      ],
      monthlyConsumerWebTable: [
        {
          feature: this.$t("__store_pricing_consumer_web_languages"),
          individual: this.$t("__store_pricing_consumer_web_languages_ch_en"),
          business: this.$t("__store_pricing_consumer_web_languages_ch_en"),
          international: this.$t("__store_pricing_consumer_web_languages_ch_en")
        },
        {
          feature: this.$t("__store_pricing_consumer_web_RWD"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_live_video"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_one_page_web_item"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_promotions"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_chia_entry_search"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_chia_entry_AD"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_telegram_store"),
          individual: true,
          business: true,
          international: true
        }
      ],
      monthlyStoreManageTable: [
        {
          feature: this.$t("__store_pricing_store_manage_telegram_login"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_publish_item"),
          individual: this.$t(
            "__store_pricing_store_manage_publish_item_unlimited"
          ),
          business: this.$t(
            "__store_pricing_store_manage_publish_item_unlimited"
          ),
          international: this.$t(
            "__store_pricing_store_manage_publish_item_unlimited"
          )
        },
        {
          feature: this.$t("__store_pricing_store_manage_RWD"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_multiple_manage"),
          individual: false,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_promotions_notify"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_SSL"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_backend"),
          individual: false,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_hide_detail"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_item_setting"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_auto_tracking"),
          individual: false,
          business: false,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_SEO"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_customer_service"),
          individual: false,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_e-invoice"),
          individual: false,
          business: this.$t("__store_pricing_third_party"),
          international: this.$t("__store_pricing_third_party")
        },
        {
          feature: this.$t("__store_pricing_store_manage_order_notify"),
          individual: this.$t(
            "__store_pricing_store_manage_order_notify_SMS_email"
          ),
          business: this.$t(
            "__store_pricing_store_manage_order_notify_SMS_email"
          ),
          international: this.$t(
            "__store_pricing_store_manage_order_notify_SMS_email"
          )
        }
      ],
      monthlySalesSettingTable: [
        {
          feature: this.$t("__store_pricing_sales_setting_member_level"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_time"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_choose"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_set"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_free_shipping"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t(
            "__store_pricing_sales_setting_free_shipping_over_price"
          ),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_gift"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_discount"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_addition"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_limited_time"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_coupon"),
          individual: true,
          business: true,
          international: true
        }
      ],
      monthlyAdMarketingTable: [
        {
          feature: this.$t("__store_pricing_ad_manage_google_analytics"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_google_analytics_EC"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_google_ads"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_google_ads_remarketing"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_google_GTM"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_google_shopping_ads"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_facebook"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_ad_manage_facebook_DPA"),
          individual: true,
          business: true,
          international: true
        }
      ],
      monthlyStoreAnalysisTable: [
        {
          feature: this.$t("__store_pricing_analysis_product_sales"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_analysis_revenue"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_analysis_average"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_analysis_custom"),
          individual: true,
          business: true,
          international: true
        }
      ],
      monthlyTelegramBotTable: [
        {
          feature: this.$t("__store_pricing_telegram_bot_subscription"),
          individual: this.$t(
            "__store_pricing_telegram_bot_subscription_unlimited"
          ),
          business: this.$t(
            "__store_pricing_telegram_bot_subscription_unlimited"
          ),
          international: this.$t(
            "__store_pricing_telegram_bot_subscription_unlimited"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_Q&A"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_promotion_notify"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_questionnaire"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_lottery"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_daliy_check_in"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_point"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_booking_catering"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_catering_special"
          ),
          business: this.$t("__store_pricing_telegram_bot_booking_category"),
          international: this.$t(
            "__store_pricing_telegram_bot_booking_category"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_booking_hotel"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_hotel_special"
          ),
          business: this.$t("__store_pricing_telegram_bot_booking_category"),
          international: this.$t(
            "__store_pricing_telegram_bot_booking_category"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot__booking_service"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_service_special"
          ),
          business: this.$t("__store_pricing_telegram_bot_booking_category"),
          international: this.$t(
            "__store_pricing_telegram_bot_booking_category"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_group_buying"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_group_special"
          ),
          business: this.$t("__store_pricing_telegram_bot_booking_category"),
          international: this.$t(
            "__store_pricing_telegram_bot_booking_category"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_item_pre-sale"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_pre-sale_special"
          ),
          business: this.$t("__store_pricing_telegram_bot_booking_category"),
          international: this.$t(
            "__store_pricing_telegram_bot_booking_category"
          )
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_live_selling"),
          individual: this.$t(
            "__store_pricing_telegram_bot_booking_live_selling_special"
          ),
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_item_search"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_tel_customer_service"),
          individual: true,
          business: true,
          international: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_SMS_service"),
          individual: this.$t("__store_pricing_telegram_bot_SMS_price"),
          business: this.$t("__store_pricing_telegram_bot_SMS_price"),
          international: this.$t("__store_pricing_telegram_bot_SMS_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_data_fee"),
          individual: this.$t("__store_pricing_dollar") + 0,
          business: this.$t("__store_pricing_dollar") + 0,
          international: this.$t("__store_pricing_dollar") + 0
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.plan {
  width: 160px;
  margin: 0 auto;
}
</style>
