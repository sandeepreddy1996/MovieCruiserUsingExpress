const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    poster_path: String,
    title:String,
    vote_average: Number,
    userComments: String,
    id: Number
    
}, {collection: 'favorites', versionKey: false});

schema.index({id: 1}, {unique: true});

const model = mongoose.model('favorites', schema);

module.exports = {
    favoritesEntity: model
};