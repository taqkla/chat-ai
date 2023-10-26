const express = require("express");
const { config } = require("dotenv");
const morgan = require("morgan");
const appRouter = require("./routes/index.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
config();
const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

module.exports = app;