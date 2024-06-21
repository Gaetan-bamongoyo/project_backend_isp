const db = require('../sequelize/connector')

const Inscription = db.inscription
const True = true
const False = false

// create
const addInscription = async (req, res)=>{
    let info = {
        annee: req.body.annee,
        etudiant_id: req.body.etudiant_id,
        filiere_id: req.body.filiere_id,
        promotion_id: req.body.promotion_id
    }

    const inscription = await Inscription.create(info)
    res.status(200).send(inscription)
}

// getall
const getAllInscription = async (req, res)=> {
    let inscription = await Inscription.findAll({})
    res.status(200).send(inscription)
}

module.exports = {
    addInscription,
    getAllInscription
}