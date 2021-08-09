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
              {{ $t("__store_pricing_personal") }}
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
              商店後台管理系統
            </th>
          </tr>
          <tr v-for="item in monthlyStoreManageTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
              優惠設定
            </th>
          </tr>
          <tr v-for="item in monthlySalesSettingTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
              {{ $t("__store_pricing_telegram_bod") }}
            </th>
          </tr>
          <tr v-for="item in monthlyTelegramBotTable" :key="item.feature">
            <th class="text-md-subtitle-1">{{ item.feature }}</th>
            <td v-if="item.personal === true">
              <v-icon color="primary">mdi-check-bold</v-icon>
            </td>
            <td v-else-if="item.personal === false">
              <v-icon>mdi-close-thick</v-icon>
            </td>
            <td v-else>{{ item.personal }}</td>
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
          type: "個人賣家",
          text: "資深個人賣家，月銷售額 20 萬以下",
          yearPlanPrice: 72000,
          yearPlanDiscount: 30000,
          monthPlanPrice: 6000,
          monthPlanDiscount: 3000
        },
        {
          badge: this.$t("__store_pricing_silver_level"),
          icon: "mdi-store",
          type: "商業賣家",
          text: "有統編之一般經營賣家，月銷售額 20 萬以上",
          yearPlanPrice: 180000,
          yearPlanDiscount: 72000,
          monthPlanPrice: 15000,
          monthPlanDiscount: 7500
        },
        {
          badge: this.$t("__store_pricing_gold_level"),
          icon: "mdi-office-building-outline",
          type: "商業賣家",
          text: "有統編之大型/國際賣家，有客製化需求",
          yearPlanPrice: 180000,
          yearPlanDiscount: 72000,
          monthPlanPrice: 15000,
          monthPlanDiscount: 7500
        }
      ],
      monthlyPlatformTable: [
        {
          feature: "商店後台管理系統",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "聊天室商店",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "chia入口網站攤位",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "chia入口網站廣告露出",
          personal: "依chia活動方案",
          business: "依chia活動方案",
          international: "依chia活動方案"
        },
        {
          feature: "聊天式行業行銷工具telegram 商店模組",
          personal: "零售/餐飲/直播",
          business: "零售/餐飲/服務/直播",
          international: ""
        },
        {
          feature: "一頁式網站首頁",
          personal: "有chia框架",
          business: "有chia框架",
          international: "有chia框架"
        },
        {
          feature: "(獨立)一頁式網站首頁",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "一頁式商店",
          personal: "有chia框架",
          business: "有chia框架",
          international: "有chia框架"
        },
        {
          feature: "(獨立)一頁式商店",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "chia網域網址",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "交易手續費(銷售額越高，手續費越低)",
          personal: "3%~1%",
          business: "2%~1%",
          international: "合約訂製"
        }
      ],
      monthlyOnlinePayTable: [
        {
          feature: "Tappay",
          personal: false,
          business: true,
          international: true
        },
        {
          feature: "綠界科技",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Paypal",
          personal: false,
          business: true,
          international: true
        }
      ],
      monthlyPaymentTable: [
        {
          feature: "現金",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "行動支付 apply pay, google pay, samsung pay",
          personal: "配合第三方支付",
          business: "配合第三方支付",
          international: "配合第三方支付"
        },
        {
          feature: "ATM匯款",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "貨到付款",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "超商條碼支付",
          personal: "配合第三方支付",
          business: "配合第三方支付",
          international: "配合第三方支付"
        },
        {
          feature: "超商取貨付款",
          personal: "配合第三方支付",
          business: "配合第三方支付",
          international: "配合第三方支付"
        },
        {
          feature: "信用卡",
          personal: "配合第三方支付",
          business: "配合第三方支付",
          international: "配合第三方支付"
        },
        {
          feature: "信用卡分期",
          personal: "配合第三方支付",
          business: "配合第三方支付",
          international: "配合第三方支付"
        }
      ],
      monthlyShippingTable: [
        {
          feature: "郵局",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "自訂宅配物流商",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "超商店到店",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "虛擬產品(不需運送)",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "物流查詢網址設定",
          personal: true,
          business: true,
          international: true
        }
      ],
      monthlyConsumerWebTable: [
        {
          feature: "多國語言設定",
          personal: "中文、英文",
          business: "中文、英文",
          international: "中文、英文"
        },
        {
          feature: "RWD瀏覽優化",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "直播影片串接",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "一頁式商品頁",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "優惠活動設置",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "chia入口網站搜尋",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "入口網站廣告活動",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "telegram商店",
          personal: true,
          business: true,
          international: true
        }
      ],
      monthlyStoreManageTable: [
        {
          feature: "telegram 登入",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "可上架商品數",
          personal: "無限制",
          business: "無限制",
          international: "無限制"
        },
        {
          feature: "RWD瀏覽優化 ",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "多管理員設置",
          personal: false,
          business: true,
          international: true
        },
        {
          feature: "優惠活動排程通知",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "SSL安全憑證",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "後台權限控管",
          personal: false,
          business: true,
          international: true
        },
        {
          feature: "顧客個資隱藏",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "產品設定",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "自動追單",
          personal: false,
          business: false,
          international: true
        },
        {
          feature: "SEO設定",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "客服設定",
          personal: false,
          business: true,
          international: true
        },
        {
          feature: "電子發票",
          personal: false,
          business: "配合第三方支付",
          international: "配合第三方支付"
        },
        {
          feature: "訂單通知",
          personal: "簡訊 / Email",
          business: "簡訊 / Email",
          international: "簡訊 / Email"
        }
      ],
      monthlySalesSettingTable: [
        {
          feature: "會員優惠等級",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "優惠活動時間",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "任選優惠",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "組合優惠",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "免運",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "滿額免運費",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "滿額贈",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "滿額折扣",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "加購",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "限時結帳優惠",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "優惠券(優惠碼)",
          personal: true,
          business: true,
          international: true
        }
      ],
      monthlyAdMarketingTable: [
        {
          feature: "Google Analytics",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Google Analytics EC",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Google Ads",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Google Ads 再行銷",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Google GTM 代碼管理工具",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Google Shopping Ads",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Facebook 像素",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "Facebook DPA",
          personal: true,
          business: true,
          international: true
        }
      ],
      monthlyStoreAnalysisTable: [
        {
          feature: "商品銷量統計",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "營收利潤統計",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "平均客單價統計",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "自訂區間搜尋",
          personal: true,
          business: true,
          international: true
        }
      ],
      monthlyTelegramBotTable: [
        {
          feature: "訂閱人數",
          personal: "無限制",
          business: "無限制",
          international: "無限制"
        },
        {
          feature: "Q&A 自動回覆設置(原價$1000/月)",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "優惠活動訊息發送排程推播",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "問券分眾工具(原價$1000/月)",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "抽獎工具",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "每日簽到工具",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "消費集點工具",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "訂位服務工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: "依類別提供",
          international: "依類別提供"
        },
        {
          feature: "訂房服務工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: "依類別提供",
          international: "依類別提供"
        },
        {
          feature: "預訂服務工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: "依類別提供",
          international: "依類別提供"
        },
        {
          feature: "團購收單工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: "依類別提供",
          international: "依類別提供"
        },
        {
          feature: "新品預售工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: "依類別提供",
          international: "依類別提供"
        },
        {
          feature: "直播收單工具(原價$1000/月)",
          personal: "優惠價$200/月，優惠價$2000/年",
          business: true,
          international: true
        },
        {
          feature: "商品關鍵字搜尋工具(原價$1000/月)",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "人機客務轉接(原價$1000/月)",
          personal: true,
          business: true,
          international: true
        },
        {
          feature: "簡訊服務費用(原價$1000/月)",
          personal: "每則0元",
          business: "每則0元",
          international: "每則0元"
        },
        {
          feature: "流量費",
          personal: "0元",
          business: "0元",
          international: " 0元"
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
