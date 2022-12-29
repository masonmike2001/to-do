/* eslint-disable max-len */
// import {compareAsc, format} from 'date-fns';
import {populateProjects, populateTodo, clearChildren, populateCategoryDropdown} from './Modules/manipulateDOM.js';
import {createTodoItem, deleteTodoItem} from './Modules/todo.js';
import {createProject, deleteProject} from './Modules/projects.js';

const projects = [];
const items = [];
rigForms();

/**
 * Sets up event listeners on all form buttons.
 * @param  {NodeList} buttons The array of form button elements.
*/
function rigForms() {
  const buttons = document.querySelectorAll('.form-btn');
  buttons[0].addEventListener('click', function() {
    createProject(projects);
    clearChildren(document.querySelector('#project-content'));
    populateProjects(projects);
    populateCategoryDropdown(projects);
  });
  buttons[1].addEventListener('click', function() {
    createTodoItem(items);
    clearChildren(document.querySelector('#todo-content'));
    populateTodo(items);
  });
}
