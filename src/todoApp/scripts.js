let todos = [
    {
      todoID: 0,
      todoText: "Finish Homework",
      todoComplete: false
    },
    {
      todoID: 1,
      todoText: "Walk the dog",
      todoComplete: false
    },
    {
      todoID: 2,
      todoText: "Clean my room",
      todoComplete: false
    },
    {
        todoID: 2,
        todoText: "Empty the trash",
        todoComplete: false
      }
  ];

  function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('m-4','p-2', 'bg-slate-100')
      
      const todoText = document.createElement('span');
      todoText.textContent = todo.todoText;

  
      todoItem.append(todoText);
      todoList.appendChild(todoItem);
    });
  }
  
  

  displayTodos()