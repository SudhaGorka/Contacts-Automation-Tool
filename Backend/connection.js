const mongoose = require( 'mongoose');

const dbname = "mernoctwss10";
const dbUrl = `mongodb+srv://gorkas3502:sudhansh@cluster0.ktj1hyr.mongodb.net/${dbname}?retryWrites=true&w=majority`
// interpollation string es6...

// asynchronus function -- return krte hai Promise..
mongoose.connect(dbUrl)
.then((result) => {
    // then will be executed on connection success
    console.log("Database Connected Succesfully");
})
.catch((err) => {
    // catch will be executed on failure
    console.log("error detected");
});

module.exports = mongoose;