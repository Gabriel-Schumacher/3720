let toDos = [
    todoTemplate = {
        id: 0,
        name: "template",
        status: "pending",
        category: "None",
        dueDate: "9-1-2024"
    },
    walkDog = {
        id: 0,
        name: "Walk the Dog",
        status: "pending",
        category: "Chores",
        dueDate: "9-1-2024"
    }
]

function editStatus(id, newStatus) {
    const todo = toDos.find(todo => todo.id === id)
    if (todo) {
        todo.status = newStatus
    }
}

function completeToDo(id) {
    editStatus(id, "completed")
}



function showList() {
    const toDoList = document.getElementById('toDoList')
    toDoList.innerHTML = "",
    toDos.forEach(todo => {
        let listItem = document.createElement('li')
        listItem.textContent = `${todo.name} - ${todo.status} - ${todo.category} - Due: ${todo.dueDate}`
        listItem.classList.add('toDoItem', todo.status)
        toDoList.appendChild(listItem)
    })
}//Will change it to be a card eventually 

showList()

console.log(typeof(value))


