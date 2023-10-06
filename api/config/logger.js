const winston = require("winston");

// Define os níveis de log personalizados, formatos e transportes
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
};

const format = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
    })
);

const transports = [
    new winston.transports.Console()
];

// Cria a instância do logger
const logger = winston.createLogger({
    level: "info", // Define o nível de log padrão aqui
    levels,
    format,
    transports
});

module.exports = logger;
