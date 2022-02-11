import { Router } from "express";
import { isAuthenticated } from "../helpers/auth";
import {renderWelcome} from "../controllers/index.controller"

const router = Router();

router.get('/welcome',renderWelcome);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", isAuthenticated,(req, res) => {
  res.render("patients/index");
});

export default router;
