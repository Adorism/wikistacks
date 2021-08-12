const router = require('express').Router();

const addPage = require('../views/addPage')
router.get("/", (req, res, next) => {
    res.send("This is the GET /wiki/");
})

router.post('/', (req, res, next) => {
    res.send("This is the POST /wiki/");
})

router.get('/add', (req, res, next) => {
    res.send(addPage());
})

module.exports = router;