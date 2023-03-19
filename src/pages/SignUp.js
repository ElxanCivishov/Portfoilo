import { Button, TextField, Link, Grid, Box, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector, useDispatch } from "react-redux";

import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from "../redux/authSlice";

export default function Login() {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const handleChangeEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handleChangePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
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
        Sign up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullname"
          label="Fullname"
          name="fullname"
          autoComplete="fullname"
          autoFocus
          value={name}
          onChange={(e) => handleChangeName(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
            "Sign up"
          )}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
