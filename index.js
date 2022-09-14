const express = require("express")
const app = express();
var bodyParser = require('body-parser')

app.set('views','./views')
app.set('view engine','ejs')
app.use(express.static("public")) 
app.use(bodyParser.urlencoded({
   extended: false
}))
app.get("/", (req,res) => {
    res.send("Hello World")
})
app.get("/form", (req,res) => {
    res.render("form.ejs")
})
app.post("/add", (req,res) => {
    
        res.status(200).send({
        
            status: "success",
            message: "the sum of given two number",
            sum : Number(req.body.num1) + Number(req.body.num2) 
        })      
    })

app.post("/sub", (req,res) => {
    res.status(200).send({
        status: "success",
        message: "the sum of given two number",
        subtraction : Number(req.body.num1) - Number(req.body.num2) 
    })
})

app.post("/mult", (req,res) => {
    res.status(200).send({
        status: "success",
        message: "the sum of given two number",
        multiplication : Number(req.body.num1) * Number(req.body.num2) 
    })
})

app.post("/div", (req,res) => {
    res.status(200).send({
        status: "success",
        message: "the sum of given two number",
        division : Number(req.body.num1) / Number(req.body.num2) 
    })
})

app.listen(5000, () => console.log("Express server is up"))