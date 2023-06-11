const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const validatePatchBody = require("./validatePatchBody");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateBody,
  isValidId,
  validatePatchBody,
  authenticate,
  upload,
};
