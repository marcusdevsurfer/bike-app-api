import app from './app'
import dotenv from 'dotenv';
import connectDB from './config/db';
dotenv.config();
const port = process.env.APP_PORT || 3000;

connectDB();
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
  });