import { Router } from "express";
import { sample_foodData, sample_tags } from "../data";

const router = Router();

router.get("/", (req,res)=>{
    res.send(sample_foodData);
})

router.get("/search/:searchTerm", (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foodData.filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(foods);    
})

router.get("/tags", (req,res)=>{
    res.send(sample_tags);
})

router.get("/tag/:tagName", (req,res)=>{
    const tagName = req.params.tagName;
    const foods = sample_foodData.filter(Food => Food.tags?.includes(tagName));
    res.send(foods);    
})

router.get("/:foodId", (req,res)=>{
    const foodId = req.params.foodId;
    const food = sample_foodData.find(Food => Food.id == foodId);
    res.send(food);
})

export default router;