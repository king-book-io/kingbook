const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
    name: String,
    phone: String,
    book: String,
    order_from: String,
    type: String,
    username: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Note", notesSchema);
