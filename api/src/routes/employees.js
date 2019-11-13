import express from "express";
import checkToken from "../middleware/checkToken";

const router = express.Router();

router.get("/", checkToken, async (req, res, next) => {
  const { employee } = require("../models");
  const employees = await employee.findAll();
  res.json(employees);
});

export default router;
