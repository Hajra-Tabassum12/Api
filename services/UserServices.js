import UserModel from "../models/UserModel.js";
import { compareHashPassword, hashUserPassword, forgetHashPassword } from "../helpers/HashPassword.js";

//ADD USER 
const AddUserService = async (mobileNumber, Name, userId, password, email) => {
   // CONVERT NORMAL PASSWORD INTO HASH PASSWORD
   let hashPassword = await hashUserPassword(password)
   //ADD NEW USER IN DATABASE   
   let obj1 = new UserModel({ mobileNumber: mobileNumber, Name: Name, password: hashPassword, userId: userId, email: email })
   return await obj1.save()
}

//LOGIN USER
const LoginService = async (userId, password) => {
   //hash password
   let hashPassword = await hashUserPassword(password)
   //compare hash password
   let compareData = await compareHashPassword(password, hashPassword)
   if (compareData == true) {
      return "success";
   } else {
      return "fail";
   }
}

//forget password
const forgetPasswordServices = async (mobileNumber, password) => {
   //find user from database
   const userData = await UserModel.findOne({ mobileNumber })
   if (userData) {
      //hashing new password 
      let newHashPassword = await forgetHashPassword(password)
      try {
         //update user with new password
         const updateUserPassword = await UserModel.updateOne({ password: newHashPassword })
         return 'success'
      } catch (error) {
         return 'failed'
      }
   }
}
export { AddUserService, LoginService, forgetPasswordServices }