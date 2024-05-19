import express from "express";
import connectDB from "./utils/db";
import { config } from "./utils/config";

const port = config.port || 3000;
const app = express();

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();
