import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/authService";
import { AuthenticationRequest, AuthenticationResponse } from "../../types/auth/Auth";
import { useAuth } from "./useAuth";

const useLoginUserMutation = () => {
  const { login: loginInApp } = useAuth();

  return useMutation({
    mutationFn: (authRequest: AuthenticationRequest) => login(authRequest),
    onSuccess: (data: AuthenticationResponse) => {
      loginInApp(data.accessToken);
    },
    onError: () => {},
  });
};

export default useLoginUserMutation;
