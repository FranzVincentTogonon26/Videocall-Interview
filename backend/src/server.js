import express from 'express';
import path from 'path';
import cors from 'cors';

import { serve } from 'inngest/express';
import { clerkMiddleware } from '@clerk/express';
import { functions, inngest } from './config/inngest.js';

import { ENV } from './config/env.js';
import connectDB from './config/db.js';

const app = express();
const PORT = ENV.PORT || 8000;

const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Routes
app.use('/api/inngest', serve({ client: inngest, functions }));

// deployment
if (ENV.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '../frontend/dist')));
   app.get('/{*any}', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
   });
}
connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
});
