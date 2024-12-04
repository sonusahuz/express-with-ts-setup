import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      throw new Error('Connected to database successfully');
    });

    mongoose.connection.on('error', () => {
      throw new Error('Error in connecting to database.');
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    process.exit(1);
  }
};

export default connectDB;
