import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAuth } from "../../../hooks/auth/useAuth";
import useCreateUserDetailsMutation from "../../../hooks/user-details/useCreateUserDetailsMutation";
import useEditUserDetailsMutation from "../../../hooks/user-details/useEditUserDetailsMutation";
import { useDeleteUserMutation } from "../../../hooks/user/useDeleteUserMutation";
import { useEditUserMutation } from "../../../hooks/user/useEditUserMutation";
import { Gender, WorkoutState } from "../../../types/user-details/UserDetails";
import { UserRole } from "../../../types/user/User";

const userDetailsSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  role: z.nativeEnum(UserRole, { required_error: "Role is required" }),
  kilograms: z
    .number({ required_error: "Weight cannot be null" })
    .min(5, "Weight must be at least 5 kilograms"),
  height: z
    .number({ required_error: "Height cannot be null" })
    .min(50, "Height must be at least 50 cm"),
  workoutState: z.nativeEnum(WorkoutState, {
    required_error: "Workout state is required",
  }),
  gender: z.nativeEnum(Gender, {
    required_error: "Gender is required",
  }),
  age: z.number({ required_error: "Age cannot be null" }).min(1, "Age must be at least 1"),
});

type UserDetailsFormValues = z.infer<typeof userDetailsSchema>;

const UserDetailsForm = () => {
  const { userDetail, user } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UserDetailsFormValues>({
    defaultValues: {
      username: "",
      email: "",
      role: user?.role || UserRole.USER,
      kilograms: 0,
      height: 0,
      workoutState: userDetail?.workoutState || WorkoutState.SEDENTARY,
      gender: userDetail?.gender || Gender.MALE,
      age: 0,
    },
    resolver: zodResolver(userDetailsSchema),
  });

  const { isPending: isCreatePending, mutateAsync: mutateCreateAsync } =
    useCreateUserDetailsMutation();
  const { isPending: isEditUserPending, mutateAsync: mutateEditUserAsync } = useEditUserMutation();
  const { isPending: isEditDetailsPending, mutateAsync: mutateEditDetailsAsync } =
    useEditUserDetailsMutation();
  const { isPending: isDeletePending, mutateAsync: mutateDeleteAsync } = useDeleteUserMutation();

  const disableSubmitButton =
    isEditUserPending || isEditDetailsPending || isCreatePending || isDeletePending || !isDirty;
  const disableDeleteButton =
    isEditUserPending || isEditDetailsPending || isCreatePending || isDeletePending;

  useEffect(() => {
    if (userDetail || user) {
      reset({ ...userDetail, ...user });
    }
  }, [userDetail, user, reset]);

  const onSubmit = async (data: UserDetailsFormValues) => {
    try {
      await mutateEditUserAsync({
        id: user!.id,
        userData: { username: data.username },
      });

      if (userDetail?.id) {
        await mutateEditDetailsAsync({
          id: userDetail.id,
          userData: {
            kilograms: data.kilograms,
            height: data.height,
            workoutState: data.workoutState,
            gender: data.gender,
            age: data.age,
          },
        });
      } else {
        await mutateCreateAsync({
          kilograms: data.kilograms,
          height: data.height,
          workoutState: data.workoutState,
          gender: data.gender,
          age: data.age,
        });
      }
      toast.success("Information updated successfully.");
    } catch {
      toast.error("An error occurred while updating information.");
    }
  };

  const handleDelete = async () => {
    if (user) {
      try {
        await mutateDeleteAsync(user.id);
        toast.success("User deleted successfully.");
      } catch {
        toast.error("An error occurred while deleting the user.");
      }
    }
  };

  const getWorkoutStateDescription = (state: WorkoutState): string => {
    switch (state) {
      case WorkoutState.SEDENTARY:
        return "Little or no exercise.";
      case WorkoutState.LIGHTLY_ACTIVE:
        return "Light exercise or sports 1-3 days a week.";
      case WorkoutState.MODERATELY_ACTIVE:
        return "Moderate exercise or sports 3-5 days a week.";
      case WorkoutState.VERY_ACTIVE:
        return "Hard exercise or sports 6-7 days a week.";
      case WorkoutState.SUPER_ACTIVE:
        return "Very hard exercise or a physical job.";
      default:
        return "";
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mx={3} my={5}>
      {/* Email | Role */}
      <Box display="flex" gap={2} marginBottom={2}>
        <Controller
          name="email"
          control={control}
          disabled
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="role"
          control={control}
          disabled
          render={({ field }) => (
            <TextField
              {...field}
              label="Role"
              fullWidth
              margin="normal"
              error={!!errors.role}
              helperText={errors.role?.message}
            />
          )}
        />
      </Box>

      {/* Username | Age */}
      <Box display="flex" gap={2} marginBottom={2}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              margin="normal"
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Age"
              type="number"
              fullWidth
              margin="normal"
              error={!!errors.age}
              helperText={errors.age?.message}
              onChange={(e) => {
                const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
                field.onChange(value);
              }}
            />
          )}
        />
      </Box>

      {/* Kilograms | Height */}
      <Box display="flex" gap={2} marginBottom={2}>
        <Controller
          name="kilograms"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Weight"
              type="number"
              fullWidth
              margin="normal"
              error={!!errors.kilograms}
              helperText={errors.kilograms?.message}
              onChange={(e) => {
                const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
                field.onChange(value);
              }}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                },
              }}
            />
          )}
        />
        <Controller
          name="height"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Height"
              type="number"
              fullWidth
              margin="normal"
              error={!!errors.height}
              helperText={errors.height?.message}
              onChange={(e) => {
                const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
                field.onChange(value);
              }}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                },
              }}
            />
          )}
        />
      </Box>

      {/* Workout State | Gender */}
      <Box display="flex" gap={2} marginBottom={2}>
        <Controller
          name="workoutState"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              fullWidth
              margin="dense"
              displayEmpty
              error={!!errors.workoutState}
              value={field.value || WorkoutState.SEDENTARY}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {Object.values(WorkoutState).map((state) => (
                <MenuItem key={state} value={state} title={getWorkoutStateDescription(state)}>
                  {state
                    .replace("_", " ")
                    .toLowerCase()
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              fullWidth
              margin="dense"
              error={!!errors.gender}
              value={field.value || Gender.MALE}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {Object.values(Gender).map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Box>

      {/* Submit and Delete Buttons */}
      <Box display="flex" gap={2} justifyContent="flex-end" mt={3}>
        <Button variant="outlined" color="primary" type="submit" disabled={disableSubmitButton}>
          {isEditUserPending || isEditDetailsPending || isCreatePending ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Save Changes"
          )}
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          disabled={disableDeleteButton}
        >
          {isDeletePending ? <CircularProgress color="inherit" size={24} /> : "Delete Account"}
        </Button>
      </Box>
    </Box>
  );
};

export default UserDetailsForm;
