"use server"
import db from "@/lib/db";
import { taskSchema } from "@/schemas/taskSchema";
import { z } from "zod";

export const CreateTask=async(values:z.infer<typeof taskSchema>)=>{
const newtask=await db.post.create({
    data:{
name:values.name
    }
},) 
}