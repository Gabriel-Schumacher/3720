const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

//http://localhost:3000/ 
//127.0.0.1

let todos = []

let categories = []

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  //------Start Here--------

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.post('/todos', (req, res) => {
  const newTodo = req.body
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.put('/todos', (req, res) => {

})

app.delete('/todos', (req, res) => {

})

app.get('/todos/category/:category', (req, res) => {

})

app.get('/categories', (req, res) => {

})

app.post('/categories', (req, res) => {

})

app.put('/categories/:name', (req, res) => {

})

app.delete('/categories/:name', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })