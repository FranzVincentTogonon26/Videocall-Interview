import express from 'express';
import cors from 'cors';

import { serve } from 'inngest/express';
import { clerkMiddleware } from '@clerk/express';
import { functions, inngest } from './config/inngest.js';

import { ENV } from './config/env.js';
import connectDB from './config/db.js';

const app = express();
const PORT = ENV.PORT || 8000;

// Middleware
app.use(express.json());
// Credentials: true meaning => server allows a broswer to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/inngest', serve({ client: inngest, functions }));
// app.use('/protected', requireAuth(), async ( req, res ) => {
//    const { userId } = getAuth(req);
// })

connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
});
