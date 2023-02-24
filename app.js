
import express from "express"
import UserRoute from "./Routes/UserRoute.js";
import connectDB from "./db/connection.js";
import dotenv from "dotenv"
const app = express()

//CONNECTION TO .ENV 
dotenv.config()
const port = process.env.PORT || 7000;

//CONNECTED TO DATABASE
const url = process.env.DATABASEURL
const dbname = process.env.DATABASENAME
connectDB(url, dbname)

//EXPRESS BY DEFAULT BODY-PARSER
app.use(express.urlencoded({ extended: true }))

// ROUTE
app.use('/', UserRoute)

//CONNECTED TO SERVER
app.listen(port, () => {
    console.log(`server started at ${port}`);
})