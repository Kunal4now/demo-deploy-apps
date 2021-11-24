const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});