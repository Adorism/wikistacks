// require express
const router = require('express').Router();
// const userList = require('../views/userList')

router.get("/", (req, res, next) => {
    res.send("This is the GET /users/")
})
router.post('/', (req, res, next) => {
    res.send("This is the POST /users/");
})

router.get('/add', (req, res, next) => {
    res.send("This is the GET /users/add/");
})
module.exports = router;

