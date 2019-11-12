import path from "path";
import cors from "cors";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index";
import employeesRouter from "./routes/employees";
import authRouter from "./routes/auth";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    exposedHeaders: "*"
  })
);

app.use("/", indexRouter);
app.use("/employees", employeesRouter);
app.use("/auth", authRouter);

export default app;
