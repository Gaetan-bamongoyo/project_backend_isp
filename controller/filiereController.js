const db = require('../sequelize/connector')

const Filiere = db.filiere
const Promotion = db.promotion
const True = true
const False = false

// create
const addFiliere = async (req, res)=>{
    let info = {
        designation: req.body.designation,
        section: req.body.section,
        statut: req.body.statut ? req.body.statut : true,
    }

    const filiere = await Filiere.create(info)
    res.status(200).send(filiere)
}

const getData = async (req, res)=>{
    const data = await Filiere.findAll({})
    res.status(200).send(data)
}

// create promotion
const addPromotion = async (req, res)=>{
    let info = {
        designation: req.body.designation,
        statut: req.body.statut ? req.body.statut : true,
    }

    const promotion = await Promotion.create(info)
    res.status(200).send(promotion)
}

const getPromotion = async (req, res)=>{
    const data = await Promotion.findAll({})
    res.status(200).send(data)
}

// getall

module.exports = {
    addFiliere,
    getData,
    addPromotion,
    getPromotion
}