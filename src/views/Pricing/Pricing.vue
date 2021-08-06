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
    <v-container v-show="currentTab === 'payAsYouGo'">
      <v-sheet
        class="text-center mx-auto mb-5 py-3 rounded"
        outlined
        max-width="600px"
      >
        <div class="mb-2">註冊開通費 (一次性費用)</div>
        <v-icon color="primary">mdi-plus-circle</v-icon>
        <div class="mt-2">交易手續費 & 模組月費 (每月結算)</div>
      </v-sheet>
      <v-row justify="center">
        <v-col
          :cols="isMobile ? 6 : 3"
          v-for="data in payAsYouGoDatas"
          :key="data.icon"
        >
          <v-card outlined height="100%" class="d-flex flex-column">
            <v-card-text class="d-flex flex-column text-center">
              <v-icon x-large color="primary">
                {{ data.icon }}
              </v-icon>
              <div class="text-h5 black--text">{{ data.type }}</div>
              <div class="text-subtitle-1">{{ data.text }}</div>
            </v-card-text>
            <v-card-actions class="mt-auto">
              <v-btn rounded block max-width="150" color="primary"
                >聯繫客服</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-md-h4 text-center my-5">功能比較</div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th class="text-left text-md-h5 font-weight-bold">
                個人賣家
              </th>
              <th class="text-left text-md-h5 font-weight-bold">
                商業賣家
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-primary white--text tbody-header">
              <th colspan="3" class="text-md-subtitle-1">
                電商平台功能
              </th>
            </tr>
            <tr v-for="item in payAsYouGoPlatformTable" :key="item.feature">
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
                第三方支付平台
              </th>
            </tr>
            <tr>
              <th colspan="3" class="text-center text-md-subtitle-2">
                無第三方支付平台
              </th>
            </tr>
            <tr class="bg-primary white--text tbody-header">
              <th colspan="3" class="text-md-subtitle-1">
                金流
              </th>
            </tr>
            <tr v-for="item in payAsYouGoPaymentTable" :key="item.feature">
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
                物流
              </th>
            </tr>
            <tr v-for="item in payAsYouGoShippingTable" :key="item.feature">
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
                消費者前台
              </th>
            </tr>
            <tr v-for="item in payAsYouGoConsumerWebTable" :key="item.feature">
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
            <tr>
              <th colspan="3" class="text-center text-md-subtitle-2">
                無優惠設定
              </th>
            </tr>
            <tr class="bg-primary white--text tbody-header">
              <th colspan="3" class="text-md-subtitle-1">
                代碼管理及廣告追蹤工具
              </th>
            </tr>
            <tr>
              <th colspan="3" class="text-center text-md-subtitle-2">
                無代碼管理及廣告追蹤工具
              </th>
            </tr>
            <tr class="bg-primary white--text tbody-header">
              <th colspan="3" class="text-md-subtitle-1">
                統計分析
              </th>
            </tr>
            <tr
              v-for="item in payAsYouGoStoreAnalysisTable"
              :key="item.feature"
            >
              <th class="text-md-subtitle-2">{{ item.feature }}</th>
              <td v-if="item.personal === true">
                <v-icon color="primary">mdi-check-bold</v-icon>
              </td>
              <td v-else-if="item.personal === false">
                <v-icon>mdi-close-thick</v-icon>
              </td>
              <td v-else>{{ item.business }}</td>
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
                Telegram bot
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
              <td v-else>{{ item.business }}</td>
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Pricing",
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  data() {
    return {
      currentTab: "payAsYouGo",
      payAsYouGoDatas: [
        {
          icon: "mdi-account",
          type: "個人賣家",
          text: "新手賣家，小資經營"
        },
        {
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
          feature: "入口網站chia廣告露出",
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
          personal: false,
          business: false
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
          feature: "交易手續費",
          personal: "5%",
          business: "5%"
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
          personal: 100,
          business: 300
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
          feature: "Q&A 自動回覆設置",
          personal: false,
          business: false
        },
        {
          feature: "優惠活動訊息發送排程推播",
          personal: true,
          business: true
        },
        {
          feature: "問券分眾工具",
          personal: false,
          business: false
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
          feature: "訂位服務工具",
          personal: false,
          business: false
        },
        {
          feature: "訂房服務工具",
          personal: false,
          business: false
        },
        {
          feature: "預訂服務工具",
          personal: false,
          business: false
        },
        {
          feature: "團購收單工具",
          personal: false,
          business: false
        },
        {
          feature: "新品預售工具",
          personal: false,
          business: false
        },
        {
          feature: "直播收單工具",
          personal: false,
          business: false
        },
        {
          feature: "商品關鍵字搜尋工具",
          personal: false,
          business: false
        },
        {
          feature: "人機客務轉接",
          personal: false,
          business: false
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
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
.tbody-header:hover {
  background-color: #0071bc !important;
}
</style>
