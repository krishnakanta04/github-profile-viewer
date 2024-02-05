"use client";

import { Button } from "@nextui-org/button";
import { Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onPress={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      isIconOnly
    >
      {theme === "light" ? <SunMoon /> : <Sun />}
    </Button>
  );
}
