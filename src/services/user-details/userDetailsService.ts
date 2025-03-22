import { UserDetailsCreateRequest, UserDetailsEditRequest, UserDetailsView } from '../../types/user-details/UserDetails';
import instance from '../config/axiosConfig';
import { userDetailsPaths } from './userDetailsPaths';

export async function getUserDetailsById(id: string) {
  const response = await instance.get<UserDetailsView>(userDetailsPaths.GET_BY_ID(id));

  return response.data;
}

export async function getUserDetailsProfile() {
  const response = await instance.get<UserDetailsView>(userDetailsPaths.ME());

  return response.data;
}

export async function createUserDetails(userDetails: UserDetailsCreateRequest) {
  const response = await instance.post<UserDetailsView>(userDetailsPaths.CREATE(), userDetails);

  return response.data;
}

export async function editUserDetails(id: string, userData: UserDetailsEditRequest) {
  const response = await instance.patch<UserDetailsView>(userDetailsPaths.EDIT(id), userData);

  return response.data;
}