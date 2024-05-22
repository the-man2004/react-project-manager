import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import NotSelected from "./components/NotSelected";
import AddProject from "./components/AddProject";

function App() {
  const [addNewProject, setAddNewProject] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <Sidebar />
      {selectedProject === null && !addNewProject && <NotSelected />}
      {selectedProject !== null && !addNewProject && <Project />}
      {addNewProject && <AddProject />}
    </div>
  );
}

export default App;
