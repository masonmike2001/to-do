/**
 * Creates a todo object with all provided form data
 * @param  {Array} items The array of all current todo items
*/
export function createTodoItem(items) {
  items[items.length] = {
    task: document.querySelector('#todo-entry').value,
    date: document.querySelector('#todo-date').value,
    project: document.querySelector('#todo-category').value,
    priority: document.querySelector('#todo-priority').value,
    description: document.querySelector('#todo-desc').value,
    complete: false,
  };
}

export function deleteTodoItem() {

}