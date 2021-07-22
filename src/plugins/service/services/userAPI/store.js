import { call } from ".";

// Store
/**
 * get user stores
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, store_ids and stores
 */
const getUserStores = function(idToken, userID) {
  return call("getUserStores", idToken, {
    user_id: userID
  });
};

/**
 * get store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and store
 */
const getStore = function(idToken, storeID) {
  return call("getStore", idToken, {
    store_id: storeID
  });
};

/**
 * set store
 * @param {string} idToken
 * @param {string} storeID
 * @param {Object} setData (name: string, description: string, introduction: string, photo_urls: Array<string>)
 * @returns {Promise<string>} "success"
 */
const setStore = function(idToken, storeID, setData) {
  return call("setStore", idToken, {
    store_id: storeID,
    set_data: setData
  });
};

// Category
/**
 * get store categories
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id, category_ids and categories
 */
const getStoreCategories = function(idToken, storeID) {
  return call("getStoreCategories", idToken, {
    store_id: storeID
  });
};

/**
 * get category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @returns {Promise<Object>} store_id, category_id and category
 */
const getCategory = function(idToken, storeID, categoryID) {
  return call("getCategory", idToken, {
    store_id: storeID,
    category_id: categoryID
  });
};

/**
 * create category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} name
 * @param {Array} photoURLs Array<string>
 * @returns {Promise<Object>} category_id
 */
const createCategory = function(idToken, storeID, name, photoURLs) {
  return call("createCategory", idToken, {
    store_id: storeID,
    name: name,
    photo_urls: photoURLs
  });
};

/**
 * set category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @param {Object} setData (name: string , photo_urls: Array<string>)
 * @returns {Promise<string>} "success"
 */
const setCategory = function(idToken, storeID, categoryID, setData) {
  return call("setCategory", idToken, {
    store_id: storeID,
    category_id: categoryID,
    set_data: setData
  });
};

/**
 * delete category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @returns {Promise<string>} "success"
 */
const deleteCategory = function(idToken, storeID, categoryID) {
  return call("deleteCategory", idToken, {
    store_id: storeID,
    category_id: categoryID
  });
};

// Item
/**
 * get category items
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @param {boolean} onlyPublished
 * @returns {Promise<Object>} store_id, category_id, item_ids and items
 */
const getCategoryItems = function(idToken, storeID, categoryID, onlyPublished) {
  return call("getCategoryItems", idToken, {
    store_id: storeID,
    category_id: categoryID,
    only_published: onlyPublished
  });
};

/**
 * get store items
 * @param {string} idToken
 * @param {string} storeID
 * @param {boolean} onlyPublished
 * @returns {Promise<Object>} store_id, item_ids and items
 */
const getStoreItems = function(idToken, storeID, onlyPublished) {
  return call("getStoreItems", idToken, {
    store_id: storeID,
    only_published: onlyPublished
  });
};

/**
 * get item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<Object>} item_id and item
 */
const getItem = function(idToken, itemID) {
  return call("getItem", idToken, {
    item_id: itemID
  });
};

/**
 * create item
 * @param {string} idToken
 * @param {string} userID
 * @param {string} storeID
 * @param {string} name
 * @param {string} description
 * @returns {Promise<Object>} user_id, store_id and item_id
 */
const createItem = function(idToken, userID, storeID, name, description) {
  return call("createItem", idToken, {
    user_id: userID,
    store_id: storeID,
    name: name,
    description: description
  });
};

/**
 * set item
 * @param {string} idToken
 * @param {string} itemID
 * @param {Object} setData (category_ids: Array<string>, name: string, description: string, introduction: string, photo_urls: Array<string>, price: number, quantity_of_stock: number(-1: unlimited))
 * @returns {Promise<string>} "success"
 */
const setItem = function(idToken, itemID, setData) {
  return call("setItem", idToken, {
    item_id: itemID,
    set_data: setData
  });
};

/**
 * publish item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const publishItem = function(idToken, itemID) {
  return call("publishItem", idToken, {
    item_id: itemID
  });
};

/**
 * delist item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const delistItem = function(idToken, itemID) {
  return call("delistItem", idToken, {
    item_id: itemID
  });
};

/**
 * delete item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<string>} "success"
 */
const deleteItem = function(idToken, itemID) {
  return call("deleteItem", idToken, {
    item_id: itemID
  });
};

// Other data

//payment method
/**
 * get payment method datas - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id , payment_method_ids([]string) ,payment_methods([id]payment_method{})
 */
const getPaymentMethods = function(idToken, storeID) {
  return call("getPaymentMethods", idToken, {
    store_id: storeID
  });
};

/**
 * get payment method data - store
 * @param {string} idToken
 * @param {string} paymentMethodID
 * @returns {Promise<Object>} store_id , payment_method(string) ,payment_methods(payment_method{})
 */
const getPaymentMethod = function(idToken, storeID, paymentMethodID) {
  return call("getPaymentMethod", idToken, {
    store_id: storeID,
    payment_method_id: paymentMethodID
  });
};

