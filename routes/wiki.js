const router = require('express').Router();

const { Page } = require('../models');
const { addPage } = require('../views')

router.get("/", (req, res, next) => {
    res.send("This is the GET /wiki/");
})

router.post('/', (req, res, next) => {
    const { author, title, email, content, status } = req.body;
    try {
        const page = Page.create({
            author, title, email, content, status 
        });
        res.redirect('/')
    } catch(err) { next(err) }
    res.send("This is the POST /wiki/");
})

router.get('/add', (req, res, next) => {
    res.send(addPage());
})

module.exports = router;