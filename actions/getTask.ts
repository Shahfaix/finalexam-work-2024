"use server"
import db from "@/lib/db"
import prisma from "@/lib/db"

export const getTasks=async()=>{
 return await prisma.post.findMany()
}