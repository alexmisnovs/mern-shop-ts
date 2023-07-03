import { Router, Request, Response } from "express";
import User from "../models/userModel";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find().exec();
  res.status(200).json(users);
});

export { router };
