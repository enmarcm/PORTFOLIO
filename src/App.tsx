import "tailwindcss/tailwind.css";
import Init from "./pages/Init";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col w-full h-full m-0 p-0 bg-primary">
      <Navbar />

      <Init />

      <div className="h-screen bg-yellow-300">Contenido 2</div>

      <div className="section h-screen bg-green-300">Contenido 3</div>
    </div>
  );
}

export default App;
