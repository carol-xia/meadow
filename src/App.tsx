// App.tsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser, signOut } from "aws-amplify/auth";

import LoginView from "./views/LoginView";
import SignUpView from "./views/SignupView";
import Home from "./views/Home";
import PageNotFound from './views/PageNotFound';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginView onAuthSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <SignUpView />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/home" : "/login"} replace />
          }
        />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}