<template>
  <v-container>
    <v-row justify="center">
      <v-col
        :cols="isMobile ? 12 : 4"
        v-for="item in itemData"
        :key="item.name"
      >
        <v-card
          flat
          link
          class="relative item-card"
          @click="toStoreTelegramBot"
        >
          <v-img class="item-bg" :src="item.photoUrl"></v-img>
          <div class="overlay-bg d-flex flex-column justify-center">
            <h3 class="text-sm-h4">{{ item.name }}</h3>
            <h4 class="text-sm-h5">${{ item.price }}</h4>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemsAlbum",
  computed: {
    ...mapGetters({
      isMobile: "isMobile"
    })
  },
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      itemData: []
    };
  },
  methods: {
    loadItems() {
      return this.$store
        .dispatch("store/getItems", this.items.texts)
        .then(res => {
          for (const id of res["item_ids"]) {
            this.itemData.push({
              name: res.items[id].name,
              price: res.items[id].price,
              photoUrl: res.items[id]["photo_urls"][0]
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toStoreTelegramBot() {
      this.$emit("toStoreTelegramBot");
    }
  },
  created() {
    this.loadItems();
  }
};
</script>
<style lang="scss" scoped>
.item-card {
  overflow: hidden;
}
@media (min-width: 1024px) {
  .item-bg {
    transform: scale(1);
    transition: all 0.3s;
  }
  .item-card:hover {
    .item-bg {
      transform: scale(1.3);
    }
    .overlay-bg {
      opacity: 1;
    }
  }
}
.overlay-bg {
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (min-width: 1024px) {
    opacity: 0;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
}
</style>
