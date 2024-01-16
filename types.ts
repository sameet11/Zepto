import { z } from "zod";

const responseSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    icon: z.string(),
})

export type response = z.infer<typeof responseSchema>;