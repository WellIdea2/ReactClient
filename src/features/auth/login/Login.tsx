import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod";
import useLoginUserMutation from "../../../hooks/auth/useLoginUserMutation";
import { AuthenticationRequest } from "../../../types/auth/Auth";
import { Paths } from "../../../utils/constants";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationRequest>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useLoginUserMutation();

  const onSubmit = (data: AuthenticationRequest) => {
    mutateAsync(data, {
      onSuccess: () => {
        toast.success("Login successful.");
        navigate("/home");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            toast.error("Invalid email or password.");
          } else if (error.response?.status === 503) {
            toast.error("Service unavailable at the moment!");
          } else {
            toast.error("An error occurred!");
          }
        }
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", maxWidth: "50%", p: 2 }}
      >
        <Typography variant="h4" align="center" component={"p"}>
          Welcome to Floxie!
        </Typography>

        <TextField
          label="Email Address"
          variant="filled"
          fullWidth
          required
          sx={{ my: 1 }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          required
          sx={{ my: 1 }}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ my: 1 }}
          disabled={isPending}
        >
          {isPending ? <CircularProgress color="inherit" size={24} /> : "Login"}
        </Button>

        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link
            component="span"
            variant="body2"
            onClick={() => navigate(Paths.REGISTER)}
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
