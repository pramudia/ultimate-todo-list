import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/todoForm/TodoForm'
import TodoList from './components/todoList/TodoList'
import todoImage from './assets/todo-list.png'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);


  // get todos dari localstorage
  useEffect(() => {
    const todoJSON = localStorage.getItem("todos")
    const retriviedTodos = JSON.parse(todoJSON)
    if (retriviedTodos.length > 0) {
      setTodos(retriviedTodos)
    }
  }, [])

  // setting todos ke localstorage
  useEffect(() => {
    const todoJSON = JSON.stringify(todos)
    localStorage.setItem("todos", todoJSON)
  }, [todos])

  const handleInputChange = (e) => {
    if (e.target.id === "todo-add-input") {
      setTodo(e.target.value)
    } else {
      setEditTodo(e.target.value)
    }

  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.id)

    if (e.target.id === "todo-add-form") {
      const newTodo = {
        id: uuidv4(),
        todoText: todo,
        isCompleted: false
      }
      setTodos([...todos, newTodo])
      setTodo('')
    } else {
      const updateTodo = [...todos].map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, todoText: editTodo }
        }
        return todo
      })
      setTodos(updateTodo)
      setEditTodoId(null)
      setEditTodo('')
    }
  }

  const removeTodo = (id) => {
    const updateTodo = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updateTodo)
  }

  const completeTodo = (id) => {
    const updateTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodos(updateTodo)
  }

  const toggleEditTodo = (id) => {
    console.log(id)
    const todo = [...todos].find((todo) => {
      return todo.id === id
    })
    setEditTodoId(id)
    setEditTodo(todo.todoText)
  }


  return (
    <div className="app-container">
      <div className='app-img-box'>
        <img className='app-img' src={todoImage} alt="todo-list" />
      </div>
      <TodoForm
        id='todo-add'
        type='text'
        btnText='Add'
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit} />

      <TodoList
        todos={todos}
        editTodo={editTodo}
        editTodoId={editTodoId}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        toggleEditTodo={toggleEditTodo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  )
}

export default App
