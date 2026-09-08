"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateCount = async () => {
      try {
        const incrementRes = await fetch("https://portfolio-backend-tgk6.onrender.com", {
          method: "POST",
        });

        const incrementData = await incrementRes.json();
        setCount(incrementData.count);
      } catch (error) {
        console.error("Failed to update visitor count:", error);
      }
    };

    updateCount();
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 backdrop-blur-md">
      <span className="text-cyan-300">Visitors:</span>{" "}
      {count !== null ? count : "Loading..."}
    </div>
  );
}
