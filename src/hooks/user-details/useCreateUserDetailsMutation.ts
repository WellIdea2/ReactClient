import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserDetails } from "../../services/user-details/userDetailsService";
import { UserDetailsCreateRequest, UserDetailsView } from "../../types/user-details/UserDetails";
import { ReactQueryKeys } from "../../utils/constants";

const useCreateUserDetailsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserDetailsView, unknown, UserDetailsCreateRequest>({
    mutationFn: (userDetails: UserDetailsCreateRequest) => createUserDetails(userDetails),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.USER_DETAILS] });
    },
  });
};

export default useCreateUserDetailsMutation;
