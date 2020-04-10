
/**
 *  Required External Modules section, import the express and another packages:
 */
const express = require('express')
const fs = require('fs')

/** Here, you execute the default function exported by the express module 
 * to create an instance of an Express application, 
 * which is then stored in app. 
 * You also define the port the server will use to listen for requests 
 * */
const app = express()
const port = 3000


/** routes definition */

// ============= MAIN ROUTE ===============
app.get('/', (req, res) => {
  res.send('hello world')
})


// ============= ABOUT ROUTE ===============
app.get('/about', (req, res) => {
  res.send('this is about page ')
})


// ============= TODOS ROUTE ===============
app.get('/todos', (req, res) => {
  fs.readFile('./todos.json', 'utf-8', (err, data) => {
    let todos = JSON.parse(data)
    res.send(todos)
  })
})

app.get('/todos/:id', (req, res) => {
  fs.readFile('./todos.json', 'utf-8', (err, data) => {
    let todos = JSON.parse(data)
    let index = todos.findIndex(todo => {
      return todo.id == req.params.id
    })
    let todo = todos[index]
    res.send(todo)
  })
})


/** Start a server listening for incoming requests on port and to display a message to confirm it's listening: */
app.listen(port, () => {
  console.log('app listen to port', port)
})

