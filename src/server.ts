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

app.get("/api/foods/search/:searchTerm", (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foodData.filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(foods);    
})

const port = 5000;
app.listen(port, ()=>{
    console.log("website served on http://localhost:"+port)
})