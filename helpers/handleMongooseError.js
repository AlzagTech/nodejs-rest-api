const handleMongooseError = (error, data, nest) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
