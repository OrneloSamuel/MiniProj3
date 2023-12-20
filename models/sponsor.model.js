const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    description: String,
    motivation: String,
    photo_one: String,
    photo_two: String,
    photo_three: String,
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);