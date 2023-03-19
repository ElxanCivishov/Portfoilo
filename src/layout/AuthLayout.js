import { Navigate, Outlet } from "react-router-dom";

import { useLoggedIn } from "../config/hooks";

import { Avatar, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

const AuthLayout = () => {
  const isLoggedIn = useLoggedIn();

  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  if (isLoggedIn === null) {
    return <h2 style={{ color: "white" }}>loading...</h2>;
  } else if (isLoggedIn === true) {
    return <Navigate replace to="/admin" />;
  }

  const handleMode = () => {
    setMode("dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 5 }}>
        <Avatar
          onClick={() => handleMode()}
          sx={{ m: 1, mx: "auto", bgcolor: "primary.main" }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default AuthLayout;
