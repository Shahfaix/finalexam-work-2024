
"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema } from '@/schemas/taskSchema'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { CreateTask } from '@/actions/createTask'



const TaskForm = () => {
    const form = useForm<z.infer<typeof taskSchema>>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
          name: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof taskSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        CreateTask(values)
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
           
            <FormControl>
              <Input placeholder="Enter task name here" {...field} />
            </FormControl>
          
            <FormMessage />
          </FormItem>
         
        )}
      />
        <Button type="submit">Submit</Button>

      
    </form>
  </Form>
  )
}

export default TaskForm
