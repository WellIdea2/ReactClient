import { useQuery } from "@tanstack/react-query";
import { getUserDetailsProfile } from "../../services/user-details/userDetailsService";
import { UserDetailsView } from "../../types/user-details/UserDetails";
import { ReactQueryKeys } from "../../utils/constants";

export const useGetUserDetailsProfileQuery = (enabled: boolean) => {
  return useQuery<UserDetailsView>({
    queryKey: ReactQueryKeys.USER_DETAILS_PROFILE,
    queryFn: getUserDetailsProfile,
    enabled,
  });
};
