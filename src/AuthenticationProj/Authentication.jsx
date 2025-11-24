import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

import ProtectedRoute from "./router/ProtectedRoute";
import AdminRoute from "./router/AdminRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import FinanceApp from "./finance/FinanceApp";

export default function AuthenticationProject() {
  return (
    <>
    AUTHENTICATION PROJECT 
    <AuthProvider>
      <ThemeProvider>
     
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finance"
              element={
                <ProtectedRoute>
                  <FinanceApp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              }
            />
          </Routes>
      </ThemeProvider>
    </AuthProvider>
    </>
  );
  
}
