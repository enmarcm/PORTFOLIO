import "tailwindcss/tailwind.css";
import Init from "./pages/Init";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="flex flex-col w-full h-full m-0 p-0 bg-primary">
      <Navbar />

      <Init />

      <Skills />

    </div>
  );
}

export default App;
