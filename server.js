const express = require('express')
const cors = require('cors')
// const sequelize = require('./sequelize/connector')

// sequelize.sync().then(()=> console.log('logging'))

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
const routeretudiant  = require('./routes/routeEtudiant')
const routerinscription = require('./routes/routeInscription')
const routerfilierepromotion = require('./routes/routeFilierePromotion')
const routerUser = require('./routes/user')
app.use('/isp/etudiant', routeretudiant)
app.use('/isp/operation', routerinscription)
app.use('/isp/filierepromotion', routerfilierepromotion)
app.use('/user', routerUser)

// test api
app.get('/', (req, res)=>{
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, ()=>{
    console.log('server is running on port')
})