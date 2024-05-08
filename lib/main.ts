import express from "express";
import { router } from "./routes.ts";

const app = express();
app.use(router);

app.listen(5000, () => console.info(`Server running on port 5000!`));
