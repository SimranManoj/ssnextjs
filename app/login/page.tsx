"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleAction = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setUser(email);
    setError("");
  };

  const handleLogout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-100 to-pink-200">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl space-y-4">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-center text-green-600">Welcome, {user}</h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleAction}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </button>
              <button
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-blue-600 underline"
              >
                {mode === "signin" ? "New here? Sign Up" : "Already have an account? Sign In"}
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 hover:bg-gray-300 py-2 rounded"
              >
                Cancel
              </button>
            </div>
            {error && <p className="text-center text-red-600">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
