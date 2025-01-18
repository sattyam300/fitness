import dotenv from 'dotenv';  // Use import for dotenv

dotenv.config();  // Load environment variables

export const MONGO_URI = process.env.MONGO_URI;  // Export MONGO_URI
export const JWT_SECRET = process.env.JWT_SECRET;  // Export JWT_SECRET
