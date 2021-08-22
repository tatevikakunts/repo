const express = require("express")
const cors = require("cors")
const PORT = 8080

const db = require("./models")
const router = require("./routes/todo.routes")

const app = express()

let corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>{
        console.log("Connected to database")
    })
    .catch(err=>{
        console.log("Cannot connect to database", err)
        process.exit()
    })

app.get("/", (req, res)=>{
    res.json({message:"hello"})
})

router(app)

app.listen(PORT, ()=>{
    console.log(`Server is on ${PORT}`)
})