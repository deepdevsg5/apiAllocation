const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3306;

routes(app);
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;