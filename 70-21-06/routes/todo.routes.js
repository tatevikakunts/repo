module.exports=app=>{
    const todos = require("../controllers/todo.controller")

    const router = require("express").Router()

    //Create
    router.post("/", todos.create)

    //Retrieve All
    router.get("/", todos.findAll)

    //Retrieve all by condition
    router.get("/completed", todos.findAllByCompleted)

    //Retrieve one todo
    router.get("/:id", todos.findOne)

    //Update
    router.put("/:id", todos.update)

    //Delete
    router.delete("/:id", todos.delete)

    //Delete All
    router.delete("/", todos.deleteAll)

    app.use("/api/todos", router)

}