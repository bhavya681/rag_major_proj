import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          className="relative flex items-center justify-center rounded-full p-2 transition-all duration-300 bg-gradient-to-br from-primary to-primary-foreground hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <Sun
            className={`h-5 w-5 transition-transform duration-500 ${
              theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-5 w-5 transition-transform duration-500 ${
              theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={`rounded-lg shadow-xl p-2 backdrop-blur-md transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/80 text-white"
            : "bg-white/80 text-gray-900"
        }`}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${
            theme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""
          } hover:bg-gray-100 dark:hover:bg-gray-600`}
        >
          <Sun className="h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""
          } hover:bg-gray-100 dark:hover:bg-gray-600`}
        >
          <Moon className="h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <span className="h-4 w-4">🖥️</span> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
