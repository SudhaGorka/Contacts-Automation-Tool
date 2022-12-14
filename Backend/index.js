// importing express modules
const express = require( 'express');
const userRouter = require('./routers/userRouter');    //   <--relative path
const sheetRouter = require('./routers/sheetRouter');    //   <--relative path
const cors = require('cors');
// initializing express
const app = express();

// port defining
const port = 5000;

app.use(cors({
    origin: [ 'http://localhost:3000']
}));

//json data to js
app.use(express.json());

// using Middleware
app.use('/user', userRouter);
app.use('/sheet', sheetRouter);
//route


app.get('/home', (request, response) => {
    // send function js used for string responses..
    response.send('requested accepted for home')
})

app.get('/login', (request, response) => {
    // send function js used for string responses..
    response.send('requested accepted for login')
})

//starting the server
app.listen(port, () => {
    console.log("express server started")
});
