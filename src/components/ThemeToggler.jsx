import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("Light")
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "Light" ? "Dark" : "Light"))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "Dark"
  }

  return <ThemeContext.Provider value={value} >
    {children}
  </ThemeContext.Provider>
}

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context;
}

const ThemeToggleButton = () => {
  const { theme, toggleTheme, isDark} = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={` relative w-16 h-8 rounded-full transition-colors duration-300 ${isDark ? "bg-blue-600": "bg-gray-300"}`}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${isDark ? "transform translate-x-8" : ""}`}
      >
        {isDark ? "🌚" : "🌞"}
      </div>
    </button>
  )
}

const ThemeCard = () => {
  
}

function ThemeToggler() {

  const {theme, isDark}  = useTheme();

  return (
    <div className={` p-6 rounded-xl shadow-md ${isDark? "bg-gray-700" : "bg-gray-100"}`}>
      <div className="flex justify-between">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-gray-300": ""}`}>Theme Toggler</h2>
        <div className="flex space-x-2 text-center">
          <span className={`text-lg font-medium ${isDark ? "text-gray-300": ""}`}>{theme + " "}Mode</span>
          <ThemeToggleButton/>
        </div>
      </div>
      <p className={`${isDark ? "text-gray-300": ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, enim!</p>
      <div className="flex gap-2 mt-4">
        <div className={`flex-1 p-4 bg-gray-200 rounded-lg shadow-md ${isDark? "bg-gray-600 text-gray-300" : "bg-gray-200"}`}>
          <h3 className="text-2xl font-bold mb-4">User information</h3>
          <p>Name: John Doe</p>
          <p>Email: john@gmail.com</p>
          <p>Role: Developer</p>
          <div className="space-x-2 mt-4">
            <button className={`px-4 py-2 ${isDark ? "bg-blue-500" : "bg-amber-500 "} rounded-md text-white font-bold`}>Edit Profile</button>
            <button className="px-4 py-2 bg-gray-400 rounded-md">Setting</button>
          </div> 
        </div>
        <div className={`flex-1 p-4 bg-gray-200 rounded-lg shadow-md ${isDark? "bg-gray-600 text-gray-300" : "bg-gray-200"}`}>
          <h3 className="text-2xl font-bold mb-4 ">Statistics</h3>
          <div className="flex justify-between font-medium">
            <div>
              <p>Total Clicks:</p>
              <p>Theme:</p>
              <p>Status:</p>
            </div>
            <div>
              <p>0</p>
              <p className="text-lg">{theme}</p>
              <p className="text-green-400 text-lg">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeToggler