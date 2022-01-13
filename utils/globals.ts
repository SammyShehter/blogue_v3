import { env } from '../deps.ts'

env({ export: true })

export const __dirname = new URL('.', import.meta.url).pathname
export const PORT = Deno.env.get('PORT')
export const USERS_SERVICE = Deno.env.get('USERS_SERVICE')
export const API_KEY = Deno.env.get('API_KEY')
export const POSTGRES_USER = Deno.env.get('POSTGRES_USER')
export const POSTGRES_PASSWORD = Deno.env.get('POSTGRES_PASSWORD')
export const POSTGRES_DB = Deno.env.get('POSTGRES_DB')
