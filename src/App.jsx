import { useState } from "react";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

import NotSelected from "./components/NotSelected";
import AddProject from "./components/AddProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Learning React from Maximilian",
      description: `Learning React from Maximilian

Start with the basics, end with the advanced stuff.`,
      dueDate: "05/23/2024",
      tasks: [
        { task: "Learn the basics", id: 1029384756 },
        { task: "Learn advanced concepts", id: 6162738495 },
        { task: "Practice, practice, practice", id: 9989657432 },
      ],
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

  // Project functions
  function handleProjectDelete() {
    setProjects((prevProjects) => {
      const newProjects = prevProjects.filter((_, i) => i !== selectedProject);

      if (newProjects.length === 0) {
        setSelectedProject(null);
      }

      return newProjects;
    });
  }

  function handleAddTask(task) {
    setProjects((prevProjects) => {
      const allProjects = [...prevProjects];
      const prevTasks = allProjects[selectedProject].tasks;
      const newTasks = [
        {
          task,
          id: Date.now(),
        },
        ...prevTasks,
      ];

      allProjects[selectedProject].tasks = newTasks;

      return allProjects;
    });
  }

  function handleRemoveTask(id) {
    setProjects((prevProjects) => {
      const allProjects = [...prevProjects];
      const newTasks = allProjects[selectedProject].tasks.filter(
        (task) => task.id !== id
      );

      console.log(newTasks);

      allProjects[selectedProject].tasks = newTasks;

      return allProjects;
    });
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
      {selectedProject !== null && !addNewProject && projects.length !== 0 && (
        <Project
          project={currentProject}
          onProjectDelete={handleProjectDelete}
          onAddTask={handleAddTask}
          onRemoveTask={handleRemoveTask}
        />
      )}
      {addNewProject && (
        <AddProject onClose={handleAddProjectClick} onSave={handleNewProject} />
      )}
    </div>
  );
}

export default App;
