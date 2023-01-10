const express = require('express');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});

const app = express();

app.use(express.json());

const router = require('./router.js');

app.use(router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
})