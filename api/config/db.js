const logger = require("../config/logger");
const mongoose = require("mongoose");
const config = require("config");

async function connect() {
    const dbUri = config.get("dbUri");

    try {
        await mongoose.connect(dbUri);
        logger.info("Conectado ao banco de dados");
    } catch (e) {
        logger.error("A conexão falhou");
        logger.error(`Erro: ${e}`);
    }
}

module.exports = connect;