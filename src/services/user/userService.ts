import { UserCreateRequest, UserEditRequest, UserFilter, UserView } from "../../types/user/User";
import instance from "../config/axiosConfig";
import { userPaths } from "./userPaths";

export async function getAllUsers(page: number, size: number, filter: UserFilter) {
  const response = await instance.get<UserView[]>(userPaths.GET_ALL(), {
    params: { page, size, ...filter },
  });

  return response.data;
}

export async function getUserById(id: string) {
  const response = await instance.get<UserView>(userPaths.GET_BY_ID(id));

  return response.data;
}

export async function createUser(userDetails: UserCreateRequest) {
  const response = await instance.post<UserView>(userPaths.CREATE(), userDetails);

  return response.data;
}

export async function editUser(id: string, userData: UserEditRequest) {
  const response = await instance.patch<UserView>(userPaths.EDIT(id), userData);

  return response.data;
}
export async function deleteUser(id: string): Promise<void> {
  await instance.delete(userPaths.DELETE(id));
}

export async function getUserProfile() {
  const response = await instance.get<UserView>(userPaths.ME());

  return response.data;
}
