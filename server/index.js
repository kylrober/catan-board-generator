const express = require('express');
const router = require('./router.js');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// console.log('path ', path.join(__dirname, '../client/dist'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
})