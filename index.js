const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb+srv://Ihor:1234qwer@cluster0-9wyge.azure.mongodb.net/bicycles?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,   
});
//mongodb://localhost/bicycles-db
//mongodb+srv://Ihor:1234qwer@cluster0-9wyge.azure.mongodb.net/bicycles?retryWrites=true&w=majority

app.use(bodyParser.json());//парсер будет читат данные только  в формате json
app.use("/api", require("./api"))

app.listen(4000, ()=>{
    console.log("server is listening");
}) 