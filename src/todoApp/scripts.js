let todos = [

]

//I used chatgpt to create tailwind based on normal css I gave it (there was still a lot of trouble shooting I had to do with the styling), the comments on classes are from AI generated tailwind.
function displayTodos() {
  const todoList = document.getElementById('todoList')
  todoList.innerHTML = ''

  todos.forEach(todo => {
    const todoItem = document.createElement('li')
    todoItem.id = `todo-${todo.todoID}`
    todoItem.classList.add(
      'relative', // Needed for positioning child elements
      'flex',
      'items-center',
      'h-12', // Height: 48px
      'leading-12', // Line height: 48px
      'bg-gray-200',
      'my-2',
      'rounded-sm', // Border radius: 3px
      'pl-4',
      'pr-16',
      'cursor-default', // Cursor style
      'overflow-hidden', // Hide overflow
      'list-none', // Remove default list styling
      'group'
    )

    const todoText = document.createElement('span')
    todoText.textContent = todo.todoText
    todoText.classList.add('text-gray-800')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add(
      'absolute',
      'right-0', // Align to the right edge
      'h-full', // Full height of the list item
      'flex',
      'items-center', // Center buttons vertically
    )


    //----------------------------------Edit BUtton Start Here-----------------------------------------------------
    const editButton = document.createElement('button')
    editButton.classList.add(
      'w-12', // Width: 48px
      'h-12', // Height: 48px
      'text-white',
      'bg-yellow-500', // Yellow background
      'hover:bg-gray-300',
      'hover:text-black',
      'rounded-r-sm', // Rounded corners on the right
      'flex',
      'items-center',
      'justify-center',
      'transition-transform', // Use transform for smooth animation
      'transform', // Ensure transforms work
      'translate-x-full', // Start off-screen to the left
      'group-hover:translate-x-0', // Translate to 0 on hover
      'opacity-0',
      'group-hover:opacity-100', // Show on hover
      'active:bg-gray-100'
    )
    editButton.onclick = () => {
      console.log('Edit!')
    }

    const editIcon = document.createElement('i')
    editIcon.classList.add('fa', 'fa-edit')
    editButton.appendChild(editIcon)
    //----------------------------------Edit Button End Here----------------------------------------------------------

    //--------------------------------Trash Button Start Here-------------------------------------------------------
    const trashButton = document.createElement('button')
    trashButton.classList.add(
      'w-12', // Width: 48px
      'h-12', // Height: 48px
      'text-white',
      'bg-red-500', // Red background
      'hover:bg-gray-300',
      'hover:text-black',
      'rounded-r-sm', // Rounded corners on the right
      'flex',
      'items-center',
      'justify-center',
      'transition-transform', // Use transform for smooth animation
      'transform', // Ensure transforms work
      'translate-x-full', // Start off-screen to the left
      'group-hover:translate-x-0', // Translate to 0 on hover
      'opacity-0',
      'group-hover:opacity-100' // Show on hover
    )
    trashButton.onclick = () => {
      removeItem(todo.todoID)
      console.log('Delete!')
    }


    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa', 'fa-trash')


    trashButton.appendChild(trashIcon)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(trashButton)

    todoItem.appendChild(todoText)
    todoItem.appendChild(buttonContainer)

    todoList.appendChild(todoItem)
    //---------------------------------------Trash Button End Here------------------------------------------------------------------
  })
}


function markCompleted(todoID) {
  const todoItem = document.querySelector(`#todo-${todoID}`)
  if (todoItem) {
    todoItem.classList.toggle(line-through)
    const todo = todos.find(t => t.todoID === todoID)
    todo.todoComplete = !todo.todoComplete
  }
}

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
  

  document.getElementById('IDBtn').addEventListener('click', addTodo)
  document.getElementById('inputFld').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTodo()
    }
  })

  //Adding new todo--
  function addTodo() {
    const input = document.getElementById('inputFld')
    if (input.value.trim()) {
      const newTodo = {
        todoID: todos.length > 0 ? todos[todos.length - 1].todoID + 1 : 0,
        todoText: input.value,
        todoComplete: false
      }
    todos.push(newTodo)
    input.value = ''
    displayTodos()
    }
  }

document.getElementById('clearBtn').addEventListener('click', removeCompleted)
document.getElementById('IDBtn').addEventListener('click', addTodo)
document.getElementById('inputFld').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo()
  }
})

displayTodos()