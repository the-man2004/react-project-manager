export default function Projects({ project }) {
  return (
    <div className="col-span-2">
      <h2>{project.title}</h2>
      <p>{project.dueDate}</p>
      <p>{project.description}</p>
    </div>
  );
}
