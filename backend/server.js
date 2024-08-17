import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`) // Changed to template literal
})

// mongodb+srv://00a20j50:anuj1212@cluster0.jvzh9.mongodb.net/?