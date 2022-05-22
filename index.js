const express = require("express");
const mongoose = require("mongoose");
const bodypaser = require("body-parser");
const router = require("./routes/post");
const cors = require("cors");



//data base link
const DB_URL = 'mongodb+srv://yehan123:yehan123@cluster0.3uzex.mongodb.net/MERN?retryWrites=true&w=majority';


//backend port
const PORT = process.env.PORT || 5000;


//db connection
mongoose.connect(DB_URL)
.then(()=> {
    console.log('DB connected');
}).then(() => {
    app.listen(PORT, ()=>{
        console.log(`App is running on port ${PORT}`);
    })
})
.catch((err) => console.log('DB connection error',err));




const app = express();
app.use(bodypaser.json());
app.use(cors());


app.use("/posts", require("./routes/post"));


app.get("/", (req, res)=>{
    res.send({project:"Crud"})
});



app.listenerCount(PORT);


module.exports = router;
