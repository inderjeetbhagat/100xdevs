const express = require("express")
const app = express()

const todos = []


app.use("/static", express.static("static"))
app.use(express.urlencoded({extended: true}))

//Routes
app.get("/test", (req, res) => {
    res.send("Hello")
})

app.get("/", (req,res) => {
res.render("index.ejs", {
    name: "Inder",
    todos: todos
})
})

app.post("/", (req,res) => {
    todos.push(req.body)
    res.redirect("/")
})

app.listen(4444, ()=> {
    console.log(" Server is listening to port 4444")
})