import { Router } from "express";
import { UserController } from "../controllers/user.js";

const UserRouter = () => {
  const router = Router();
  const userController = UserController();

  router.get("/", userController.getUsers);

  return router;
};

export { UserRouter };
