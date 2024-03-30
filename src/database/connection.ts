import mongoose from "mongoose";

let isConnected = false;
export const getConnected = async () => {
  try {
    if (isConnected) {
      console.log("already connected!");
      return;
    }
    const connection = await mongoose.connect(process.env.MONGO_URL!);

    isConnected = connection.connections[0].readyState === 1;

    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
