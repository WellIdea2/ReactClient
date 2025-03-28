import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteUser } from "../../services/user/userService";
import { ReactQueryKeys } from "../../utils/constants";
import { useAuth } from "../auth/useAuth";

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuth();

  return useMutation<void, AxiosError, string>({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      logout();
      queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.USER] });
    },
  });
};
