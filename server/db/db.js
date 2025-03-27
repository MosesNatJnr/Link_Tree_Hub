import mongoose from "mongoose";
export const connectdb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { dbName: "template" });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
    }
  };

