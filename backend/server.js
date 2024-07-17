const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get("/" , (req,res) =>{
    res.send("api is running");
})

app.get("/api/chats" , (req,res) =>{
    res.send(chats)
})

const PORT = process.env.PORT || 5000;


app.listen(5000,console.log(`Server started on port ${PORT}`))