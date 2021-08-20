import { consumerAPI } from "@/plugins/service";

export const state = {
  id: "",
  data: null,
  categories: [],
  categoryItems: [],
  itemIDs: [],
  items: []
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
  categoryItems(state) {
    return state.categoryItems;
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
  CLEAR_CATEGORY_ITEMS(state) {
    state.categoryItems = [];
  },
  PUSH_CATEGORY(state, { id, data }) {
    const foundIndex = state.categories.findIndex(s => s.id == id);
    if (foundIndex >= 0) state.categories.splice(foundIndex, 1, { id, data });
    else state.categories.push({ id, data });
  },
  PUSH_CATEGORY_ITEMS(state, { id, data }) {
    const foundIndex = state.categoryItems.findIndex(s => s.id == id);
    if (foundIndex >= 0)
      state.categoryItems.splice(foundIndex, 1, { id, data });
    else state.categoryItems.push({ id, data });
  },
  CLEAR_MESSENGERS(state) {
    state.messengers = [];
  },
  PUSH_MESSENGER(state, { id, data }) {
    const foundIndex = state.messengers.findIndex(s => s.id == id);
    if (foundIndex >= 0) state.messengers.splice(foundIndex, 1, { id, data });
    else state.messengers.push({ id, data, enabledData: null });
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
            dispatch("getStoreAllCategoryIDs");
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
  getStoreAllCategoryIDs({ getters, dispatch }) {
    const storeID = getters.id;
    return new Promise((resolve, reject) => {
      consumerAPI
        .getStoreAllCategoryIDs(storeID)
        .then(res => {
          dispatch("getStoreCategories", res["category_ids"]);
          resolve(res);
        })
        .catch(err => reject("get store all category ids error " + err));
    });
  },
  getStoreCategories({ commit, getters }, categoryIDs) {
    const storeID = getters.id;
    return new Promise((resolve, reject) => {
      consumerAPI
        .getStoreCategories(storeID, categoryIDs)
        .then(res => {
          commit("CLEAR_CATEGORIES");
          for (const categoryID of res.category_ids) {
            commit("PUSH_CATEGORY", {
              id: categoryID,
              data: res.categories[categoryID]
            });
          }
          resolve(res);
        })
        .catch(err => reject("get store categories error " + err));
    });
  },
  getStoreCategoryAllItemIDs({ getters, dispatch }, categoryID) {
    const storeID = getters.id;
    return new Promise((resolve, reject) => {
      consumerAPI
        .getStoreCategoryAllItemIDs(storeID, categoryID)
        .then(res => {
          dispatch("getCategoryItems", res["item_ids"]);
          resolve(res);
        })
        .catch(err => reject("get store category all item ids error " + err));
    });
  },
  getCategoryItems({ dispatch, commit }, itemIDs) {
    dispatch("getItems", itemIDs)
      .then(res => {
        commit("CLEAR_CATEGORY_ITEMS");
        for (const itemID of res["item_ids"]) {
          commit("PUSH_CATEGORY_ITEMS", {
            id: itemID,
            data: res.items[itemID]
          });
        }
      })
      .catch(err => {
        console.log("get store category items error " + err);
      });
  },
  getItems(_, itemIDs) {
    return new Promise((resolve, reject) => {
      consumerAPI
        .getItems(itemIDs)
        .then(res => {
          resolve(res);
        })
        .catch(err => reject("get items error " + err));
    });
  }
};
