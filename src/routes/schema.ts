import { z } from "zod"

export const formSchema = z.object({
    username: z.string().min(1).max(50),
    password: z.string().min(1).max(50)
})

export type FormSchema = typeof formSchema;