/**
 * add payment method data - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {bool} enabled
 * @param {string} type (cash, cash-on-delivery, transfer, tappay-direct-pay, tappay-google-pay, tappay-apple-pay, tappay-samsung-pay, tappay-line-pay, tappay-jko-pay, tappay-easy-wallet)
 * @param {string} bankCode transfer
 * @param {string} account transfer
 * @param {number} appID tappay
 * @param {number} appKey tappay
 * @param {number} partnerKey tappay
 * @param {number} merchantID tappay
 * @param {number} googleMerchantID tappay
 * @param {number} appleMerchantIdentifier tappay
 * @returns {object} 'payment_id: string , store_id: string'
 */
const addPaymentMethod = function(
  idToken,
  storeID,
  enabled,
  type,
  bankCode,
  account,
  appID,
  appKey,
  partnerKey,
  merchantID,
  googleMerchantID,
  appleMerchantIdentifier
) {
  return call("addPaymentMethod", idToken, {
    store_id: storeID,
    enabled: enabled,
    type: type,
    bank_code: bankCode,
    account: account,
    app_id: appID,
    app_key: appKey,
    partner_key: partnerKey,
    merchant_id: merchantID,
    google_merchant_id: googleMerchantID,
    apple_merchant_identifier: appleMerchantIdentifier
  });
};

/**
 * set payment method data - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} paymentMethodID
 * @param {object} setData (enabled: bool, type: string, bank_code: sting, account: string, app_id: number, app_key: string, partner_key: string, merchant_id: string, google_merchant_id: string, apple_merchant_identifier: string)
 * @returns {Promise<String>} 'success'
 */
const setPaymentMethod = function(idToken, storeID, paymentMethodID, setData) {
  return call("setPaymentMethod", idToken, {
    store_id: storeID,
    payment_method_id: paymentMethodID,
    set_data: setData
  });
};

/**
 * delete payment method data - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} paymentMethodID
 * @returns {Promise<String>} 'success'
 */
const deletePaymentMethod = function(idToken, storeID, paymentMethodID) {
  return call("deletePaymentMethod", idToken, {
    store_id: storeID,
    payment_method_id: paymentMethodID
  });
};

//shipping channel
/**
 * add shipping channel - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {bool} enabled
 * @param {string} type
 * @param {string} name
 * @param {number} price
 * @returns {Promise<Object>} (shipping_channel_id: string, store_id: string)
 */
const addShippingChannel = function(
  idToken,
  storeID,
  enabled,
  type,
  name,
  price
) {
  return call("addShippingChannel", idToken, {
    store_id: storeID,
    enabled: enabled,
    type: type,
    name: name,
    price: price
  });
};

/**
 * set shipping channel - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} shippingChannelID
 * @param {Object} setData (enabled: bool, type: string, name: string, price: number)
 * @returns {Promise<Sting>} 'success'
 */
const setShippingChannel = function(
  idToken,
  storeID,
  shippingChannelID,
  setData
) {
  return call("setShippingChannel", idToken, {
    store_id: storeID,
    shipping_channel_id: shippingChannelID,
    set_data: setData
  });
};

/**
 * delete shipping channel - store
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} shippingChannelID
 * @returns {Promise<Sting>} 'success'
 */
const deleteShippingChannel = function(idToken, storeID, shippingChannelID) {
  return call("deleteShippingChannel", idToken, {
    store_id: storeID,
    shipping_channel_id: shippingChannelID
  });
};

/**
 * get shipping channels - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id, shipping_channel_ids, shipping_channels
 */
const getShippingChannels = function(idToken, storeID) {
  return call("getShippingChannels", idToken, {
    store_id: storeID
  });
};

/**
 * get messenger data - telegram bot
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getMessengerTelegramBotData = function(idToken, storeID) {
  return call("getMessengerTelegramBotData", idToken, {
    store_id: storeID
  });
};

/**
 * set messenger data - telegram bot
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} token
 * @returns {Promise<Sting>} 'success'
 */
const setMessengerTelegramBotData = function(idToken, storeID, token) {
  return call("setMessengerTelegramBotData", idToken, {
    store_id: storeID,
    token: token
  });
};

/**
 * set auto reply order time - week
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} timeZoneOffset (±hh:mm)
 * @param {Object} weekdayTimeIntervals (["0"-"6"(sunday-saturday)][n]{ start_time: string(hh:mm), end_time: string(hh:mm), action: string(accept/reject) })
 * @returns {Promise<string>} "success"
 */
const setAutoReplyOrderTime_week = function(
  idToken,
  storeID,
  timeZoneOffset,
  weekdayTimeIntervals
) {
  return call("setAutoReplyOrderTime", idToken, {
    store_id: storeID,
    mode: "week",
    time_zone_offset: timeZoneOffset,
    weekday_time_intervals: weekdayTimeIntervals
  });
};

/**
 * get auto reply order time
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and auto_accept_order_time
 */
