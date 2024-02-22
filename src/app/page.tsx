"use client";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Home() {
  const [isTextEnabled, setIsTextEnabled] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        {isTextEnabled ? (
          <p>Hello World Ads</p>
        ) : (
          <button
            className="font-bold p-4 rounded-lg bg-slate-200"
            onClick={() => setIsTextEnabled(true)}
          >
            Clique Aqui
          </button>
        )}
      </main>
    </div>
  );
}
