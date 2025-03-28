import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserDetails } from "../../services/user-details/userDetailsService";
import { UserDetailsEditRequest, UserDetailsView } from "../../types/user-details/UserDetails";
import { ReactQueryKeys } from "../../utils/constants";

const useEditUserDetailsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserDetailsView, unknown, { id: string; userData: UserDetailsEditRequest }>({
    mutationFn: ({ id, userData }) => editUserDetails(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.USER_DETAILS] });
    },
  });
};

export default useEditUserDetailsMutation;
