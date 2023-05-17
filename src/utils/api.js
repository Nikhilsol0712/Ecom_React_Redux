import axios from "axios";
import { BASE_URL } from "./assets";

export const userRegister = async ({ userInfo }) => {
  console.log(userInfo, "==========userInfo=============");
  try {
    const response = await axios.post(
      `${BASE_URL}/ecomm/api/v1/auth/signup`,
      userInfo
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
