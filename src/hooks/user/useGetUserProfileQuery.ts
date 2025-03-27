import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/user/userService";
import { UserView } from "../../types/user/User";
import { ReactQueryKeys } from "../../utils/constants";

export const useGetUserProfileQuery = () => {
  return useQuery<UserView>({
    queryKey: ReactQueryKeys.USER_PROFILE,
    queryFn: getUserProfile,
  });
};
