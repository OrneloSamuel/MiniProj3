const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const expertSchema = new Schema({
    name: String,
    description: String,
    photo_one: String,
    photo_two: String,
    photo_three: String,
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    animals: [{
        animal: {
            type: String,
            ref: CONFIG.mongodb.collections.animal
        },
        description: String,
    }],
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.expert, expertSchema);