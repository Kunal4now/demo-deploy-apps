const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: __dirname});
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});