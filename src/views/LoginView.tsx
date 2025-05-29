// views/LoginView.tsx
import { useState, FormEvent } from "react";
import { signIn } from "aws-amplify/auth";
import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm";

interface LoginViewProps {
  onAuthSuccess: () => void;
}

export default function LoginView({ onAuthSuccess }: LoginViewProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    try {
      await signIn({ username, password });
      onAuthSuccess();
    } catch (err: any) {
      setError(err.message || "Error signing in");
    }
  }

  return (
    <div>
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSignIn}
        error={error}
        switchMode={() => {}}
      />
      <p>
        Don't have an account?{" "}
        <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}