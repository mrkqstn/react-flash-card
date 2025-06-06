function formatResponse(statusCode, message, data = null, error = null) {
  console.log(data)
  return {
    statusCode,
    message,
    data,
    error,
  };
}

module.exports = formatResponse;