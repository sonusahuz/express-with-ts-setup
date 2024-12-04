import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute';
import { config } from './db/config';
import connectDB from './db/db';

const port = config.port || 3000;
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Connect to Database
const startServer = async () => {
  // Start Server
  await connectDB();

  app.use('/api/users', userRouter);

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

// Export app for testing or other usage
export default app;

// Start the server
startServer();
