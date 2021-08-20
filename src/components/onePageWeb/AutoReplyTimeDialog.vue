<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      {{ $t("__one_web_store_auto_reply_time") }}
    </v-card-title>

    <v-card-text>
      <table>
        <tr v-for="(strs, k) in weekTimeIntervalsStrings" :key="k">
          <td>
            {{ k }}
          </td>
          <td class="pr-3" v-for="(str, i) in strs" :key="`${k}-${i}`">
            {{ str }}
          </td>
        </tr>
      </table>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="close">
        {{ $t("__close") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "AutoReplyTimeDialog",
  props: {
    timeData: {
      type: Object
    }
  },
  computed: {
    weekTimeIntervalsStrings() {
      const strs = {};
      if (this.timeData) {
        for (let d = 0; d < 7; d++) {
          const timeIntervals = this.timeData[d.toString()];
          let subStrs = [];
          if (timeIntervals) {
            for (const timeInterval of this.timeData[d.toString()]) {
              if (timeInterval["action"] === "accept") {
                const str = `${timeInterval["start_time"]} ~ ${timeInterval["end_time"]}`;
                subStrs.push(str);
              }
            }
          }
          if (subStrs.length > 0) {
            const key = `(${this.$t(
              `__one_web_store_auto_reply_time_weekday_${d}`
            )})`;
            strs[key] = subStrs;
          }
        }
      }
      return strs;
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
