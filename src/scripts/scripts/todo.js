/* Todo List */

const todoList = function () {
    const todoItems = document.querySelectorAll('.js-todo-item');
    
    for (let i = 0; i < todoItems.length; i++) {
        const todoItem = todoItems[i];
        
        todoItem.addEventListener('click', (e) => {
            todoItem.classList.toggle('is-completed');
        });
    }
}

export { todoList }
