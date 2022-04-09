const express = require('express');
const app = express();

require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const mysql = require('mysql');
const userRouter = require("./api/users/user.router");

//import routes

app.use("/api/users", userRouter);






//routes
app.get('/', (req, res) => {
    res.send('homepage');
});


//listening to the server
app.listen(process.env.APP_PORT, () =>{
    console.log("API server is up on port", process.env.APP_PORT);
});

//conncet to DB

