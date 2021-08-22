const express = require ("express")
const PORT = 3000
const bodyParser= require("body-parser") //library for processing the data

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.engine("html", require("ejs").renderFile)
//app.set("view engine", "html")

app.get("/", (request, response)=>{
    //response.send("<h1>Hello, World</h1>")
    response.sendFile(__dirname+"/pages/index.html")
}) // root file endpoint

app.post("/say-hello.html", (request, response)=>{
    //response.json(request.body)
    response.render(__dirname + "/pages/say-hello.html", request.body)
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})