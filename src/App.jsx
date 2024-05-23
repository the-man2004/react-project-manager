import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import NotSelected from "./components/NotSelected";
import AddProject from "./components/AddProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Learning React from Maximilian",
      description: `
      Learning React from Maximilian

      Start with the basics, end with the advanced stuff.
      `,
      dueDate: "05/23/2024",
    },
  ]);
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
    setProjects((prevProjects) => [newProject, ...prevProjects]);
    setAddNewProject(false);
  }

  function handleSetSelectedProject(projectPosition) {
    setSelectedProject(projectPosition);
    console.log(projectPosition);
  }

  const currentProject = projects[selectedProject];

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <Sidebar
        onAddProjectClick={handleAddProjectClick}
        projects={projects}
        onProjectSelect={handleSetSelectedProject}
      />
      {selectedProject === null && !addNewProject && (
        <NotSelected onAddProjectClick={handleAddProjectClick} />
      )}
      {selectedProject !== null && !addNewProject && (
        <Project project={currentProject} />
      )}
      {addNewProject && (
        <AddProject onClose={handleAddProjectClick} onSave={handleNewProject} />
      )}
    </div>
  );
}

export default App;
