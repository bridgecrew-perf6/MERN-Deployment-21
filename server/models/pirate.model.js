const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Pirate name is required"],
        minlength: [4, "Name must be at least 4 characters"]
    },
    image : {
        type: String,
        required: [true, "Image URL  is required"],
        minlength: [7, "Image URL be at least 7 characters"]
    },
    chests : {
        type: Number,
        required: [true, "Number of chests is required"],
        min: [0, "Number of chests must be positive"]
    },
    phrase : {
        type: String,
        required: [true, "Pirate phrase is required"],
        minlength: [5, "Phrase mush be at least 5 characters"]
    },
    position : {
        type: String,
        required: [true, "Crew position is required"],
        minlength: [5, "Crew position must be at least 5 characters"]
    },
    pegleg : {
        type: Boolean,
        required: [true, "Peg leg status is required"]
    },
    eyepatch : {
        type: Boolean,
        required: [true, "Eye patch status is required"]
    },
    hookhand : {
        type: Boolean,
        required: [true, "Hook hand status is required"]
    }
}, {timestamps : true})

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);