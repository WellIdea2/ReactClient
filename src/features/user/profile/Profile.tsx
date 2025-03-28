import { Box, Typography } from "@mui/material";
import UserDetailsForm from "./UserDetailsForm";

const UserProfilePage = () => {
  return (
    <Box mx={3} my={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <UserDetailsForm />
    </Box>
  );
};

export default UserProfilePage;
