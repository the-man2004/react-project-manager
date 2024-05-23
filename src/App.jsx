import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import NotSelected from "./components/NotSelected";
import AddProject from "./components/AddProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [addNewProject, setAddNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProjectClick(type = "open") {
    if (type === "open") {
      setAddNewProject(true);
    } else {
      setAddNewProject(false);
    }
  }

  function handleNewProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <Sidebar onAddProjectClick={handleAddProjectClick} />
      {selectedProject === null && !addNewProject && (
        <NotSelected onAddProjectClick={handleAddProjectClick} />
      )}
      {selectedProject !== null && !addNewProject && <Project />}
      {addNewProject && (
        <AddProject onClose={handleAddProjectClick} onSave={handleNewProject} />
      )}
    </div>
  );
}

export default App;
