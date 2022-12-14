const {Schema, model} = require('../connection');

const schema = new Schema({
    fullname : {type : String, default : 'Anonymous'},
    email : String,
    password : String,
    contact : String,
    age : Number
});

module.exports = model('users', schema);