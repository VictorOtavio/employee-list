import path from "path";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import indexRouter from "./routes/index";
import employeesRouter from "./routes/employees";
import loginRouter from "./routes/login";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/employees", employeesRouter);
app.use("/login", loginRouter);

export default app;
