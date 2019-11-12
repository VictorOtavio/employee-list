import express from "express";
import checkToken from "../middleware/checkToken";

const router = express.Router();

router.get("/", checkToken, (req, res, next) => {
  res.json({
    success: true,
    message: "Index page"
  });
});

export default router;
