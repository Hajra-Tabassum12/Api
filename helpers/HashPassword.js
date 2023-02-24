import bcrypt from "bcrypt"

//ADD USER
const hashUserPassword = async (password) => {
  const saltRounds = 10;
  let PasswordStore = password
  //HASH FUNCTION USED
  let hash = await bcrypt.hash(PasswordStore, saltRounds);
  return hash;
}

//Login User
const compareHashPassword = async (password, hashPassword) => {
  const userPassword = password;
  const dataBasePassword = hashPassword
  //compare user Password and hash Password
  let comparePass = await bcrypt.compare(userPassword, dataBasePassword)
  return comparePass;
}

//forget user
const forgetHashPassword = async (password) => {
  const saltRounds = 10;
  let passwordStore = password
  // hashing the password
  let forgetPasswordHash = await bcrypt.hash(passwordStore, saltRounds);
  return forgetPasswordHash;
}

export { hashUserPassword, compareHashPassword, forgetHashPassword }