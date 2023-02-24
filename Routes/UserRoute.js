import express from "express"
import { addUserController, LoginController, forgetPasswordController } from "../controllers/UserController.js";
const UserRoute = express.Router()

UserRoute.post('/addUser', addUserController)
UserRoute.post('/loginUser', LoginController)
UserRoute.post('/forgetPassword', forgetPasswordController)

export default UserRoute;