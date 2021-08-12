const express = require('express');
const morgan = require('morgan');
const app = express();

const main = require('./views/main')
const { db } = require('./models');

app.use(morgan('dev'));
app.use(express.static('public'));

app.use(express.urlencoded());

const PORT = 8080;

app.get('/', (req, res) => {
    res.send(main())
})

app.listen(PORT, async () => {
    await db.sync();
    console.log('Connected to DB');
    console.log(`Listening on PORT:${PORT}`)
});

