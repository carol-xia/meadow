import { Container, Paper, Box, CssBaseline } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthFormWrapper({ children }: Props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {children}
        </Paper>
      </Box>
    </Container>
  );
}
