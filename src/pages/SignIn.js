import { Button, TextField, Link, Grid, Box, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

import { useSelector, useDispatch } from "react-redux";

import { changeEmail, changePassword, login } from "../redux/authSlice";

export default function Login() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handleChangePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          sx={{ mt: 3, mb: 2 }}
        >
          {isLoading ? (
            <ClipLoader
              color="green"
              loading={isLoading}
              aria-label="Loading Spinner"
              data-testid="loader"
              size={20}
            />
          ) : (
            "Sign in"
          )}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
