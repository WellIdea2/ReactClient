import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAuth } from "../../../hooks/auth/useAuth";
import useCreateUserDetailsMutation from "../../../hooks/user-details/useCreateUserDetailsMutation";
import useEditUserDetailsMutation from "../../../hooks/user-details/useEditUserDetailsMutation";
import { Gender, WorkoutState } from "../../../types/user-details/UserDetails";

const userDetailsSchema = z.object({
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
  const { userDetail } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UserDetailsFormValues>({
    defaultValues: {
      kilograms: undefined,
      height: undefined,
      workoutState: WorkoutState.SEDENTARY,
      gender: Gender.MALE,
      age: undefined,
    },
    resolver: zodResolver(userDetailsSchema),
  });

  const { isPending: isCreatePending, mutateAsync: mutateCreateAsync } =
    useCreateUserDetailsMutation();
  const { isPending: isEditPending, mutateAsync: mutateEditAsync } = useEditUserDetailsMutation();

  useEffect(() => {
    if (userDetail) {
      reset(userDetail);
    }
  }, [userDetail, reset]);

  const onSubmit = (data: UserDetailsFormValues) => {
    if (userDetail) {
      mutateEditAsync(
        { id: userDetail.id, userData: data },
        {
          onSuccess: () => {
            reset(data);
            toast.success("Information updated successfully.");
          },
        }
      );
    } else {
      mutateCreateAsync(data, {
        onSuccess: () => {
          toast.success("Information created successfully.");
        },
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mx={3} my={5}>
      <Typography variant="h5" align="center" mb={3}>
        {userDetail ? "Edit User Details" : "Create User Details"}
      </Typography>
      <Controller
        name="kilograms"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Weight (kg)"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.kilograms}
            helperText={errors.kilograms?.message}
            onChange={(e) =>
              e.target.value === ""
                ? field.onChange(null)
                : field.onChange(parseFloat(e.target.value))
            }
          />
        )}
      />
      <Controller
        name="height"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Height (cm)"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.height}
            helperText={errors.height?.message}
            onChange={(e) =>
              e.target.value === ""
                ? field.onChange(null)
                : field.onChange(parseFloat(e.target.value))
            }
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.age}
            helperText={errors.age?.message}
            onChange={(e) =>
              e.target.value === ""
                ? field.onChange(null)
                : field.onChange(parseFloat(e.target.value))
            }
          />
        )}
      />
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
              <MenuItem key={state} value={state}>
                {state
                  .replace("_", " ")
                  .toLowerCase()
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors.workoutState && (
        <Typography color="error" variant="caption">
          {errors.workoutState.message}
        </Typography>
      )}
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
      {errors.gender && (
        <Typography color="error" variant="caption">
          {errors.gender.message}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{ mt: 2 }}
        disabled={isCreatePending || isEditPending || !isDirty}
      >
        {isCreatePending || isEditPending ? (
          <CircularProgress color="inherit" size={24} />
        ) : userDetail ? (
          "Save Changes"
        ) : (
          "Create Details"
        )}
      </Button>
    </Box>
  );
};

export default UserDetailsForm;
