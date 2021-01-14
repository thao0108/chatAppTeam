import React, { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import firebase from '../config/firebase'
import classes from '../todo.module.css'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('todos')
        .onSnapshot((snapshot) => {
            const todos = snapshot.docs.map(doc => {
                return doc.data()
            })
        setTodos(todos)
    })
    }, [])

const addTodo = content => {
    const id = firebase.firestore().collection('todos').doc().id

    const todoData = {
        content: content,
        id: id,
        isDone: false  
    }

    firebase.firestore().collection('todos').doc(id).set(todoData)
        setTodos([
            ...todos,
            {
                ...todoData
            }
        ])
    }

    const deleteTodo = id => {
        firebase.firestore().collection("todos").doc(id).delete()
        .then(() => {
            setTodos(todos.filter(todo => todo.id !== id))
        })
    }

    return (
        <>
            <body>
                <h1 className={classes.todolist}>Todoリスト</h1>
                <Form addTodo={addTodo} />
                <List todos={todos} deleteTodo={deleteTodo} />
            </body>
        </>
    )
}

export default TodoApp