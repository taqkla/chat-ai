const express = require('express')
const app = require("./app.js");
const dotenv = require("dotenv");
const connectToMongodb = require("./db/connections");


//dotenv
dotenv.config();

//middlewares
app.use(express.json());

const PORT = process.env.PORT || 8080;
//listen server
connectToMongodb().then(() => {
    app.listen(PORT, () => {
        console.log(
            `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
                .white
        );
    });
})

