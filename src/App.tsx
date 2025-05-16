// App.tsx
import { useEffect, useState, FormEvent } from "react";
import { Amplify } from "aws-amplify";
import {
  signIn,
  signOut,
  signUp,
  getCurrentUser,
} from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";

import LoginForm from "./views/LoginForm";
import SignUpForm from "./views/SignupForm";
import Home from "./views/Home";

Amplify.configure(outputs);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signIn({ username: signInUsername, password: signInPassword });
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Error signing in");
    }
  }

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signUp({
        username: signUpUsername,
        password: signUpPassword,
        options: {
          userAttributes: {
            email: signUpEmail,
          },
        },
      });
      setSuccess("Sign-up successful! Please check your email.");
    } catch (err: any) {
      setError(err.message || "Error signing up");
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }

  if (isAuthenticated) {
    return <Home />;
  }

  return (
    <div key={isSignUpMode ? "signup" : "signin"}>
      {isSignUpMode ? (
        <SignUpForm
          username={signUpUsername}
          email={signUpEmail}
          password={signUpPassword}
          setUsername={setSignUpUsername}
          setEmail={setSignUpEmail}
          setPassword={setSignUpPassword}
          handleSubmit={handleSignUp}
          error={error}
          success={success}
          switchMode={() => {
            setIsSignUpMode(false);
            setError("");
            setSuccess("");
          }}
        />
      ) : (
        <LoginForm
          username={signInUsername}
          password={signInPassword}
          setUsername={setSignInUsername}
          setPassword={setSignInPassword}
          handleSubmit={handleSignIn}
          error={error}
          switchMode={() => {
            setIsSignUpMode(true);
            setError("");
            setSuccess("");
          }}
        />
      )}
    </div>
  );
}
