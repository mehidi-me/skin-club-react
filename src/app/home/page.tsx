"use client"

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/overview-1")
  }, []);

  return (
    <div className="w-full h-full px-6">
      Home
    </div>
  )
}
