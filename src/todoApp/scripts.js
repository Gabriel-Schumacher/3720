let todos = [
  {
    todoID: 0,
    todoText: "Template Task",
    todoComplete: false,
    todoCategory: "Chores",
  },
  {
    todoID: 1,
    todoText: "Template Task",
    todoComplete: false,
    todoCategory: "Fun",
  },
];

let categories = [
  {
    id: 1,
    name: "Fun",
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
  const todoList = document.getElementById("todoList")
  todoList.innerHTML = ""

  //start of foreach loop--------------------
  todos.forEach(todo => {
    const todoItem = document.createElement('li')
    todoItem.classList.add('relative', 'flex', 'items-center', 'leading-12','bg-gray-200','my-2','rounded-sm', 'pl-4', 'pr-16', 'cursor-default', 'overflow-hidden', 'list-none', 'group')

    todoItem.dataset.todoId = todo.todoID
    todoItem.dataset.todoComplete = todo.todoComplete
    todoItem.dataset.todoCategory = todo.todoCategory

    const todoText = document.createElement('span')
    todoText.textContent = `${todo.todoText} - ${todo.todoCategory}`
    todoText.classList.add('text-gray-800','p-2', 'py-4', 'pr-9')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('absolute', 'right-0', 'h-full', 'flex', 'items-center',)

    //MarkCompleted
    if (todo.todoComplete) {
      todoItem.classList.add('line-through')
    }
    todoItem.addEventListener('click', () => {
      markCompleted(todoItem.dataset.todoId)
    })

    //Trash and Edit Buttons
    const editButton = createEditButton(todoItem.dataset.todoId, todoText)
    const trashButton = createTrashButton(todoItem.dataset.todoId)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(trashButton)
    todoItem.appendChild(todoText)
    todoItem.appendChild(buttonContainer)
    todoList.appendChild(todoItem)
  })
} //End------------------------------------------------------------------------------------------------------------

 //Adding new todo-----------------------
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
}///End

//Mark todo Completed--
function markCompleted(todoID) {
  const todoItem = document.querySelector(`[data-todo-id='${todoID}']`)
  if (todoItem) {
    const todo = todos.find(todo => todo.todoID === Number(todoID))
    todo.todoComplete = !todo.todoComplete
    todoItem.classList.toggle('line-through', todo.todoComplete)
  }
  displayPending(todos);
}//End
//Clearing completed todo---------------------------------------------------
function removeCompleted() {
  const completedItems = document.querySelectorAll("#todoList .line-through")
  completedItems.forEach((item) => {
    item.remove()
  })
  todos = todos.filter((todo) => !todo.todoComplete)
}//End

//Editing todo------------------------------
function editItem(todoID, todoTextE) {
  const todo = todos.find((t) => t.todoID === Number(todoID))
  const editInput = document.createElement('input')
  editInput.type = 'text'
  editInput.value = todo.todoText
  editInput.classList.add("bg-gray-100", "p-2", "rounded", "w-full", "text-gray-800")
  todoTextE.replaceWith(editInput)
  editInput.focus()

  editInput.addEventListener('click', (event) => {
    //I added this to stop the item from being marked completed when you click into the input. I didn't know about stopPropagation() before this assignment!
    event.stopPropagation()
  })
  editInput.addEventListener('blur', () => {
    //I added this to stop the item from being marked completed when you click into the input. I didn't know about stopPropagation() before this assignment!
    if (editInput.value.trim()) {
      saveTodoEdit(Number(todoID), editInput.value)    
    }
  })
  editInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && editInput.value.trim()) {
      saveTodoEdit(Number(todoID), editInput.value)
    }
  })
}//End
function saveTodoEdit(todoID, newText) {
  const todo = todos.find((t) => t.todoID === todoID)
  todo.todoText = newText
  displayTodos(todos)
}//End


