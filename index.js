const mongoose = require("mongoose")
const express = require("express")
const app = express()

const DATABASE = "mongodb+srv://suraj:srj@cluster0.ykrl7u5.mongodb.net/testup?retryWrites=true&w=majority"
mongoose.connect(DATABASE)
.then(() =>{
console.log("database connected successfully");
})
.catch(()=>{
    console.log("Error in database connection");
});

app.get("/",(req, res) =>{
res.json({
    message: "you are visiting root route"
})
});

app.listen(8000, ()=>{
    console.log("8000 is ready to server....");
});