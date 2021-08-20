<template>
  <v-card flat rounded="false" class="my-2" elevation="1">
    <v-card-title
      ><v-icon color="orange">mdi-new-box</v-icon
      >{{ $t("__good_items") }}</v-card-title
    >
    <v-divider />
    <v-container fluid>
      <v-row>
        <v-col sm="6" md="3" lg="2" v-for="i in 6" :key="i">
          <v-card link>
            <v-img contain src="https://picsum.photos/200"></v-img>
            <v-card-title> 商品{{ i }} </v-card-title>
            <v-card-text class="d-flex justify-space-around pa-0">
              <p class="primary--text">{{ $t("__store") }}</p>
              <p class="grey--text">店家名稱</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "ItemCard"
};
</script>
