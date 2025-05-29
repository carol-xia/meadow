import { useState, FormEvent } from "react";
import { signUp } from "aws-amplify/auth";
import { Link } from "react-router-dom";

import SignUpForm from "../components/SignupForm";

export default function SignUpView() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      setSuccess("Sign-up successful! Please check your email.");
    } catch (err: any) {
      setError(err.message || "Error signing up");
    }
  }

  return (
    <div>
      <SignUpForm
        username={username}
        email={email}
        password={password}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSignUp}
        error={error}
        success={success}
        switchMode={() => {}}
      />
      <p>
        Already have an account?{" "}
        <Link to="/login">Sign in here</Link>
      </p>
    </div>
  );
}