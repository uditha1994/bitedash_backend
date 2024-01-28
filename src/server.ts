import express from "express";
import cors from "cors";
import { sample_foodData, sample_tags } from "./data";

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

app.get("/api/foods/tags", (req,res)=>{
    res.send(sample_tags);
})

app.get("/api/foods/tag/:tagName", (req,res)=>{
    const tagName = req.params.tagName;
    const foods = sample_foodData.filter(Food => Food.tags?.includes(tagName));
    res.send(foods);    
})

app.get("/api/foods/:foodId", (req,res)=>{
    const foodId = req.params.foodId;
    const food = sample_foodData.find(Food => Food.id == foodId);
    res.send(food);
})

const port = 5000;
app.listen(port, ()=>{
    console.log("website served on http://localhost:"+port)
})