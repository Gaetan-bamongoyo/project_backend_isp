const inscriptionController = require('../controller/inscriptionController')

const router = require('express').Router()

router.post('/add', inscriptionController.addInscription)
router.get('/show', inscriptionController.getAllInscription)

module.exports = router