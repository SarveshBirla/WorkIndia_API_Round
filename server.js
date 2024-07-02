import express from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import pool from "./config/db.js";
import signup from "./routes/signup.js";
import bodyParser from "body-parser";

// configure dotenv
dotenv.config();

const app=express();
const PORT=process.env.PORT || 8080;
//middleswares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use("/api",signup);



// conditionally listen
pool.query("SELECT 1")
.then(()=>{
    // MY SQL
    console.log("DB Connected");

    // listen
    app.listen(PORT,()=>{
        console.log(`Server running on PORT ${PORT}`);
    })
} 
)
.catch((error)=>{
    console.log(error);
});
//listen

