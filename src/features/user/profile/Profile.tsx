import { Box, Typography } from "@mui/material";
import { useAuth } from "../../../hooks/auth/useAuth";
import UserDetailsForm from "./UserDetailsForm";

const UserProfilePage = () => {
  const { user, userDetail } = useAuth();
  return (
    <Box mx={3} my={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <UserDetailsForm user={user} userDetail={userDetail} />
    </Box>
  );
};

export default UserProfilePage;
