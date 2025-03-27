import { jwtDecode } from "jwt-decode";
import { UserView } from "../../types/user/User";

interface JwtPayloadWithExp extends UserView {
  exp: number;
}

export const getUserFromJwt = (jwtToken: string): UserView | null => {
  try {
    const decoded = jwtDecode<UserView>(jwtToken);
    return decoded;
  } catch (error) {
    console.error("Invalid JWT token:", error);
    return null;
  }
};

export const getJwtExpiry = (jwtToken: string): Date | null => {
  try {
    const decoded = jwtDecode<JwtPayloadWithExp>(jwtToken);
    const expiryDate = new Date(decoded.exp * 1000);
    return expiryDate;
  } catch (error) {
    console.error("Invalid JWT token:", error);
    return null;
  }
};
