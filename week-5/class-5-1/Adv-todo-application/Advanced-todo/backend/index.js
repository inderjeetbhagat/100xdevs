//write basic express boilerplate code
//with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());



app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "todo created"
    })
})
app.get("/todos", function(req, res){ 
    const todos = todo.find({});
    
})
app.put("/completed", function(req, res){
const updatePayload = req.body;
const parsedPayload = updateTodo.safeParse(updatePayload);
if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
return;
}
})

