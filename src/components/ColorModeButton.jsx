import React, { useEffect } from "react";
import { IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeButton(props) {
  const [isDark, setIsDark] = React.useState(false);

  // Check initial theme on page load
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const dark = savedTheme === "dark";
      root.classList.toggle("dark", dark);
      setIsDark(dark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", prefersDark);
      setIsDark(prefersDark);
    }
  }, []);

  // Toggle dark/light mode
  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    root.classList.toggle("dark", next);
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const Icon = isDark ? LuSun : LuMoon;

  return (
    <React.Suspense fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={toggle}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        {...props}
      >
        <Icon />
      </IconButton>
    </React.Suspense>
  );
}
