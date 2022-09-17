import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectToDatabse, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";
import { CORS_ORIGIN } from "./constants";
import helmet from "helmet";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(helmet()); // helmet - setting headers, hiding headers

const server = app.listen(PORT, async () => {
  await connectToDatabse();
  logger.info(`Srever listening at http://localhost${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

function greacefulShutdown(signal: string) {
  process.on(signal, async () => {
    logger.info("Goodbye, got signal", signal);
    server.close();

    await disconnectFromDatabase();

    logger.info("My work here is done");

    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  greacefulShutdown(signals[i]);
}