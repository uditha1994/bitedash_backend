import { Router } from "express";
import { sample_foodData, sample_tags } from "../data";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req,res)=>{
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount > 0){
            res.send("seed is already done");
            return;
        }
        
        await FoodModel.create(sample_foodData);
        res.send("Seed is Done");
    }
))

router.get("/", (req,res) => {
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