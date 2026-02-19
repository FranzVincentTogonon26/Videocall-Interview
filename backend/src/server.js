import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes

connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
});
