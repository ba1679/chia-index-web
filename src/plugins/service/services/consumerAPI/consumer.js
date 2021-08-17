import { call } from ".";

/**
 * get stores
 * @param {array} storeIDs
 * @returns {Promise<Object>} store_ids and stores
 */
const getStores = function(storeIDs) {
  return call("getStores", {
    store_ids: storeIDs
  });
};

/**
 * get store all category IDs
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and category_ids
 */
const getStoreAllCategoryIDs = function(storeID) {
  return call("getStoreAllCategoryIDs", {
    store_id: storeID
  });
};

/**
 * get store categories
 * @param {string} storeID
 * @param {array} categoryIDs
 * @returns {Promise<Object>} store_id, category_ids, categories
 */
const getStoreCategories = function(storeID, categoryIDs) {
  return call("getStoreCategories", {
    store_id: storeID,
    category_ids: categoryIDs
  });
};

/**
 * get store all item IDs
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and item_ids
 */
const getStoreAllItemIDs = function(storeID) {
  return call("getStoreAllItemIDs", {
    store_id: storeID
  });
};

/**
 * get store category all item IDs
 * @param {string} storeID
 * @param {string} categoryID
 * @returns {Promise<Object>} store_id , category_id, item_ids
 */
const getStoreCategoryAllItemIDs = function(storeID, categoryID) {
  return call("getStoreCategoryAllItemIDs", {
    store_id: storeID,
    category_id: categoryID
  });
};

/**
 * get items
 * @param {array} itemIDs
 * @returns {Promise<Object>} item_ids,items
 */
const getItems = function(itemIDs) {
  return call("getItems", {
    item_ids: itemIDs
  });
};

export {
  getStores,
  getStoreAllCategoryIDs,
  getStoreCategories,
  getStoreAllItemIDs,
  getStoreCategoryAllItemIDs,
  getItems
};
