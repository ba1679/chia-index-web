<template>
  <v-container>
    <v-sheet
      class="text-center mx-auto mb-5 py-3 rounded"
      outlined
      max-width="600px"
    >
      <div class="mb-2">{{ $t("__store_pricing_sign_up_fee") }}</div>
      <v-icon color="primary">mdi-plus-circle</v-icon>
      <div class="mt-2">{{ $t("__store_pricing_other_fee") }}</div>
    </v-sheet>
    <v-row justify="center">
      <v-col
        :cols="isMobile ? 6 : 3"
        v-for="data in payAsYouGoDatas"
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
              {{ $t("__store_pricing_business") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_platform") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoPlatformTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_online_pay") }}
            </th>
          </tr>
          <tr>
            <th colspan="3" class="text-center text-md-subtitle-1">
              {{ $t("__store_pricing_no_online_pay") }}
            </th>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_payment") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoPaymentTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_shipping") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoShippingTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_consumer_web") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoConsumerWebTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_store_manage") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoStoreManageTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_sales_setting") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoSalesSettingTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_ad_manage") }}
            </th>
          </tr>
          <tr>
            <th colspan="3" class="text-center text-md-subtitle-1">
              {{ $t("__store_pricing_no_ad_manage") }}
            </th>
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_analysis") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoStoreAnalysisTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_telegram_bot") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoTelegramBotTable" :key="item.feature">
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
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PayAsYouGo",
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      payAsYouGoDatas: [
        {
          badge: this.$t("__store_pricing_newbie_level"),
          icon: "mdi-account",
          type: this.$t("__store_pricing_individual"),
          text: this.$t("__store_pricing_individual_suitable")
        },
        {
          badge: this.$t("__store_pricing_normal_level"),
          icon: "mdi-store",
          type: this.$t("__store_pricing_business"),
          text: this.$t("__store_pricing_business_suitable")
        }
      ],
      payAsYouGoPlatformTable: [
        {
          feature: this.$t("__store_pricing_platform_store_manage"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_platform_chat_store"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_platform_chia_entry"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_platform_chia_entry_AD"),
          individual: this.$t("__store_pricing_platform_chia_entry_AD_text"),
          business: this.$t("__store_pricing_platform_chia_entry_AD_text")
        },
        {
          feature: this.$t("__store_pricing_platform_chat_marketing"),
          individual: this.$t("__store_pricing_platform_chat_marketing_retail"),
          business: this.$t(
            "__store_pricing_platform_chat_marketing_retail_live"
          )
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_web"),
          individual: this.$t("__store_pricing_platform_one_page_web_chia"),
          business: this.$t("__store_pricing_platform_one_page_web_chia")
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_web_independent"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_platform_one_page_store"),
          individual: this.$t("__store_pricing_platform_one_page_web_chia"),
          business: this.$t("__store_pricing_platform_one_page_web_chia")
        },
        {
          feature: this.$t(
            "__store_pricing_platform_one_page_store_independent"
          ),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_platform_chia_domain"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_platform_transaction_fees"),
          individual: "5%~3%",
          business: "5%~3%"
        }
      ],
      payAsYouGoPaymentTable: [
        {
          feature: this.$t("__store_pricing_cash"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_mobile_payment"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_ATM"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_cash_on_delivery"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_bar_code"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_cash_on_delivery"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_credit_card"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_credit_card_installment"),
          individual: false,
          business: false
        }
      ],
      payAsYouGoShippingTable: [
        {
          feature: this.$t("__store_pricing_shipping_post_office"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_shipping_custom"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_shipping_store_to_store"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_shipping_virtual_item"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_shipping_search_web"),
          individual: true,
          business: true
        }
      ],
      payAsYouGoConsumerWebTable: [
        {
          feature: this.$t("__store_pricing_consumer_web_languages"),
          individual: this.$t("__store_pricing_consumer_web_languages_ch_en"),
          business: this.$t("__store_pricing_consumer_web_languages_ch_en")
        },
        {
          feature: this.$t("__store_pricing_consumer_web_RWD"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_live_video"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_one_page_web_item"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_promotions"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_chia_entry_search"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_chia_entry_AD"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_consumer_web_telegram_store"),
          individual: true,
          business: true
        }
      ],
      payAsYouGoStoreManageTable: [
        {
          feature: this.$t("__store_pricing_store_manage_telegram_login"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_publish_item"),
          individual:
            100 +
            " " +
            this.$t("__store_pricing_store_manage_publish_item_num"),
          business:
            300 + " " + this.$t("__store_pricing_store_manage_publish_item_num")
        },
        {
          feature: this.$t("__store_pricing_store_manage_RWD"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_multiple_manage"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_manage_promotions_notify"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_SSL"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_backend"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_manage_hide_detail"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_item_setting"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_auto_tracking"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_manage_SEO"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_store_manage_customer_service"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_manage_e-invoice"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_store_manage_order_notify"),
          individual: this.$t(
            "__store_pricing_store_manage_order_notify_SMS_email"
          ),
          business: this.$t(
            "__store_pricing_store_manage_order_notify_SMS_email"
          )
        }
      ],
      payAsYouGoSalesSettingTable: [
        {
          feature: this.$t("__store_pricing_sales_setting_member_level"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_time"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_choose"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_set"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_free_shipping"),
          individual: true,
          business: true
        },
        {
          feature: this.$t(
            "__store_pricing_sales_setting_free_shipping_over_price"
          ),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_gift"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_discount"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_sales_setting_addition"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_limited_time"),
          individual: false,
          business: false
        },
        {
          feature: this.$t("__store_pricing_sales_setting_coupon"),
          individual: false,
          business: false
        }
      ],
      payAsYouGoStoreAnalysisTable: [
        {
          feature: this.$t("__store_pricing_analysis_product_sales"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_analysis_revenue"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_analysis_average"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_analysis_custom"),
          individual: true,
          business: true
        }
      ],
      payAsYouGoTelegramBotTable: [
        {
          feature: this.$t("__store_pricing_telegram_bot_subscription"),
          individual: 500,
          business: 500
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_Q&A"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_promotion_notify"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_questionnaire"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_lottery"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_daliy_check_in"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_point"),
          individual: true,
          business: true
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_booking_catering"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_booking_hotel"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot__booking_service"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_group_buying"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_item_pre-sale"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_live_selling"),
          individual: this.$t("__store_pricing_telegram_bot_price"),
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_item_search"),
          individual: false,
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_tel_customer_service"),
          individual: false,
          business: this.$t("__store_pricing_telegram_bot_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_SMS_service"),
          individual: this.$t("__store_pricing_telegram_bot_SMS_price"),
          business: this.$t("__store_pricing_telegram_bot_SMS_price")
        },
        {
          feature: this.$t("__store_pricing_telegram_bot_data_fee"),
          individual: this.$t("__store_pricing_dollar") + 0,
          business: this.$t("__store_pricing_dollar") + 0
        }
      ]
    };
  }
};
</script>
