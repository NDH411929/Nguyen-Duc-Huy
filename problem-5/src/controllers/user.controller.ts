import { Request, Response } from "express";
import * as userService from "../services/user.service";

// [GET: /users]
export const getUsers = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const users = await userService.getUsers(query);
    res.status(200).json({
      message: "Get success users",
      data: users
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong"
    });
  }
};

// [GET: /users/id]
// ID test: 67cbcf515a4e04ff59d926b2
export const detailUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await userService.getDetailUser(id);
    res.status(200).json({
      message: `Get success user: ${user.id}`,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong"
    });
  }
};

// [POST: /users]
// ID test: 67cbcf515a4e04ff59d926b2
export const createUser = async (req: Request, res: Response) => {
  try {
    const createdUser = await userService.createUser(req.body);
    res.status(201).json({
      message: `Create success user`,
      data: createdUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong"
    });
  }
};

// [PATCH: /users/:id]
// ID test: 67cbcf515a4e04ff59d926b2
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedUser = await userService.updateUser(id, req.body);
    res.status(201).json({
      message: `Update success user: ${updatedUser.id}`,
      data: updatedUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong"
    });
  }
};

// [DELETE: /users/id]
// ID test: 67cbcf515a4e04ff59d926b2
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json({
      message: `Delete success user: ${deletedUser.id}`,
      data: deletedUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Something went wrong"
    });
  }
};
