let todos = [
  {
    todoID: 0,
    todoText: "Template Task",
    todoComplete: false,
    todoCategory: "Chores"
  },
  {
    todoID: 1,
    todoText: "Template Task",
    todoComplete: false,
    todoCategory: "Fun"
  }
]

let categories = [
  {
    id: 1,
    name: 'Fun'
  },
  {
    id: 2,
    name: 'Chores'
  },
  {
    id: 3,
    name: 'School'
  }
]

function displayTodos(todos) {
  const todoList = document.getElementById('todoList')
  todoList.innerHTML = ''


  //start of foreach loop--------------------
  todos.forEach(todo => {
    const todoItem = document.createElement('li')
    todoItem.classList.add('relative', 'flex', 'items-center', 'leading-12','bg-gray-200','my-2','rounded-sm', 'pl-4', 'pr-16', 'cursor-default', 'overflow-hidden', 'list-none', 'group')

    const todoCategory = todo.todoCategory

    const todoText = document.createElement('span')
    todoText.textContent = `${todo.todoText} - ${todoCategory}`
    todoText.classList.add('text-gray-800','p-2', 'py-4', 'pr-9')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('absolute', 'right-0', 'h-full', 'flex', 'items-center',)

    //MarkCompleted
    todoItem.addEventListener('click', () => {
      markCompleted(todo.todoID)
    })

    if (todo.todoComplete) {
      todoItem.classList.add('line-through')
    }


    //----------------------------------Edit BUtton Start Here-----------------------------------------------------
    const editButton = document.createElement('button')
    editButton.classList.add('w-12', 'h-full', 'text-white', 'bg-yellow-500', 'hover:bg-gray-300', 'hover:text-black', 'rounded-r-sm', 'flex', 'items-center', 'justify-center', 'transition-transform', 'transform', 'translate-x-full', 'group-hover:translate-x-0', 'opacity-0', 'group-hover:opacity-100', 'active:bg-gray-100')
    editButton.onclick = (event) => {
      event.stopPropagation()
      console.log('Edit!')
      editItem(todo.todoID, todoText)
    }

    const editIcon = document.createElement('i')
    editIcon.classList.add('fa', 'fa-edit')
    editButton.appendChild(editIcon)
    //----------------------------------Edit Button End Here----------------------------------------------------------

    //--------------------------------Trash Button Start Here-------------------------------------------------------
    const trashButton = document.createElement('button')
    trashButton.classList.add('w-12', 'h-full', 'text-white', 'bg-red-500', 'hover:bg-gray-300', 'hover:text-black', 'rounded-r-sm', 'flex', 'items-center', 'justify-center', 'transition-transform', 'transform', 'translate-x-full', 'group-hover:translate-x-0', 'opacity-0', 'group-hover:opacity-100')
    trashButton.onclick = () => {
      removeItem(todo.todoID)
      console.log('Delete!')
    }

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa', 'fa-trash')
    //---------------------------------------Trash Button End Here------------------------------------------------------------------


    trashButton.appendChild(trashIcon)
    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(trashButton)
    todoItem.appendChild(todoText)
    todoItem.appendChild(buttonContainer)
    todoList.appendChild(todoItem)
  })
}//End------------------------------------------------------------------------------------------------------------

//Mark todo Completed--
function markCompleted(todoID) {
  const todoItem = document.querySelector(`#todo-${todoID}`)
  if (todoItem) {
    const todo = todos.find(todo => todo.todoID === todoID)
    todo.todoComplete = !todo.todoComplete
    todoItem.classList.toggle('line-through', todo.todoComplete)
  }
  displayPending(todos)
}

//Clearing completed todo--
function removeCompleted() {
  const completedItems = document.querySelectorAll('#todoList .line-through')
  completedItems.forEach(item => {
    item.remove()
  })
  todos = todos.filter(todo => !todo.todoComplete)
}
function removeItem(todoID) {
  const todoItem = document.querySelector(`#todo-${todoID}`)
  if (todoItem) {
    todoItem.remove()
    todos = todos.filter(todo => todo.todoID !== todoID)
  }
}

//Editing todo--
function editItem(todoID, todoTextE) {
  const todo = todos.find(t => t.todoID === todoID)
  const editInput = document.createElement('input')
  editInput.type = 'text'
  editInput.value = todo.todoText
  editInput.classList.add('bg-gray-100', 'p-2', 'rounded', 'w-full', 'text-gray-800')
  todoTextE.replaceWith(editInput)

  editInput.addEventListener('click', event => { //I added this to stop the item from being marked completed when you click into the input. I didn't know about stopPropagation() before this assignment!
    event.stopPropagation()
  })
  editInput.addEventListener('keypress', event => {
    if (event.key === 'Enter' && editInput.value.trim()) {
      saveTodoEdit(todoID, editInput.value)
    }
  })
}
function saveTodoEdit(todoID, newText) {
  const todo = todos.find(t => t.todoID === todoID)
  todo.todoText = newText
  displayTodos(todos)
}


 //Adding new todo--
  function addTodo() {
    const input = document.getElementById('inputFld')
    const selected = document.getElementById('dropDown').value
    if (input.value.trim()) {
      const newTodo = {
        todoID: todos.length > 0 ? todos[todos.length - 1].todoID + 1 : 0,
        todoText: input.value,
        todoComplete: false,
        todoCategory: selected
      }
    todos.push(newTodo)
    input.value = ''
    displayTodos(todos)
    displayPending(todos)
    }
  }

//Pending todo
function displayPending (todos) {
  let todoTotalPending = 0
  todos.forEach(todo => {
    if (!todo.todoComplete) {
      todoTotalPending++
    }
  });
  console.log(todoTotalPending)
  let pendingText = document.getElementById('pending')
  pendingText.textContent = `You have ${todoTotalPending} pending tasks!`
}

//Changing Categories

function editCategory (todos) {
  console.log(todos)
}


//----Display categories inside dropdown
function displayCategories (categories) {
  let dropDown = document.getElementById('dropDown')
  dropDown.innerHTML = ''
  categories.forEach(c => {
    let option = document.createElement('option')
    let category = c.name
    option.value = category
    option.innerText = category
    dropDown.appendChild(option)
  })

}

//----Display categories inside dropdown

document.getElementById('clearBtn').addEventListener('click', removeCompleted)
document.getElementById('IDBtn').addEventListener('click', addTodo)
document.getElementById('inputFld').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo()
  }
})

displayPending(todos)
displayTodos(todos)
displayCategories(categories)