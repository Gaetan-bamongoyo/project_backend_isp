const { where } = require('sequelize')
const db = require('../sequelize/connector')

const User = db.user

// create
const addUser = async (req, res)=>{
    const { username } = req.body;
    const check = await User.findOne({where: {username}});
    let info = {
        username: req.body.username,
        password: req.body.password,
        filiere: req.body.filiere,
    }
    if(check){
        res.status(401).send([])
    }else{
        const user = await User.create(info)
        res.status(200).send(user)
    }
}

const verifyUser = async (req, res)=>{
    const { username, password } = req.body;
    if (!username || !password){
        return res.status(400)
    }else{
        try{
            const user = await User.findOne({where: {username, password}});
            if(user){
                res.status(200).send(user)
            }else{
                res.status(401).send([])
            }
        }catch(error){
            res.send(500)
        }
    }
}

module.exports = {
    addUser,
    verifyUser
}