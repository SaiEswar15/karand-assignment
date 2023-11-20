const express = require("express");
const app = express();
const Router = require("./Routes/allRoutes");
const cors = require("cors")

//body parser to read the body from the request
app.use(express.json())


//using cors to avoid errors
app.use(cors({
    origin : "*"
}))

app.use("/api/v1",Router);

module.exports = app;