import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  Box,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import AuthFormWrapper from "./AuthFormWrapper";

type Props = {
  username: string;
  password: string;
  setUsername: (val: string) => void;
  setPassword: (val: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  switchMode: () => void;
};

export default function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  handleSubmit,
  error,
  switchMode,
}: Props) {
  return (
    <AuthFormWrapper>
      <LockOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign In
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, width: "100%" }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Button fullWidth onClick={switchMode}>Don't have an account? Sign Up</Button>
      </Box>
    </AuthFormWrapper>
  );
}

