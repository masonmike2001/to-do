/**
 * Displays all projects in to do list in #project-content, and adds click event
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
 * Displays all items in a category in order of time.
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
 * Removes all DOM children of todo list div, clearing an element
 * @param  {Array} content The DOM element to be cleared
*/
export function clearChildren(content) {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

/**
 * Reloads all options in category drop down with updated projects
 * @param  {Array} projects The array of projects
*/
export function populateCategoryDropdown(projects) {
  const categoryDropdown = document.querySelector('#todo-category');
  clearChildren(categoryDropdown);
  const categories = [];
  for (let i = 0; i < projects.length; i++) {
    categories[i] = document.createElement('option');
    categories[i].textContent = projects[i];
    categories[i].value = i;
    categoryDropdown.appendChild(categories[i]);
  }
}

/**
 * Determines category, finds todo-item objects that match, and repopulates
 * list with those items
 * @param  {int} category The string of the clicked project category
 * @param  {Array} items The array of all current projects
*/
export function projectOnClick(category, items) {
  const projectItems = [];
  let target;
  const projectButtons = document.querySelectorAll('.project-item');
  for (let i = 0; i < projectButtons.length; i++) {
    if (projectButtons[i].textContent === category) {
      target = i;
    }
  }
  for (let j = 0; j < items.length; j++) {
    if (target == items[j].project) {
      projectItems[projectItems.length] = items[j];
    }
  }
  clearChildren(document.querySelector('#todo-content'));
  populateTodo(projectItems);
}
