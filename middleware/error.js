const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  // insert logging here ex: winston
  // blast email if necessary
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = {
  handleError
};