const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8080;

const main = require('./views/main');
const { db } = require('./models');
const wiki = require('./routes/wiki');
const users = require('./routes/users');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));

app.use("/wiki", wiki);
app.use("/users", users);

app.get('/', (req, res) => {
    res.send(main())
})

app.listen(PORT, async () => {
    await db.sync();
    console.log('Connected to DB');
    console.log(`Listening on PORT:${PORT}`)
});

