/**
 * Creates a project with name as user input
 * @param  {Array} projects The array of all current projects
*/
export function createProject(projects) {
  projects[projects.length] = document.querySelector('#project-entry').value;
}

export function deleteProject() {

}