import express from "express";
import checkToken from "../middleware/checkToken";

const router = express.Router();

router.get("/", checkToken, (req, res, next) => {
  // Timeout para simular delay na conexão
  setTimeout(async () => {
    const { employee } = require("../models");
    const employees = await employee.findAll();
    res.json(employees);
  }, 2000);
});

export default router;
