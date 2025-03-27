import { Box } from "@mui/material";
import { Outlet } from "react-router";

function MainBody() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Outlet />
    </Box>
  );
}

export default MainBody;
