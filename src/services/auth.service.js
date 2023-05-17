import { userRegister } from "../utils/api";

export const userAuthRegister = async (userInfo) => {
  try {
    console.log(UserInfo, "===========");
    const response = await userRegister(userInfo);
    console.log(response, "response from services");
  } catch (err) {
    console.log(err);
  }
};
