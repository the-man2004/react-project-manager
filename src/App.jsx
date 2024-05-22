import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import noProjects from "./assets/no-projects.png";
import NotSelected from "./components/NotSelected";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid grid-cols-3">
      <Sidebar />
      {!selectedProject ? <NotSelected /> : <Project />}
    </div>
  );
}

export default App;
