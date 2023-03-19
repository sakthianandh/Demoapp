const { errorLogger } = require('../logger/index')

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  errorLogger.error({
    message: err.message,
    // stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    body: req.body
  }) 
  
  res.status(statusCode).json({ error: message });
}

module.exports = errorHandler
