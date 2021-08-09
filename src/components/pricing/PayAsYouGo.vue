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
              {{ $t("__store_pricing_personal") }}
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_shipping") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoShippingTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_consumer_web") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoConsumerWebTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              商店後台管理系統
            </th>
          </tr>
          <tr v-for="item in payAsYouGoStoreManageTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              優惠設定
            </th>
          </tr>
          <tr v-for="item in payAsYouGoSalesSettingTable" :key="item.feature">
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
          </tr>
          <tr class="bg-primary white--text tbody-header">
            <th colspan="3" class="text-md-subtitle-1">
              {{ $t("__store_pricing_telegram_bod") }}
            </th>
          </tr>
          <tr v-for="item in payAsYouGoTelegramBotTable" :key="item.feature">
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
          type: "個人賣家",
          text: "新手賣家，小資經營"
        },
        {
          badge: this.$t("__store_pricing_normal_level"),
          icon: "mdi-store",
          type: "商業賣家",
          text: "有統編之小本經營賣家，月銷售額 20 萬以下"
        }
      ],
      payAsYouGoPlatformTable: [
        {
          feature: "商店後台管理系統",
          personal: true,
          business: true
        },
        {
          feature: "聊天室商店",
          personal: true,
          business: true
        },
        {
          feature: "chia入口網站攤位",
          personal: true,
          business: true
        },
        {
          feature: "chia入口網站廣告露出",
          personal: "依chia活動方案",
          business: "依chia活動方案"
        },
        {
          feature: "聊天式行業行銷工具telegram 商店模組",
          personal: "零售模組",
          business: "零售/直播"
        },
        {
          feature: "一頁式網站首頁",
          personal: "有chia框架",
          business: "有chia框架"
        },
        {
          feature: "(獨立)一頁式網站首頁",
          personal: false,
          business: false
        },
        {
          feature: "一頁式商店",
          personal: "有chia框架",
          business: "有chia框架"
        },
        {
          feature: "(獨立)一頁式商店",
          personal: false,
          business: false
        },
        {
          feature: "chia網域網址",
          personal: true,
          business: true
        },
        {
          feature: "交易手續費(銷售額越高，手續費越低)",
          personal: "5%~3%",
          business: "5%~3%"
        }
      ],
      payAsYouGoPaymentTable: [
        {
          feature: "現金",
          personal: true,
          business: true
        },
        {
          feature: "行動支付 apply pay, google pay, samsung pay",
          personal: false,
          business: false
        },
        {
          feature: "ATM匯款",
          personal: true,
          business: true
        },
        {
          feature: "貨到付款",
          personal: true,
          business: true
        },
        {
          feature: "超商條碼支付",
          personal: false,
          business: false
        },
        {
          feature: "超商取貨付款",
          personal: false,
          business: false
        },
        {
          feature: "信用卡",
          personal: false,
          business: false
        },
        {
          feature: "信用卡分期",
          personal: false,
          business: false
        }
      ],
      payAsYouGoShippingTable: [
        {
          feature: "郵局",
          personal: true,
          business: true
        },
        {
          feature: "自訂宅配物流商",
          personal: true,
          business: true
        },
        {
          feature: "超商店到店",
          personal: false,
          business: false
        },
        {
          feature: "虛擬產品(不需運送)",
          personal: true,
          business: true
        },
        {
          feature: "物流查詢網址設定",
          personal: true,
          business: true
        }
      ],
      payAsYouGoConsumerWebTable: [
        {
          feature: "多國語言設定",
          personal: "中文、英文",
          business: "中文、英文"
        },
        {
          feature: "RWD瀏覽優化",
          personal: true,
          business: true
        },
        {
          feature: "直播影片串接",
          personal: true,
          business: true
        },
        {
          feature: "一頁式商品頁",
          personal: true,
          business: true
        },
        {
          feature: "優惠活動設置",
          personal: true,
          business: true
        },
        {
          feature: "chia入口網站搜尋",
          personal: true,
          business: true
        },
        {
          feature: "入口網站廣告活動",
          personal: true,
          business: true
        },
        {
          feature: "telegram商店",
          personal: true,
          business: true
        }
      ],
      payAsYouGoStoreManageTable: [
        {
          feature: "telegram 登入",
          personal: true,
          business: true
        },
        {
          feature: "可上架商品數",
          personal: "100項",
          business: "300項"
        },
        {
          feature: "RWD瀏覽優化 ",
          personal: true,
          business: true
        },
        {
          feature: "多管理員設置",
          personal: false,
          business: false
        },
        {
          feature: "優惠活動排程通知",
          personal: true,
          business: true
        },
        {
          feature: "SSL安全憑證",
          personal: true,
          business: true
        },
        {
          feature: "後台權限控管",
          personal: false,
          business: false
        },
        {
          feature: "顧客個資隱藏",
          personal: true,
          business: true
        },
        {
          feature: "產品設定",
          personal: true,
          business: true
        },
        {
          feature: "自動追單",
          personal: false,
          business: false
        },
        {
          feature: "SEO設定",
          personal: true,
          business: true
        },
        {
          feature: "客服設定",
          personal: false,
          business: false
        },
        {
          feature: "電子發票",
          personal: false,
          business: false
        },
        {
          feature: "訂單通知",
          personal: "簡訊 / Email",
          business: "簡訊 / Email"
        }
      ],
      payAsYouGoSalesSettingTable: [
        {
          feature: "會員優惠等級",
          personal: false,
          business: false
        },
        {
          feature: "優惠活動時間",
          personal: true,
          business: true
        },
        {
          feature: "任選優惠",
          personal: false,
          business: false
        },
        {
          feature: "組合優惠",
          personal: false,
          business: false
        },
        {
          feature: "免運",
          personal: true,
          business: true
        },
        {
          feature: "滿額免運費",
          personal: false,
          business: false
        },
        {
          feature: "滿額贈",
          personal: false,
          business: false
        },
        {
          feature: "滿額折扣",
          personal: true,
          business: true
        },
        {
          feature: "加購",
          personal: false,
          business: false
        },
        {
          feature: "限時結帳優惠",
          personal: false,
          business: false
        },
        {
          feature: "優惠券(優惠碼)",
          personal: false,
          business: false
        }
      ],
      payAsYouGoStoreAnalysisTable: [
        {
          feature: "商品銷量統計",
          personal: true,
          business: true
        },
        {
          feature: "營收利潤統計",
          personal: true,
          business: true
        },
        {
          feature: "平均客單價統計",
          personal: true,
          business: true
        },
        {
          feature: "自訂區間搜尋",
          personal: true,
          business: true
        }
      ],
      payAsYouGoTelegramBotTable: [
        {
          feature: "訂閱人數",
          personal: 500,
          business: 500
        },
        {
          feature: "Q&A 自動回覆設置(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "優惠活動訊息發送排程推播",
          personal: true,
          business: true
        },
        {
          feature: "問券分眾工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "抽獎工具",
          personal: true,
          business: true
        },
        {
          feature: "每日簽到工具",
          personal: true,
          business: true
        },
        {
          feature: "消費集點工具",
          personal: true,
          business: true
        },
        {
          feature: "訂位服務工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "訂房服務工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "預訂服務工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "團購收單工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "新品預售工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "直播收單工具(原價$1000/月)",
          personal: "優惠價$500/月",
          business: "優惠價$500/月"
        },
        {
          feature: "商品關鍵字搜尋工具(原價$1000/月)",
          personal: false,
          business: "優惠價$500/月"
        },
        {
          feature: "人機客務轉接(原價$1000/月)",
          personal: false,
          business: "優惠價$500/月"
        },
        {
          feature: "簡訊服務費用(原價$1000/月)",
          personal: "每則0元",
          business: "每則0元"
        },
        {
          feature: "流量費",
          personal: "0元",
          business: "0元"
        }
      ]
    };
  }
};
</script>
