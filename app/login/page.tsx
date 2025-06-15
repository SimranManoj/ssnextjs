"use client";

import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utlis/firebase"; // Make sure this is correct

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err: any) {
      setError("Invalid credentials or user does not exist.");
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err: any) {
      setError("Could not sign up. Try a different email.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg space-y-5">
        {user ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-green-600">👋 Welcome</h2>
            <p className="text-center text-gray-700">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-700">Login / Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-col space-y-2 pt-2">
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Sign Up
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 rounded"
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
    