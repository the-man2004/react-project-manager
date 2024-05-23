import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import NotSelected from "./components/NotSelected";
import AddProject from "./components/AddProject";

function App() {
  const [addNewProject, setAddNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProjectClick(type = "open") {
    if (type === "open") {
      setAddNewProject(true);
    } else {
      setAddNewProject(false);
    }
  }

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <Sidebar onAddProjectClick={handleAddProjectClick} />
      {selectedProject === null && !addNewProject && (
        <NotSelected onAddProjectClick={handleAddProjectClick} />
      )}
      {selectedProject !== null && !addNewProject && <Project />}
      {addNewProject && <AddProject onClose={handleAddProjectClick} />}
    </div>
  );
}

export default App;
