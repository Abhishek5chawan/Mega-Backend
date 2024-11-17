import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; //cors and cookie parser are configured after app is created

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //parsing json request
app.use(express.urlencoded({extended: true, limit: "16kb"})) //parsing url encoded request
app.use(express.static("public")) //serves static files which are not sensitive like images
app.use(cookieParser()) //parses cookies

//routes import 

import userRouter from "./routes/user.routes.js"


//routes declaration
app.use("/api/v1/users", userRouter)

//example url : http://localhost:8000/api/v1/users/register

export { app }