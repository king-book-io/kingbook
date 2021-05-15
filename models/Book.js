const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        uz: {
            type: String,
        },
        ru: {
            type: String,
        },
    },
    type: {
        type: String,
        required: true,
        enum: ["book", "video"],
    },
    image: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Book", bookSchema);
