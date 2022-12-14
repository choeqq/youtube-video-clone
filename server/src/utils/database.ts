import mongoose from "mongoose";
import logger from "./logger";

const DB_CONNECTION_STRING =
  "mongodb://mongo:pEhI12sBbF59TVdcCzY5@containers-us-west-39.railway.app:7471" ||
  "mongodb://localhost:27017/youtube-clone";

export async function connectToDatabse() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);

    logger.info("Connected to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnected from database");

  return;
}
