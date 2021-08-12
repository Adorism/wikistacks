const router = require('express').Router();

const { Page } = require('../models');
const { addPage, wikiPage } = require('../views')


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

})

router.get('/add', (req, res, next) => {
    res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        })
        res.send(wikiPage(page));
    } catch (error) {
        next(error)
    }

});

module.exports = router;