const getAutoReplyOrderTime = function(idToken, storeID) {
  return call("getAutoReplyOrderTime", idToken, {
    store_id: storeID
  });
};

/**
 * add create store application form
 * @param {string} idToken
 * @param {string} userID
 * @param {string} storeName
 * @param {string} ownerName
 * @param {string} ownerPhoneNumber
 * @param {string} ownerEmail
 * @param {string} storeOwnerType (company, personal)
 * @param {string} taxIDNumber
 * @param {string} storePhoneNumber
 * @param {string} storeAddress
 * @param {string} storeBankCode
 * @param {string} storeBankAccount
 * @param {string} storeWebsite
 * @param {string} telegramBotToken
 * @returns {Promise<Object>} create_store_application_form_id
 */
const addCreateStoreApplicationForm = function(
  idToken,
  userID,
  storeName,
  ownerName,
  ownerPhoneNumber,
  ownerEmail,
  storeOwnerType,
  taxIDNumber,
  storePhoneNumber,
  storeAddress,
  storeBankCode,
  storeBankAccount,
  storeWebsite,
  telegramBotToken
) {
  return call("addCreateStoreApplicationForm", idToken, {
    user_id: userID,
    store_name: storeName,
    owner_name: ownerName,
    owner_phone_number: ownerPhoneNumber,
    owner_email: ownerEmail,
    store_owner_type: storeOwnerType,
    tax_id_number: taxIDNumber,
    store_phone_number: storePhoneNumber,
    store_address: storeAddress,
    store_bank_code: storeBankCode,
    store_bank_account: storeBankAccount,
    store_website: storeWebsite,
    telegram_bot_token: telegramBotToken
  });
};

/**
 * set create store application form
 * @param {string} idToken
 * @param {string} formID
 * @param {Object} setData (store_name: string, owner_name: string, owner_phone_number: string, owner_email: string, store_owner_type: string, tax_id_number: string, store_phone_number: string, store_address: string, store_bank_code: string, store_bank_account: string, store_website: string, telegram_bot_token: string)
 * @returns {Promise<string>} "success"
 */
const setCreateStoreApplicationForm = function(idToken, formID, setData) {
  return call("setCreateStoreApplicationForm", idToken, {
    create_store_application_form_id: formID,
    set_data: setData
  });
};

/**
 * set create store application form photo url
 * @param {string} idToken
 * @param {string} formID
 * @param {string} photoName (bank_passbook, location_with_owner, environment_with_owner, registration_certificate, owner_id_card, owner_id_card_with_owner)
 * @param {number} photoIndex
 * @param {string} photoURL
 * @returns {Promise<string>} "success"
 */
const setCreateStoreApplicationFormPhotoURL = function(
  idToken,
  formID,
  photoName,
  photoIndex,
  photoURL
) {
  return call("setCreateStoreApplicationFormPhotoURL", idToken, {
    create_store_application_form_id: formID,
    photo_name: photoName,
    photo_index: photoIndex,
    photoURL: photoURL
  });
};

/**
 * submit create store application form
 * @param {string} idToken
 * @param {string} formID
 * @returns {Promise<string>} "success"
 */
const submitCreateStoreApplicationForm = function(idToken, formID) {
  return call("submitCreateStoreApplicationForm", idToken, {
    create_store_application_form_id: formID
  });
};

/**
 * get create store application form
 * @param {string} idToken
 * @param {string} formID
 * @returns {Promise<Object>} create_store_application_form_id and create_store_application_form
 */
const getCreateStoreApplicationForm = function(idToken, formID) {
  return call("getCreateStoreApplicationForm", idToken, {
    create_store_application_form_id: formID
  });
};

/**
 * get create store application forms
 * @param {string} idToken
 * @param {string} userID
 * @param {string} status (unsubmitted, submitted, accepted, rejected)
 * @returns {Promise<Object>} user_id, status, create_store_application_form_ids and create_store_application_forms
 */
const getCreateStoreApplicationForms = function(idToken, userID, status) {
  return call("getCreateStoreApplicationForms", idToken, {
    user_id: userID,
    status: status
  });
};

export {
  getUserStores,
  getStore,
  setStore,
  getStoreCategories,
  getStoreItems,
  getCategory,
  createCategory,
  setCategory,
  deleteCategory,
  getCategoryItems,
  getItem,
  createItem,
  setItem,
  publishItem,
  delistItem,
  deleteItem,
  addPaymentMethod,
  setPaymentMethod,
  deletePaymentMethod,
  getPaymentMethods,
  getPaymentMethod,
  addShippingChannel,
  setShippingChannel,
  deleteShippingChannel,
  getShippingChannels,
  setMessengerTelegramBotData,
  getMessengerTelegramBotData,
  setAutoReplyOrderTime_week,
  getAutoReplyOrderTime,
  addCreateStoreApplicationForm,
  setCreateStoreApplicationForm,
  setCreateStoreApplicationFormPhotoURL,
  submitCreateStoreApplicationForm,
  getCreateStoreApplicationForm,
  getCreateStoreApplicationForms
};
