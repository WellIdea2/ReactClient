import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/user/userService";
import { UserView } from "../../types/user/User";
import { ReactQueryKeys } from "../../utils/constants";

export const useGetUserByIdQuery = (id: string | undefined) => {
  return useQuery<UserView>({
    queryKey: ReactQueryKeys.USER_BY_ID(id || ""),
    queryFn: () => {
      if (id) {
        return getUserById(id);
      }
      throw new Error("ID is undefined");
    },
    enabled: !!id,
  });
};
