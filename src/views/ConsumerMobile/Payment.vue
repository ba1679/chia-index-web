<template>
  <div>
    <MobileTopBar :title="'支付管理'" :backPath="{ name: 'AccountMobile' }" />
    <v-card outlined class="mb-3">
      <v-card-title>
        信用卡
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in creditCardData" :key="i">
            <v-expansion-panel-header>
              <div>{{ item.name }}</div>
              <div class="text-right pr-2">{{ item.lastFiveDigits }}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <table class="payment-table">
                <tr>
                  <th>
                    類別
                  </th>
                  <td>{{ item.type }}</td>
                </tr>
                <tr>
                  <th>
                    信用卡號
                  </th>
                  <td>{{ item.cardNum }}</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right pt-2">
                    <v-btn small color="primary" class="mr-2">
                      設為預設
                    </v-btn>
                    <v-btn outlined small color="primary">
                      刪除
                    </v-btn>
                  </td>
                </tr>
              </table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <!-- 換頁新增 -->
        <v-btn
          text
          block
          :to="{ name: 'NewPaymentForm', params: { method: 'credit' } }"
        >
          <v-icon color="primary" class="mr-2">mdi-plus-box-outline</v-icon>
          新增信用卡
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card outlined class="mb-3">
      <v-card-title>
        銀行帳號
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in bankData" :key="i">
            <v-expansion-panel-header>
              <div>{{ item.bank }}</div>
              <div class="text-right pr-2">{{ item.lastFiveDigits }}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <table class="payment-table">
                <tr>
                  <th>
                    銀行帳戶戶名
                  </th>
                  <td>{{ item.name }}</td>
                </tr>
                <tr>
                  <th>
                    身分證字號/公司統編
                  </th>
                  <td>{{ item.IDnum }}</td>
                </tr>
                <tr>
                  <th>
                    銀行名稱
                  </th>
                  <td>{{ item.bank }}</td>
                </tr>
                <tr>
                  <th>
                    地區
                  </th>
                  <td>{{ item.area }}</td>
                </tr>
                <tr>
                  <th>
                    分行
                  </th>
                  <td>{{ item.branch }}</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-right pt-2">
                    <v-btn small color="primary" class="mr-2">
                      設為預設
                    </v-btn>
                    <v-btn outlined small color="primary">
                      刪除
                    </v-btn>
                  </td>
                </tr>
              </table>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          text
          block
          :to="{ name: 'NewPaymentForm', params: { method: 'bank' } }"
        >
          <v-icon color="primary" class="mr-2">mdi-plus-box-outline</v-icon>
          新增銀行帳號
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import MobileTopBar from "@/components/MobileTopBar";

export default {
  name: "UserPaymentSetting",
  components: {
    MobileTopBar
  },
  data() {
    return {
      creditCardData: [
        {
          type: "master card",
          name: "玉山銀行",
          lastFiveDigits: "*1234",
          cardNum: "123456789"
        },
        {
          type: "visa card",
          name: "中國信託",
          lastFiveDigits: "*5678",

          cardNum: "**** **** **** 0123"
        }
      ],
      bankData: [
        {
          bank: "玉山銀行",
          IDnum: "A1234578",
          name: "王大明",
          area: "台中市",
          branch: "XX分行",
          account: "123458545",
          lastFiveDigits: "*8545"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.payment-table {
  width: 100%;
  th {
    font-weight: bold;
    text-align: left;
    white-space: nowrap;
    padding-right: 2rem;
  }
  td {
    width: 100%;
  }
}
</style>
