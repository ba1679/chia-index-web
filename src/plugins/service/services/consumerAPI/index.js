import { ServiceError, callService } from "../..";

const ServiceURL = "https://api-consumer-service-th4n4u7taa-an.a.run.app";

/**
 * call api
 * @param {string} api
 * @param {Object} data
 * @returns {Promise<any>}
 */
export const call = function(api, data = {}) {
  return callService(`${ServiceURL}/api/${api}`, data).then(res => {
    return new Promise((resolve, reject) => {
      if (res.ok) resolve(res.result);
      else reject(new ServiceError(res.error_code, res.description));
    });
  });
};

export {
  getStores,
  getStoreAllCategoryIDs,
  getStoreCategories,
  getStoreAllItemIDs,
  getStoreCategoryAllItemIDs,
  getItems
} from "./consumer";
