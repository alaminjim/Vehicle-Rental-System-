import express from "express";
import { signinController } from "./signin.controller";

const route = express.Router();

route.post("/", signinController.signinUser);

export const signinRoute = {
  route,
};
