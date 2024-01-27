import express from "express";
import cors from "cors";
import { sample_foodData } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/api/foods", (req,res)=>{
    res.send(sample_foodData);
})

const port = 5000;
app.listen(port, ()=>{
    console.log("website served on http://localhost:"+port)
})