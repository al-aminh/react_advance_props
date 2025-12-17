import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;
  const sections = [
    {
      id: "basic",
      lebel: "Basic Props",
      icon: "🥠",
    },
    {
      id: "children",
      lebel: "Children Props",
      icon: "🧒",
    },
    {
      id: "ref",
      lebel: "Ref Props",
      icon: "📌",
    },
    {
      id: "complex",
      lebel: "Complex Props",
      icon: "🧩",
    },
    {
      id: "theme",
      lebel: "Theme Props",
      icon: "🎨",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className="bg-blue-600 rounded-lg px-4 py-2 font-medium transition-all text-white hover:bg-blue-700"
            >
              <span className="mr-2">{section.icon}</span>
              {section.lebel}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to the React Props Documentation
          </h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Explore various types of props in React including basic props, children props, ref props, complex props, and theme props.
          </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
