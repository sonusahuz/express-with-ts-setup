import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './utils/db';
import { config } from './utils/config';
import bookRouter from './book/bookRouter';

const port = config.port || 3000;
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log HTTP requests

// Connect to Database
const startServer = async () => {
  await connectDB();

  // Routes
  app.use('/api/books', bookRouter);

  // Start Server
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

// Export app for testing or other usage
export default app;

// Start the server
startServer();
