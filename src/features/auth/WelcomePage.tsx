import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, useTheme } from "@mui/material";
import NavBar from "../shared/NavBar";

function WelcomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const theme = useTheme();

  const handleButtonClick = () => {
    // handle form submit event here
    // if it's login call the login API
    // if it's registration call the register API
  };

  const handleLinkClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleButtonClick}
          sx={{ width: "100%", maxWidth: "50%", p: 2 }}
        >
          <Typography variant="h4" align="center" component={"p"}>
            Welcome to Floxie!
          </Typography>

          <TextField label="Email Address" variant="filled" fullWidth required sx={{ my: 1 }} />

          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            required
            sx={{ my: 1 }}
          />

          {!isLogin && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="filled"
              fullWidth
              required
              sx={{ my: 1 }}
            />
          )}

          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ my: 1 }}>
            {isLogin ? "Login" : "Register"}
          </Button>

          <Typography align="center" sx={{ mt: 1 }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Box
              component="span"
              sx={{ color: "primary.main", textDecoration: "underline", cursor: "pointer" }}
              onClick={handleLinkClick}
            >
              {isLogin ? "Register" : "Login"}
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default WelcomePage;
