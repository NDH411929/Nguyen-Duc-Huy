import { Express } from "express";
import { userRoutes } from "./user.routes";
export default (app: Express): void => {
  app.use("/", userRoutes);
};
