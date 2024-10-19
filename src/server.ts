import app from './app'
import dotenv from 'dotenv';
import connectDB from './config/db';
dotenv.config();
const port = process.env.APP_PORT || 3000;


app.listen(port, async () => {
    await connectDB();
    console.log(`Server running at port: ${port}`);
  });