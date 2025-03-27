import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as z from "zod";
import useRegisterUserMutation from "../../hooks/auth/useRegisterUserMutation";
import { UserCreateRequest } from "../../types/user/User";
import { Paths } from "../../utils/constants";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Email should be valid" })
    .nonempty({ message: "Email cannot be blank" }),
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long" })
    .nonempty({ message: "Username cannot be blank" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password must not exceed 30 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[!@#$%^&*()_+]/, {
      message: "Password must contain at least one special character (!@#$%^&*()_+)",
    })
    .refine((password) => !/\s/.test(password), { message: "Password cannot contain whitespace" }),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateRequest>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useRegisterUserMutation();

  const onSubmit = (data: UserCreateRequest) => {
    mutateAsync(data, {
      onSuccess: () => {
        toast.success("Registration successful. Please log in.");
        navigate("/login");
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
          Create an Account
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
          label="Username"
          variant="filled"
          fullWidth
          required
          sx={{ my: 1 }}
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
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
          {isPending ? <CircularProgress color="inherit" size={24} /> : "Register"}
        </Button>

        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link
            component="span"
            variant="body2"
            onClick={() => navigate(Paths.LOGIN)}
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
