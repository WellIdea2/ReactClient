import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/user/userService";
import { UserCreateRequest } from "../../types/user/User";

const useRegisterUserMutation = () => {
  return useMutation({
    mutationFn: (authRequest: UserCreateRequest) => createUser(authRequest),
  });
};

export default useRegisterUserMutation;
