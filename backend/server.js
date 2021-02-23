const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port=3001;

// //connect to express
app.use(cors());
app.use(express.json());

//connect to mongoose 
const uri=
"mongodb+srv://react-bm:bm@cluster0.gy1yv.mongodb.net/notesDB"
mongoose.connect(uri);

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongo")
})
//require route
app.use("/", require("./routes/notesRoute"))

//listen on 3001

app.listen(port, ()=>{
    console.log("express server is running on port 3001");
})