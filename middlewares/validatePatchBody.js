const { HttpError } = require("../helpers");

const validatePatchBody = (schema) => {
  const func = (req, res, next) => {
    console.log(req.path);
    const keys = Object.keys(req.body);
    if (!keys.length) {
      next(HttpError(400, `missing field favorite`));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(
        HttpError(400, `missing required ${error.details[0].path[0]} field`)
      );
    }
    next();
  };

  return func;
};

module.exports = validatePatchBody;
