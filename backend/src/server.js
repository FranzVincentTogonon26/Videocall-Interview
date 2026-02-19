import express from 'express';
import dotenv from 'dotenv';
import serve from 'inngest/express'
import { clerkMiddleware, getAuth, requireAuth } from '@clerk/express'
import { functions, inngest } from './config/inngest.js';
import connectDB from './config/db.js';

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(clerkMiddleware());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/protected', requireAuth(), async ( req, res ) => {
   const { userId } = getAuth(req);
})

connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
});
