import app from "./app";
import env from "./utils/validateEnv";

import connectDB from "./config/db";

connectDB();

const PORT = env.PORT || 8000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
}
