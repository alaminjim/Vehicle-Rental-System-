import express from "express";
import { usersControllers } from "./users.controller";
import auth from "../../middleware/auth";

const routes = express.Router();

routes.get("/", auth("admin"), usersControllers.getAllUsers);
routes.put("/:userId", auth("admin", "customer"), usersControllers.updateUsers);
routes.delete("/:userId", auth("admin"), usersControllers.deleteUser);

export const userRoutes = {
  routes,
};
