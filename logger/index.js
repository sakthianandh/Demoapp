const winston = require('winston')

const errorLogger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log' })
    ]
})

const infoLogger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/info.log' })
    ]
})

module.exports = {
    errorLogger,
    infoLogger
}