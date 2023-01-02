/* eslint-disable max-len */
// import {compareAsc, format} from 'date-fns';
import {populateProjects, populateTodo, clearChildren, populateCategoryDropdown, projectOnClick} from './Modules/manipulateDOM.js';
import {createTodoItem} from './Modules/todo.js';
import {createProject} from './Modules/projects.js';

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
    console.log(projects);
    const projectButtons = document.querySelectorAll('.project-item');
    for (let i = 0; i < projectButtons.length; i++) {
      projectButtons[i].addEventListener('click', projectClickWrapper);
    }
    populateCategoryDropdown(projects);
  });
  buttons[1].addEventListener('click', function() {
    createTodoItem(items);
    clearChildren(document.querySelector('#todo-content'));
    populateTodo(items);
  });
}

/**
 * Removes all DOM children of todo list div, freeing area
 * @param  {Array} e The array of all current projects
 * @param  {Array} items The array of all current projects
*/
function projectClickWrapper(e) {
  console.log('button clicked');

  projectOnClick((e.target).textContent, items);
}

/**
 * Removes an item from an array, moving all subsequent items down one
 * @param  {Array} array The array to be edited
 * @param  {int} i The index of item to be removed
*/
function deleteItem(array, i) {

}
