<template>
  <div class="address-input">
    <v-row>
      <v-col class="pb-0" :cols="isMobile ? 6 : 3">
        <div class="caption mb-2">
          {{ $t("__receive_zip_code") }} <span class="error--text">*</span>
        </div>
        <v-text-field
          outlined
          dense
          type="number"
          v-model="addressDetail.postal_code"
          :rules="[requiredRule, postCodeRule]"
          required
        />
      </v-col>
      <v-col class="pb-0" :cols="isMobile ? 6 : 3">
        <div class="caption mb-2">
          {{ $t("__receive_city") }} <span class="error--text">*</span>
        </div>
        <v-combobox
          v-model="citySelect"
          :items="cityRoads"
          item-value="city"
          item-text="city"
          :rules="[requiredRule, cityRule]"
          @change="cleanSelect"
          outlined
          dense
        ></v-combobox>
      </v-col>
      <v-col :class="{ 'pt-0': isMobile }" :cols="isMobile ? 6 : 12">
        <div class="caption mb-2">
          {{ $t("__receive_area") }} <span class="error--text">*</span>
        </div>
        <v-combobox
          v-model="areaSelect"
          :items="computedAreas"
          :rules="[requiredRule, areaRule]"
          @change="roadSelect = ''"
          outlined
          dense
        ></v-combobox>
      </v-col>
      <v-col :class="{ 'pt-0': isMobile }" :cols="isMobile ? 6 : 12">
        <div class="caption mb-2">
          {{ $t("__receive_road") }} <span class="error--text">*</span>
        </div>
        <v-combobox
          v-model="roadSelect"
          :items="computedRoads"
          :rules="[requiredRule, roadRule]"
          outlined
          dense
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="isMobile ? 4 : 12">
        <div class="d-flex align-baseline">
          <v-text-field
            outlined
            dense
            type="number"
            v-model="addressDetail.lane"
          />
          <span class="caption mx-1">{{ $t("__receive_lane") }}</span>
        </div>
      </v-col>
      <v-col :cols="isMobile ? 4 : 12">
        <div class="d-flex align-baseline">
          <v-text-field
            outlined
            dense
            type="number"
            v-model="addressDetail.alley"
          />
          <span class="caption mx-1">{{ $t("__receive_alley") }}</span>
        </div>
      </v-col>
      <v-col :cols="isMobile ? 4 : 12">
        <div class="d-flex align-baseline no-gutters">
          <v-text-field
            outlined
            dense
            type="number"
            :rules="[requiredRule, addressNumRule]"
            required
            v-model.number="addressDetail.number"
          />
          <span class="caption ml-1">{{ $t("__receive_number") }}</span
          ><span class="error--text">*</span>
          <span class="caption mr-1">{{ $t("__receive_sub_number") }}</span>
          <v-text-field
            outlined
            dense
            type="number"
            class="mr-2"
            v-model.number="addressDetail['sub_number']"
          />
        </div>
      </v-col>
      <v-col :cols="isMobile ? 6 : 0">
        <div class="d-flex align-baseline">
          <v-text-field
            outlined
            dense
            type="number"
            v-model="addressDetail.floor"
          />
          <span class="caption mx-1">{{ $t("__receive_floor") }}</span>
        </div>
      </v-col>
      <v-col :cols="isMobile ? 6 : 0">
        <div class="d-flex align-baseline">
          <v-text-field
            outlined
            dense
            type="number"
            v-model="addressDetail.room"
          />
          <span class="caption mx-1">{{ $t("__receive_room") }}</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TwRoadsCSV from "raw-loader!../assets/taiwan_roads.csv";

export default {
  name: "AddressInput",
  props: {
    address: {
      type: Object,
      default: () => {
        return {
          postal_code: "000",
          city: "",
          area: "",
          road: "",
          lane: "",
          alley: "",
          number: "",
          sub_number: 0,
          floor: "",
          room: ""
        };
      }
    }
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    }),
    computedAreas() {
      let areas = [];
      let areaName = [];
      areas = this.cityRoads.filter(item => {
        return item.city === this.citySelect.city;
      });
      areaName = areas.map(item => {
        return item.area;
      });
      areaName = areaName.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
      });
      return areaName;
    },
    computedRoads() {
      let roads = [];
      let roadName = [];
      roads = this.cityRoads.filter(item => {
        return item.area === this.areaSelect;
      });
      roadName = roads.map(item => {
        return item.road.trim();
      });
      return roadName;
    },
    addressDetail: {
      get() {
        return this.address;
      },
      set(val) {
        this.$emit("update:address", val);
      }
    }
  },
  data() {
    return {
      cityRoads: [],
      citySelect: "",
      areaSelect: "",
      roadSelect: "",
      requiredRule: v => !!v || this.$t("__required"),
      postCodeRule: v =>
        /^\d{5}|^\d{3}$/.test(v) || this.$t("__postal_code_invalid"),
      cityRule: v => this.cityRoads.includes(v) || this.$t("__city_invalid"),
      areaRule: v =>
        this.computedAreas.includes(v) || this.$t("__area_invalid"),
      roadRule: v =>
        this.computedRoads.includes(v) || this.$t("__road_invalid"),
      addressNumRule: v => /(^[1-9]\d*$)/.test(v) || this.$t("__num_invalid")
    };
  },
  methods: {
    parseTwRoads() {
      const rows = TwRoadsCSV.split("\n");
      for (const row of rows) {
        const cells = row.split(",");
        const city = cells[0];
        const area = cells[1].slice(3);
        const road = cells[2];
        this.cityRoads.push({
          city,
          area,
          road
        });
      }
    },
    cleanSelect() {
      this.areaSelect = "";
      this.roadSelect = "";
    },
    setAddress(val) {
      this.address = val;
      this.addressDetail = val;
    }
  },
  created() {
    this.parseTwRoads();
  },
  watch: {
    citySelect: {
      handler(val) {
        this.addressDetail.city = val.city;
      }
    },
    areaSelect: {
      handler(val) {
        this.addressDetail.area = val;
      }
    },
    roadSelect: {
      handler(val) {
        this.addressDetail.road = val;
      }
    }
  }
};
</script>
