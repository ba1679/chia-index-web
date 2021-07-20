import { ServiceError, callService } from '..'

const ServiceURL = 'https://api-admin-service-th4n4u7taa-an.a.run.app'

/**
 * call api
 * @param {string} api
 * @param {string} idToken
 * @param {Object} data
 * @returns {Promise<any>}
 */
const call = function(api, idToken, data = {}) {
    return callService(`${ServiceURL}/api/${api}`, idToken, data)
    .then(res => {
        return new Promise((resolve, reject) => {
            if (res.ok) resolve(res.result)
            else reject(new ServiceError(res.error_code, res.description))
        })
    })
}

/**
 * check user is admin
 * @param {string} idToken
 * @returns {Promise<boolean>} true if user is admin
 */
const isAdmin = function(idToken) {
    return this.call('isAdmin', idToken)
}

/**
 * get user data by user id or email
 * @param {string} idToken
 * @param {string} userID
 * @param {string} email
 * @param {string} phone_number
 * @returns {Promise<Object>} user_id and user
 */
const getUser = function(idToken, userID, email,phone_number) {
    return this.call('getUser', idToken, {
        'user_id': userID,
        'email': email,
        'phone_number':phone_number
    })
}

/**
 * set user data
 * @param {string} idToken
 * @param {string} userID
 * @param {Object} setData include first_name , last_name, phone_number
 * @returns {Promise<string>} success
 */
 const setUser = function(idToken, userID, setData) {
    return this.call('setUser', idToken, {
        'user_id': userID,
        'set_data': setData
    })
}

/**
 * add user admin privilege
 * @param {string} idToken
 * @param {string} userID
 * @param {string} name admin privilege name
 * @param {Date} startTime
 * @param {Date} stopTime
 * @returns {Promise<string>} success
 */
const addAdminPrivilege = function(idToken, userID, name, startTime, stopTime) {
    return this.call('addAdminPrivilege', idToken, {
        'user_id': userID,
        'admin_privilege_name': name,
        'start_time': startTime,
        'stop_time': stopTime
    })
}

/**
 * delete user admin privilege
 * @param {string} idToken
 * @param {string} userID
 * @param {string} name admin privilege name
 * @returns {Promise<string>} success
 */
const deleteAdminPrivilege = function(idToken, userID, name) {
    return this.call('deleteAdminPrivilege', idToken, {
        'user_id': userID,
        'admin_privilege_name': name
    })
}

/**
 * get user admin privileges
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, admin_privilege_ids and admin_privileges
 */
const getAdminPrivileges = function(idToken, userID) {
    return this.call('getAdminPrivileges', idToken, {
        'user_id': userID
    })
}

/**
 * get users admin privileges
 * @param {string} idToken
 * @returns {Promise<Object>} user_ids, admin_privilege_ids and admin_privileges
 */
const getUsersAdminPrivileges = function(idToken) {
    return this.call('getUsersAdminPrivileges', idToken)
}

/**
 * set user level
 * @param {string} idToken
 * @param {string} userID
 * @param {string} name level name
 * @param {Date} startTime
 * @param {Date} stopTime
 * @returns {Promise<string>} success
 */
const setUserLevel = function(idToken, userID, name, startTime, stopTime) {
    return this.call('setUserLevel', idToken, {
        'user_id': userID,
        'level_name': name,
        'start_time': startTime,
        'stop_time': stopTime
    })
}

/**
 * get user level
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id and user_level
 */
const getUserLevel = function(idToken, userID) {
    return this.call('getUserLevel', idToken, {
        'user_id': userID
    })
}

/**
 * get user ids by level
 * @param {string} idToken
 * @param {string} name level name
 * @returns {Promise<Object>} level_name and user_ids
 */
const getUserIDsByLevel = function(idToken, name) {
    return this.call('getUserIDsByLevel', idToken, {
        'level_name': name
    })
}

/**
 * get user ids,user info by level
 * @param {string} idToken
 * @param {string} name level name
 * @returns {Promise<Object>} level_name and user_ids and users and user_levels
 */
 const getUsersByLevel = function(idToken, name) {
    return this.call('getUsersByLevel', idToken, {
        'level_name': name
    })
}

/**
 * get user stores
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, store_ids and stores
 */
const getUserStores = function(idToken, userID) {
    return this.call('getUserStores', idToken, {
        'user_id': userID
    })
}

/**
 * get store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and store
 */
const getStore = function(idToken, storeID) {
    return this.call('getStore', idToken, {
        'store_id': storeID
    })
}

/**
 * get store categories
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id, category_ids and categories
 */
const getStoreCategories = function(idToken, storeID) {
    return this.call('getStoreCategories', idToken, {
        'store_id': storeID
    })
}

