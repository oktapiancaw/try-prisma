import { z } from 'zod'

const envSchema = z.object({

    BASE_PORT: z.string(),

    MONGO_DATABASE: z.string(),
    MONGO_HOST: z.string(),
    MONGO_PORT: z.string(),
    
})

export const env = envSchema.parse(process.env)