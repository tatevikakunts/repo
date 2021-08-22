const express = require ("express")

const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./models")
const authRoute = require("./routes/auth.routes")

const {authJwt} = require("./middleware")

const PORT = 8080
const app = express()

let corsOptions ={
    origin:"http://localhost:3000"

}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.json({message:"hello"})
})

// db.sequelize.sync({force:true}).then(()=>{
//     console.log("Resync DB")
// })

db.sequelize.sync()

authRoute(app)

app.get("/test", [authJwt.verifyToken], (req, res)=>{
    res.send({message:"it worked"})
})

app.listen(PORT, ()=>{
    console.log(`Server on ${PORT}`)
})