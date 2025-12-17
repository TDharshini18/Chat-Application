//todo
import dotenv from 'dotenv';
dotenv.config();


export const ENV={
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMIAL_FROM: process.env.EMIAL_FROM,
    EMIAL_FROM_NAME: process.env.EMIAL_FROM_NAME,
};