const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    telegram_id: {
        type: String,
        unique: true,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);
