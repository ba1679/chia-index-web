import { call } from ".";

/**
 * get stores
 * @param {array} storeIDs
 * @returns {Promise<Object>} user_id and user
 */
const getStores = function(storeIDs) {
  return call("getStores", {
    store_ids: storeIDs
  });
};

/**
 * get store all category IDs
 * @param {string} storeID
 * @returns {Promise<Object>} user_id and user
 */
const getStoreAllCategoryIDs = function(storeID) {
  return call("getStoreAllCategoryIDs", {
    store_id: storeID
  });
};

export { getStores, getStoreAllCategoryIDs };
