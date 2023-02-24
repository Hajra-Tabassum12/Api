import { AddUserService, LoginService, forgetPasswordServices } from "../services/UserServices.js"

//add user
export const addUserController = async (req, res) => {
      //DESTRUCTURED OBJECT
      let { mobileNumber, Name, password, userId, email } = req.body;
      let data = await AddUserService(mobileNumber, Name, userId, password, email)
      res.json({ data })
}

//loginUser

export const LoginController = async (req, res) => {
      let { userId, password } = req.body;
      let data = await LoginService(userId, password)
      res.json({ data })
}

//forget password

export const forgetPasswordController = async (req, res) => {
      let { mobileNumber, password } = req.body;
      let status = await forgetPasswordServices(mobileNumber, password)
      res.json({ "status": status })
}



