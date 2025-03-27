import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

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

export default Login;
