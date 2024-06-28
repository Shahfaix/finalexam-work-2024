"use client";
import TaskForm from "@/components/taskForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getTasks } from "@/actions/getTask";
import { Button } from "@/components/ui/button";

export default function Home() {

  const [ taskinfo, setTaskinfo]=useState<any>();

  useEffect(()=>{
 getTasks().then((data:any)=>{
  setTaskinfo(data)
 }

 )  },[taskinfo])

  return (
  <div className="bg-yellow-300 h-screen ">
 <div className="grid grid-cols-3 gap-4  ">
  <div className="bg-red-400 rounded mt-3 px-4 py-6 mx-10 flex ">
    <p className="flex justify-center items-center">Total Tasks</p>
  </div>
  <div className="bg-blue-300 rounded mt-3 px-4 py-6">
    <p className="flex justify-center items-center">Completed Tasks</p>
  </div>
  <div className="bg-green-400 rounded mt-3 px-4 py-6 mr-10">
    <p className="flex justify-center items-center">Pending</p>
  </div>


</div>
<div className="ml-10 w-[800px] mt-3">
  <TaskForm />
  </div>
  <Card className="ml-10 mr-10 mt-3">

  <CardContent>
    {
     taskinfo?.map((taskInfo:any)=>{
taskInfo.name
     })
    }
  </CardContent>
  
</Card>


  </div>
  );
}
