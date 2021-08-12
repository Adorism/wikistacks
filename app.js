const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.use(express.urlencoded());

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));

