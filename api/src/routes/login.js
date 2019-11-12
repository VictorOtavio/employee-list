import express from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const router = express.Router();

router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Os dados do usuário devem vir do banco de dados
  const mockedUsername = "admin";
  const mockedPassword = "password";

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      const token = jwt.sign({ username }, config.jwtSecret, {
        expiresIn: "24h"
      });

      res.json({
        success: true,
        message: "Autenticação bem-sucedida!",
        token
      });
    } else {
      res.send(403).json({
        success: false,
        message: "Nome de usuário ou senha incorretos."
      });
    }
  } else {
    res.send(400).json({
      success: false,
      message: "A autenticação falhou! Por favor, verifique os dados enviados."
    });
  }
});

export default router;
