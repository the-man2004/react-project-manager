import Projects from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-3">
      <Sidebar />
      <Projects />
    </div>
  );
}

export default App;
