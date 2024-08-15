import "tailwindcss/tailwind.css";
import Init from "./pages/Init";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="flex flex-col w-full h-full m-0 p-0 bg-primary">
      <Navbar />

      <Init />

      <Skills />

      <Projects/>

    </div>
  );
}

export default App;
