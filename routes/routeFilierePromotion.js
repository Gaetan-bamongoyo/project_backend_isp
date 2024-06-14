// const inscriptionController = require('../controller/inscriptionController')
const filiereController = require('../controller/filiereController')

const router = require('express').Router()

router.post('/addfiliere', filiereController.addFiliere)
router.get('/getfiliere', filiereController.getData)
router.post('/addpromotion', filiereController.addPromotion)
router.get('/getpromotion', filiereController.getPromotion)

module.exports = router