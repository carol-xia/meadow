import {
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import AuthFormWrapper from "./AuthFormWrapper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

type Props = {
  username: string;
  email: string;
  password: string;
  setUsername: (val: string) => void;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  success: string;
  switchMode: () => void;
};

export default function SignUpForm({
  username,
  email,
  password,
  setUsername,
  setEmail,
  setPassword,
  handleSubmit,
  error,
  success,
  switchMode,
}: Props) {
  return (
    <AuthFormWrapper>
      <LockOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign Up
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="primary" sx={{ mb: 2 }}>
          {success}
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
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Button fullWidth onClick={switchMode}>Already have an account? Sign In</Button>
      </Box>
    </AuthFormWrapper>
  );
}
