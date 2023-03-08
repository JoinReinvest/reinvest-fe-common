import { z } from 'zod';

type envInterface = z.infer<typeof envSchema>;

const envSchema = z.object({
  apiUrl: z.string().url(),
  token: z.string(),
});

export const env: envInterface = envSchema.parse({
  apiUrl: process.env.API_URL,
  token: process.env.TOKEN,
});
