<template>
  <!-- store intro -->
  <v-row justify="center" class="store-info-card text-center" v-if="data">
    <v-col :cols="isMobile ? 12 : 5" class="d-flex flex-column align-center ">
      <v-card flat color="transparent">
        <v-img
          :max-width="isMobile ? 250 : 350"
          class="rounded-circle mt-5"
          :src="data['media_urls']['main_image']"
        ></v-img>
        <v-card-text class="white--text">
          <h3 class="text-h5 font-weight-bold mt-3">
            {{ data.name }}
          </h3>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            icon
            :href="data.links.fb"
            target="_blank"
            v-if="data.links.fb"
          >
            <v-icon color="white">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            :href="data.links.ig"
            target="_blank"
            v-if="data.links.ig"
          >
            <v-icon color="white">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon @click="toGoogleMap" v-if="data['address_detail']">
            <v-icon color="white">mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="isMobile ? 10 : 7">
      <v-row dense class="mt-5">
        <v-col :cols="isMobile ? 12 : 7" class="d-flex justify-center">
          <v-list class="pt-0 text-left" color="transparent">
            <template v-for="item in storeData">
              <v-list-item class="pl-0" :key="item.icon" v-if="item.content">
                <v-list-item-icon>
                  <v-icon color="white">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="white--text">
                  <v-list-item-title
                    >{{ item.title }}:
                    <span class="orange--text font-weight-bold text-wrap">{{
                      item.content
                    }}</span></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item class="pl-0">
              <v-list-item-icon>
                <v-icon color="white">mdi-message-text-clock</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <v-btn
                    small
                    color="orange"
                    outlined
                    @click="autoReplyTimeDialogShow = true"
                  >
                    {{ $t("__one_web_store_auto_reply_time") }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          :cols="isMobile ? 12 : 5"
          class="d-flex align-center flex-column"
          :class="{ 'mb-3': isMobile }"
        >
          <qrcode-vue :value="telegramBotLink" size="120" renderAs="canvas" />
          <div class="mt-5">
            <v-btn large block color="primary" @click="toStoreTelegramBot"
              ><v-icon left>mdi-plus</v-icon>{{ $t("__follow") }}</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-dialog v-model="autoReplyTimeDialogShow" width="500">
      <AutoReplyTimeDialog
        @close="autoReplyTimeDialogShow = false"
        :timeData="data['auto_reply_order_time']['weekday_time_intervals']"
      />
    </v-dialog>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import format from "date-fns/format";
import QrcodeVue from "qrcode.vue";
import AutoReplyTimeDialog from "@/components/onePageWeb/AutoReplyTimeDialog";

export default {
  name: "StoreIntro",
  components: {
    QrcodeVue,
    AutoReplyTimeDialog
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
      data: "store/data"
    }),
    telegramBotLink() {
      return `http://t.me/${this.data.['telegram_bot_id']}`
    },
  },
  data() {
    return {
      storeQrcodeLink: "https://www.chia-market.com/",
      storeData: [],
      autoReplyTimeDialogShow: false
    };
  },
  methods: {
    updateStoreData() {
      this.storeData = [
        {
          title: this.$t("__one_web_store_num_of_chats"),
          content: this.data["number_of_chats"],
          icon: "mdi-account-multiple-outline"
        },
        {
          title: this.$t("__one_web_store_join_time"),
          content: format(new Date(this.data["create_time"]), "yyyy/MM/dd"),
          icon: "mdi-account-check"
        },
        {
          title: this.$t("__one_web_store_location"),
          content: this.data["address_detail"]
            ? `${this.data["address_detail"].city}, ${this.data["address_detail"].area}`
            : "",
          icon: "mdi-map-marker"
        },
        {
          title: this.$t("__one_web_store_payment"),
          content: this.data["payment_methods"].join("、"),
          icon: "mdi-cash-usd-outline"
        }
      ]

    },
    toStoreTelegramBot(){
      this.$emit('toStoreTelegramBot');
    },
    formatAddress(address) {
      let format = `${address.postal_code}${address.city}${address.area}${
        address.road
      }${address.lane}${address.lane ? '巷' : ""}${
        address.alley
      }${address.alley ? '弄' : ""}${
        address.number
      }'號'${
        address.sub_number
          ? '之'`${address.sub_number}`
          : ""
      }${address.floor}${
        address.floor ? '樓': ""
      }${address.room}${address.room ? '室' : ""}`;
      return format;
    },
    toGoogleMap(){
       const storeAddress = this.data["address_detail"];
       const addressStr = this.formatAddress(storeAddress)
      const url = `https://www.google.com/maps?q=${addressStr}`;
      window.open(url);
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        if (val) this.updateStoreData();
      }
    }
  }
};
</script>
