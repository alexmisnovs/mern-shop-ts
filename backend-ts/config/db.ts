import mongoose from "mongoose";
import env from "../utils/validateEnv";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_ATLAS_URI);
    //TODO: make sure the uri will always be string
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
