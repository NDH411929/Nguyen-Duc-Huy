import express, { Router } from "express";
export const route: Router = express.Router();
import * as controller from "../controllers/user.controller";

route.get("/users", controller.getUsers);

route.get("/users/:id", controller.detailUser);

route.post("/users", controller.createUser);

route.patch("/users/:id", controller.updateUser);

route.delete("/users/:id", controller.deleteUser);

export const userRoutes: Router = route;
