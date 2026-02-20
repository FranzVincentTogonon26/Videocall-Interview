import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const ENV = {
   PORT: process.env.PORT,
   NODE_ENV: process.env.NODE_ENV,
   CLIENT_URL: process.env.CLIENT_URL,
   MONGO_URL: process.env.MONGO_URL,
   INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
   INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
   STREAM_API_KEY: process.env.STREAM_API_KEY,
   STREAM_API_SECRET: process.env.STREAM_API_SECRET,
};
