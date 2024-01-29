import { Schema,model } from "mongoose";

export interface Food{
    id:string;
    name:string;
    price:number;
    tags:String[];
    favorite:boolean;
    stars:number;
    imageurl:string;
    origins:string[];
    cooktime:string;
}

export const FoodSchema = new Schema<Food>(
    {
        name:{type: String, required:true},
        price:{type: Number, required:true},
        tags:{type: [String]},
        favorite:{type: Boolean, default:false},
        imageurl:{type: String, required:true},
        origins:{type: [String], required:true},
        cooktime:{type: String, required:true}

    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
);

export const FoodModel = model<Food>('food',FoodSchema);