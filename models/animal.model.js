const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AnimalSchema = new Schema(
    {
        order: {
            type: String,
            required: true
        },
        suborder: {
            type: String,
            required: true
        },
        family: {
            type: String,
            required: true
        },
        genus: {
            type: String,
            required: true
        },
        scientificName: {
            type: String,
            required: true
        },
        commonName: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: false
        },
        RLT: {
            type: String,
            required: true
        },
        attribution: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: true
        },

    }
)

module.exports = mongoose.model("Animal", AnimalSchema);