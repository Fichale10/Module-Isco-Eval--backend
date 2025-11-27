 
// src/helpers/response.js
function getSuccessJSON(data, code = "SUCCESS") {
  return { success: true, code, data };
}
function getErrorJSON(error, code = "ERROR") {
  return { success: false, code, message: error.message || error.toString() };
}
module.exports = { getSuccessJSON, getErrorJSON };
