const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT);

