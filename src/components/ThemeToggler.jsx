import { createContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light")
  const ToggleTheme = () => {

  }

  const value = {
    theme,
    ToggleTheme,
    isDard: theme === "dark"
  }

  return <ThemeContext.Provider value={value} >
    {children}
  </ThemeContext.Provider>
}

function ThemeToggler() {
  return (
    <div>ThemeToggler</div>
  )
}

export default ThemeToggler