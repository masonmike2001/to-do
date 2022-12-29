/**
 * Displays all projects in to do list in #project-content
 * @param  {Array} projects The array of all current todo items
*/
export function populateProjects(projects) {
  const content = document.querySelector('#project-content');

  for (let i = 0; i < projects.length; i++) {
    const category = document.createElement('button');
    category.textContent = projects[i];
    category.classList.add('project-item');
    console.log(projects[i]);
    content.appendChild(category);
  }
}

/**
 * Displays all items in to do list in #todo-content
 * @param  {Array} items The array of all current todo items
*/
export function populateTodo(items) {
  const content = document.querySelector('#todo-content');
  for (let i = 0; i < items.length; i++) {
    const div = document.createElement('div');
    div.classList.add('todo-item');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    const task = document.createElement('h1');
    task.textContent = (items[i].task);
    const priority = document.createElement('h1');
    priority.textContent = (items[i].priority);
    const desc = document.createElement('p');
    desc.textContent = (items[i].description);
    const date = document.createElement('h4');
    date.textContent = (items[i].date);
    content.appendChild(div);
    div.appendChild(check);
    div.appendChild(task);
    div.appendChild(priority);
    div.appendChild(desc);
    div.appendChild(date);
  }
}

/**
 * Removes all DOM children of todo list div, freeing area
 * @param  {Array} content The array of all current todo items
*/
export function clearChildren(content) {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

export function populateCategoryDropdown(projects) {

}