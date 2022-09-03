import express from "express";
import {
  getUsers,
  login,
  logout,
  refreshToken,
  register,
  getUser,
} from "../controller/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/login", login);
router.post("/user/logout", logout);

router.get("/refresh_token", refreshToken);

router.get("/user/all", getUsers);
router.get("/user/:_id", auth, getUser);
export default router;
