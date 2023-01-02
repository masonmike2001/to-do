/**
 * Creates a project with name as user input
 * @param  {Array} projects The array of all current projects
*/
export function createProject(projects) {
  if (!document.querySelector('#project-entry').value) return;


  for (let i = 0; i < projects.length; i++) {
    if (projects[i] === document.querySelector('#project-entry').value) return;
  }
  projects[projects.length] = document.querySelector('#project-entry').value;
  console.log(projects);
}
