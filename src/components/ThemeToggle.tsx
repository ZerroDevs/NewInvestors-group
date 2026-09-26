"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ isTransparent }: { isTransparent?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Placeholder to prevent layout shift
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2.5 rounded-full border-2 transition-all shadow-sm hover:shadow-md flex items-center justify-center ${
        isTransparent 
          ? "border-white/80 text-white hover:bg-white hover:text-[#0F2847]" 
          : "border-[#0F2847] text-[#0F2847] hover:bg-[#0F2847] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0F2847]"
      }`}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} className="fill-current" /> : <Moon size={20} className="fill-current" />}
    </button>
  );
}
