const {Schema, model, Types} = require('../connection');

const schema = new Schema({
    title : String,
    data : Array,
    createdAt : Date,
    saved : {type : Boolean, default: false},
    user : {type : Types.ObjectId, ref: 'users'}
});

module.exports = model('sheets', schema);