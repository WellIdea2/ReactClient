import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { editUser } from "../../services/user/userService";
import { UserEditRequest, UserView } from "../../types/user/User";
import { ReactQueryKeys } from "../../utils/constants";

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserView, AxiosError, { id: string; userData: UserEditRequest }>({
    mutationFn: ({ id, userData }) => editUser(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.USER] });
    },
  });
};
