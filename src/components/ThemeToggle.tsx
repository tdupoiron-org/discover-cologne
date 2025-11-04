import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "@phosphor-icons/react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun weight="fill" className="w-5 h-5 text-secondary-foreground" />
      ) : (
        <Moon weight="fill" className="w-5 h-5 text-secondary-foreground" />
      )}
    </button>
  )
}
