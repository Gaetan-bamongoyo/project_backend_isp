const userController = require('../controller/userController')

const router = require('express').Router()

router.post('/add', userController.addUser)
router.post('/login', userController.verifyUser)

module.exports = router