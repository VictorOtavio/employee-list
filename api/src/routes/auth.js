import express from "express";
import jwt from "jsonwebtoken";
import config from "../../config";

const router = express.Router();

router.post("/", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // Os dados do usuário devem vir do banco de dados
  const mockedEmail = "email@exemplo.com.br";
  const mockedPassword = "senhadeacesso";

  if (email && password) {
    if (email === mockedEmail && password === mockedPassword) {
      const token = jwt.sign({ email }, config.jwtSecret, {
        expiresIn: "24h"
      });

      res.append("Authorization", "Bearer " + token).json({ token });
    } else {
      res.status(403).json({
        success: false,
        message: "Nome de usuário ou senha incorretos."
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "A autenticação falhou! Por favor, verifique os dados enviados."
    });
  }
});

export default router;
