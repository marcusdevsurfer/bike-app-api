import app from './app'
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
  });