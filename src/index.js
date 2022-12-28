/* eslint-disable max-len */
import {compareAsc, format} from 'date-fns';
import {populateProjects, populateTodo, clearChildren} from './Modules/manipulateDOM.js';
import {createTodoItem, initTodo, populateCategoryDropdown} from './Modules/todo.js';
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
  console.log(buttons);
  buttons[0].addEventListener('click', function() {
    createProject(projects);
  });
  buttons[1].addEventListener('click', function() {
    createTodoItem(items);
    console.log(items[0]);
  });
}
