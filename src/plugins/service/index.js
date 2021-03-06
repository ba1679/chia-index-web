export class ServiceError extends Error {
  constructor(code, message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
  }

  toString() {
    return `[${this.name}] (${this.code}) ${this.message}\n${this.stack}`;
  }
}

/**
 * call service
 * @param {string} url
 * @param {Object} data
 * @returns {Promise<Object>} response json body
 */
export function callService(url, data = {}) {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, request).then(response => {
    return response.json();
  });
}

export * as consumerAPI from "./services/consumerAPI/index.js";
