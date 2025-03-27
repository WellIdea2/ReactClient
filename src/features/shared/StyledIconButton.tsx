import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  outline: "none",
  "&:focus": {
    outline: "none",
  },
}));

export default StyledIconButton;
