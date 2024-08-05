import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import AuthRoute from "./Routes/AuthRoute.js"
import NoteRoute from "./Routes/NoteRoute.js"



dotenv.config()
const Diary_DB = process.env.APP_SERVER;
const app = express();


app.use(express.static('public'));


app.use(bodyParser.json({limit:"300mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "300mb", extended: true}));
app.use(cors());


mongoose.connect(Diary_DB)
       .then(()=>app.listen(5000, console.log("listening at port ", 5000)))
       .catch((error)=> console.log("this is the ", error))


app.use("/auth", AuthRoute);
app.use("/note", NoteRoute);