/**
 * get store items
 * @param {string} idToken
 * @param {string} storeID
 * @param {boolean} published
 * @returns {Promise<Object>} store_id, item_ids and items
 */
const getStoreItems = function(idToken, storeID, published) {
    return this.call('getStoreItems', idToken, {
        'store_id': storeID,
        'published': published
    })
}

/**
 * get category
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @returns {Promise<Object>} store_id, category_id and category
 */
const getCategory = function(idToken, storeID, categoryID) {
    return this.call('getCategory', idToken, {
        'store_id': storeID,
        'category_id': categoryID
    })
}

/**
 * get category items
 * @param {string} idToken
 * @param {string} storeID
 * @param {string} categoryID
 * @param {boolean} published
 * @returns {Promise<Object>} store_id, category_id, item_ids and items
 */
const getCategoryItems = function(idToken, storeID, categoryID, published) {
    return this.call('getCategoryItems', idToken, {
        'store_id': storeID,
        'category_id': categoryID,
        'published': published
    })
}

/**
 * get item
 * @param {string} idToken
 * @param {string} itemID
 * @returns {Promise<Object>} item_id and item
 */
const getItem = function(idToken, itemID) {
    return this.call('getItem', idToken, {
        'item_id': itemID
    })
}

/**
 * get payment method data - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getPaymentMethodStoreData = function(idToken, storeID) {
    return this.call('getPaymentMethodStoreData', idToken, {
        'store_id': storeID
    })
}

/**
 * get payment method data - tappay
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getPaymentMethodTapPayData = function(idToken, storeID) {
    return this.call('getPaymentMethodTapPayData', idToken, {
        'store_id': storeID
    })
}

/**
 * get shipping channel data - store
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getShippingChannelStoreData = function(idToken, storeID) {
    return this.call('getShippingChannelStoreData', idToken, {
        'store_id': storeID
    })
}

/**
 * get messenger data - telegram bot
 * @param {string} idToken
 * @param {string} storeID
 * @returns {Promise<Object>} store_id and data
 */
const getMessengerTelegramBotData = function(idToken, storeID) {
    return this.call('getMessengerTelegramBotData', idToken, {
        'store_id': storeID
    })
}

/**
 * get create store application
 * @param {string} idToken
 * @param {string} id application form id
 * @returns {Promise<Object>} create_store_application_form_id and create_store_application_form
 */
const getCreateStoreApplicationForm = function(idToken, id) {
    return this.call('getCreateStoreApplicationForm', idToken, {
        'create_store_application_form_id': id
    })
}

/**
 * get create store applications by user id or status
 * @param {string} idToken
 * @param {string} userID
 * @param {string} status
 * @returns {Promise<Object>} user_id, status, create_store_application_form_ids and create_store_application_forms
 */
const getCreateStoreApplicationForms = function(idToken, userID, status) {
    return this.call('getCreateStoreApplicationForms', idToken, {
        'user_id': userID,
        'status': status
    })
}

/**
 * reply create store application form
 * @param {string} idToken
 * @param {string} id application form id
 * @param {boolean} accept
 * @param {string} description
 * @returns {Promise<Object>} create_store_application_form_id and store_id
 */
const replyCreateStoreApplicationForm = function(idToken, id, accept, description) {
    return this.call('replyCreateStoreApplicationForm', idToken, {
        'create_store_application_form_id': id,
        'accept': accept,
        'description': description
    })
}

/**
 * get orders
 * @param {string} idToken
 * @param {string} userID 
 * @param {string} storeID
 * @param {string} consumerID
 * @param {string} status
 * @param {Date} startTime
 * @param {Date} endTime
 * @returns {Promise<Object>} order_ids，orders
 */

 const getOrders = function(idToken, userID, storeID, consumerID,status,startTime,endTime) {
    return this.call('getOrders', idToken, {
        'user_id': userID,
        'store_id': storeID,
        'consumer_id': consumerID,
        'status': status,
        'start_time': startTime,
        'end_time': endTime
    })
}



export default {
    call,
    isAdmin,
    getUser,
    setUser,
    addAdminPrivilege,
    deleteAdminPrivilege,
    getAdminPrivileges,
    getUsersAdminPrivileges,
    setUserLevel,
    getUserLevel,
    getUserIDsByLevel,
    getUsersByLevel,
    getUserStores,
    getStore,
    getStoreCategories,
    getStoreItems,
    getCategory,
    getCategoryItems,
    getItem,
    getPaymentMethodStoreData,
    getPaymentMethodTapPayData,
    getShippingChannelStoreData,
    getMessengerTelegramBotData,
    getCreateStoreApplicationForm,
    getCreateStoreApplicationForms,
    replyCreateStoreApplicationForm,
    getOrders
}