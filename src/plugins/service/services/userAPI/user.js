import { call } from '.'

/**
 * get user
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id and user
 */
const getUser = function(idToken, userID) {
    return call('getUser', idToken, {
        'user_id': userID
    })
}

/**
 * get invitation code
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, invitation_code_id and invitation_code
 */
const getInvitationCode = function(idToken, userID) {
    return call('getInvitationCode', idToken, {
        'user_id': userID
    })
}

/**
 * is invitation code exist
 * @param {string} idToken
 * @param {string} invitationCode
 * @returns {Promise<Object>} invitation_code_id and is_exist
 */
const isInvitationCodeExist = function(idToken, invitationCode) {
    return call('isInvitationCodeExist', idToken, {
        'invitation_code_id': invitationCode
    })
}

/**
 * get user level
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id and user_level
 */
const getUserLevel = function(idToken, userID) {
    return call('getUserLevel', idToken, {
        'user_id': userID
    })
}

/**
 * get user limits
 * @param {string} idToken
 * @param {string} userID
 * @returns {Promise<Object>} user_id, published_item_quantity, push_store_message_interval, push_store_message_quantity
 */
 const getUserLimits = function(idToken, userID) {
    return call('getUserLimits', idToken, {
        'user_id': userID
    })
}

export {
    getUser,
    getUserLimits,
    getInvitationCode,
    isInvitationCodeExist,
    getUserLevel
}