//Creating Edit Button--------------------
function createEditButton (todoID, todoTextE) {
  const editButton = document.createElement('button')
  editButton.classList.add('w-12', 'h-full', 'text-white', 'bg-yellow-500', 'hover:bg-gray-300', 'hover:text-black', 'rounded-r-sm', 'flex', 'items-center', 'justify-center', 'transition-transform', 'transform', 'translate-x-full', 'group-hover:translate-x-0', 'opacity-0', 'group-hover:opacity-100', 'active:bg-gray-100')
  
  editButton.onclick = (event) => {
    event.stopPropagation()
    editItem(todoID, todoTextE)
    console.log('Edit!')
  }
  const editIcon = document.createElement('i')
  editIcon.classList.add('fa', 'fa-edit')
  editButton.appendChild(editIcon)
  return editButton
}//End

//Creating Trash Button--------------------
function createTrashButton (todoID) {
  const trashButton = document.createElement('button')
  trashButton.classList.add('w-12', 'h-full', 'text-white', 'bg-red-500', 'hover:bg-gray-300', 'hover:text-black', 'rounded-r-sm', 'flex', 'items-center', 'justify-center', 'transition-transform', 'transform', 'translate-x-full', 'group-hover:translate-x-0', 'opacity-0', 'group-hover:opacity-100')
  
  trashButton.onclick = () => {
    removeItem(todoID)
  }
  const trashIcon = document.createElement('i')
  trashIcon.classList.add("fa", "fa-trash")
  trashButton.appendChild(trashIcon)
  return trashButton
}//End
function removeItem(todoID) {
  const todoItem = document.querySelector(`[data-todo-id='${todoID}']`)
  if (todoItem) {
    todoItem.remove()
    todos = todos.filter((todo) => todo.todoID !== todoID)
  }
}//End

//Pending todo----------------------------------
function displayPending(todos) {
  let todoTotalPending = 0
  todos.forEach((todo) => {
    if (!todo.todoComplete) {
      todoTotalPending++
    }
  })
  console.log(todoTotalPending)
  let pendingText = document.getElementById("pending")
  pendingText.textContent = `You have ${todoTotalPending} pending tasks!`
}

//----Display categories inside dropdown-------------
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
}//End

//---Filtering categories------------------------
function filterTodosByCategory (category) {
  if (category === 'All') {
    displayTodos(todos)
  } else {
    const filteredTodos = todos.filter(todo => todo.todoCategory === category)
    displayTodos(filteredTodos)
  }
}

// Create category filter buttons
function displayCategoryFilters(categories) {
  const categoryFilter = document.getElementById("categoryFilter")
  categoryFilter.innerHTML = ''
  const allBtn = document.createElement('button')
  allBtn.classList.add('bg-blue-200','m-2','hover:bg-slate-500','hover:text-white')
  allBtn.textContent = "All"
  allBtn.addEventListener("click", () => filterTodosByCategory("All"))
  categoryFilter.appendChild(allBtn)

  categories.forEach(category => {
    const button = document.createElement('button')
    button.classList.add('bg-blue-200','m-2','hover:bg-slate-500','hover:text-white')
    button.textContent = category.name
    button.addEventListener("click", () => filterTodosByCategory(category.name))
    categoryFilter.appendChild(button)
  })
}//End

function addCategory() {
  const categoryInput = document.getElementById('addCategory')
  if (categoryInput.value.trim()) {
    const newCategory = {
      id: categories.length > 0 ? categories[categories.length - 1].id + 1 : 0,
      name: categoryInput.value.trim()
    }
    categories.push(newCategory)
    displayCategoryFilters(categories)
    displayCategories(categories)
    categoryInput.value = ''
  }
}

document.getElementById("clearBtn").addEventListener("click", removeCompleted)
document.getElementById("IDBtn").addEventListener("click", addTodo)
document.getElementById("CTBtn").addEventListener("click", addCategory)
document.getElementById("inputFld")
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTodo()
    }
  })//End

document.getElementById('addCategory')
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addCategory()
  }
})

displayPending(todos)
displayTodos(todos)
displayCategoryFilters(categories)
displayCategories(categories)