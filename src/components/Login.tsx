"use client";
import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <Routes>
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded shadow-md"
          >
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              value={password}
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              value={email}
              className="w-full p-2 mb-3 border rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Login
            </button>
          </form>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
