const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

//http://localhost:3000/ 
//127.0.0.1

let todos = []
let categories = [
  {
    id: 0,
    name: 'Uncategorized'
  },
]

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  //------Start Here--------

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.post('/todos', (req, res) => {
  const newTodo = { ...req.body, id: todos.length ? todos[todos.length - 1].id + 1 : 1 };
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.put('/todos', (req, res) => {
  const id = parseInt(req.params.id)
  const updatedTodo = req.body
  const index = todos.findIndex(todo => todo.id === id)

  if (index !== -1) {
    todos[index] = {...todos[index], ...updatedTodo }
    res.json(todos[[index]])
  } else {
    res.status(404).json({ message: "Todo not found"})
  }
})

app.delete('/todos', (req, res) => {

})

app.get('/todos/category/:category', (req, res) => {

})

app.get('/categories', (req, res) => {
  res.json(categories)
})

app.post('/categories', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({message: "Category name is required"})
  }
  const newCategory = {
    id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    name: name.trim(),
  }
  categories.push(newCategory)
  res.status(201).json(newCategory)
})

app.put('/categories/:name', (req, res) => {
  const id = parseInt(req.params.id)
  const updatedCategory = req.body
  const index = categories.findIndex(todo => category.id === id)

  if (index !== -1) {
    categories[index] = {...categories[index], ...updatedCategory }
    res.json(categories[[index]])
  } else {
    res.status(404).json({message: "Category not found"})
  }
})

app.delete('/categories/:name', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })