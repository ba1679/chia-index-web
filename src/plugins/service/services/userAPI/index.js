import { ServiceError, callService } from "../..";

const ServiceURL = "https://api-user-service-th4n4u7taa-an.a.run.app";

/**
 * call api
 * @param {string} api
 * @param {string} idToken
 * @param {Object} data
 * @returns {Promise<any>}
 */
export const call = function(api, idToken, data = {}) {
  return callService(`${ServiceURL}/api/${api}`, idToken, data).then(res => {
    return new Promise((resolve, reject) => {
      if (res.ok) resolve(res.result);
      else reject(new ServiceError(res.error_code, res.description));
    });
  });
};

export {
  getUser,
  getUserLimits,
  getInvitationCode,
  isInvitationCodeExist,
  getUserLevel
} from "./user";

export { getUserStores, getStore } from "./store";
