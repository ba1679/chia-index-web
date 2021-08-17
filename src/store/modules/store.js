import { consumerAPI } from "@/plugins/service";

export const state = {
  id: "",
  data: null,
  categories: [],
  itemIDs: [],
  items: [],
  messengers: [], // { id, data, enabled}
  paymentMethodDatas: [],
  shippingChannelDatas: [],
  autoReplyOrderTime: null
};
export const getters = {
  id(state) {
    return state.id;
  },
  data(state) {
    return state.data;
  },
  categories(state) {
    return state.categories;
  },
  items(state) {
    return state.items;
  },
  itemIDs(state) {
    return state.itemIDs;
  },
  messengers(state) {
    return state.messengers;
  },
  messengerTelegramBotData(state) {
    const found = state.messengers.find(s => s.id == "telegram_bot");
    if (found) {
      return found.data;
    }
    return null;
  },
  messengerEnabledTelegramBot(state) {
    const found = state.messengers.find(s => s.id == "telegram_bot");
    if (found) {
      return found.enabledData;
    }
    return null;
  },
  messengerTelegramBotEnabled(state) {
    const found = state.messengers.find(s => s.id == "telegram_bot");
    if (found) {
      return !!found.enabledData;
    }
    return false;
  },
  paymentMethodDatas(state) {
    return state.paymentMethodDatas;
  },
  paymentMethodStoreData(state) {
    const found = state.paymentMethodDatas.find(s => s.id == "store");
    if (found) {
      return found.data;
    }
    return null;
  },
  paymentMethodTapPayData(state) {
    const found = state.paymentMethodDatas.find(s => s.id == "tappay");
    if (found) {
      return found.data;
    }
    return null;
  },
  shippingChannelDatas(state) {
    return state.shippingChannelDatas;
  },
  shippingChannelStoreData(state) {
    const found = state.shippingChannelDatas.find(s => s.id == "store");
    if (found) {
      return found.data;
    }
    return null;
  },
  autoReplyOrderTime(state) {
    return state.autoReplyOrderTime;
  }
};
export const mutations = {
  SET_STORE_ID(state, id) {
    state.id = id;
  },
  SET_STORE_DATA(state, data) {
    state.data = data;
  },
  SET_ITEM_IDS(state, ids) {
    state.itemIDs = ids;
  },
  CLEAR_ITEMS(state) {
    state.items = [];
  },
  PUSH_ITEM(state, { id, data }) {
    const foundIndex = state.items.findIndex(s => s.id == id);
    if (foundIndex >= 0) state.items.splice(foundIndex, 1, { id, data });
    else state.items.push({ id, data });
  },
  CLEAR_CATEGORIES(state) {
    state.categories = [];
  },
  PUSH_CATEGORY(state, { id, data }) {
    const foundIndex = state.categories.findIndex(s => s.id == id);
    if (foundIndex >= 0) state.categories.splice(foundIndex, 1, { id, data });
    else state.categories.push({ id, data });
  },
  CLEAR_MESSENGERS(state) {
    state.messengers = [];
  },
  PUSH_MESSENGER(state, { id, data }) {
    const foundIndex = state.messengers.findIndex(s => s.id == id);
    if (foundIndex >= 0) state.messengers.splice(foundIndex, 1, { id, data });
    else state.messengers.push({ id, data, enabledData: null });
  },
  CLEAR_PAYMENT_METHOD_DATAS(state) {
    state.paymentMethodDatas = [];
  },
  PUSH_PAYMENT_METHOD_DATA(state, { id, data }) {
    const foundIndex = state.paymentMethodDatas.findIndex(s => s.id == id);
    if (foundIndex >= 0)
      state.paymentMethodDatas.splice(foundIndex, 1, { id, data });
    else state.paymentMethodDatas.push({ id, data });
  },
  CLEAR_SHIPPING_CHANNEL_DATAS(state) {
    state.shippingChannelDatas = [];
  },
  PUSH_SHIPPING_CHANNEL_DATA(state, { id, data }) {
    const foundIndex = state.shippingChannelDatas.findIndex(s => s.id == id);
    if (foundIndex >= 0)
      state.shippingChannelDatas.splice(foundIndex, 1, { id, data });
    else state.shippingChannelDatas.push({ id, data });
  },
  SET_AUTO_REPLY_ORDER_TIME(state, data) {
    state.autoReplyOrderTime = data;
  }
};
export const actions = {
  fetchStore({ commit, dispatch }, id) {
    return new Promise((resolve, reject) => {
      if (id) {
        commit("SET_STORE_ID", id);
        return dispatch("getStores")
          .then(() => {
            dispatch("getItemIDs");
          })
          .then(() => {
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  },
  getStores({ getters, commit }) {
    return new Promise((resolve, reject) => {
      const storeID = getters.id;
      consumerAPI
        .getStores([storeID])
        .then(res => {
          commit("SET_STORE_DATA", res["stores"][storeID]);
          resolve();
        })
        .catch(err => reject("get stores error " + err));
    });
  },
  getItemIDs({ getters, commit }) {
    const storeID = getters.id;
    return new Promise((resolve, reject) => {
      consumerAPI
        .getStoreAllItemIDs(storeID)
        .then(res => {
          commit("SET_ITEM_IDS", res["item_ids"]);
          resolve();
        })
        .catch(err => reject("get item ids error " + err));
    });
  },
  getItems(_, itemID) {
    return new Promise((resolve, reject) => {
      consumerAPI
        .getItems(itemID)
        .then(res => {
          resolve(res);
        })
        .catch(err => reject("get items error " + err));
    });
  }
};
