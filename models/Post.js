const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    code: {
        type:Number,
        require:true,
        maxlength:3
    },
    price: {
        type:Number,
        require:true
    },
    quantity: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
});

module.exports = {
    Post: mongoose.model("grocery", PostSchema),
};