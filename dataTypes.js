let toDos = []

let todoTemplate = {
    id: 0,
    name: "",
    status: "",
    category: "",
    dueDate: "9-1-2024"
}

function editStatus(id, newStatus) {
    const todo = toDos.find(todo => todo.id === id)
    if (todo) {
        todo.status = newStatus
    }
}

function completeToDo(id) {
    editStatus(id, "completed")
}