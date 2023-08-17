import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import "./todo.css"

export default function Todo() {

    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState(() =>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return []
        return JSON.parse(localValue)
    })

    function handleSubmit(e) {
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title: newItem, completed: false},
            ]
        })
        setNewItem("")
    }
        function toggleTodo(id, completed) {
            setTodos (currentTodos => {
                return currentTodos.map(todo => {
                    if (todo.id === id){
                        return {...todo, completed}
                    }
                    return todo
                })
            })
        }

        function deleteTodo(id){
            setTodos(currentTodos => {
                return currentTodos.filter(todo => todo.id !== id)
            })
        }
        useEffect(()=>{
            localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])
    
  return (
    <div className='vh-100 d-flex align-items-center '>
        <Container >
            <Row>
                <Col>
                <div className="text-center d-flex justify-content-center align-items-center gap-5">
                    
                   
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            
                            <Form.Control className='text-input' value={newItem} type="text" placeholder="Enter  something to do" onChange={e => setNewItem(e.target.value)} />
                        
                        </Form.Group>
                       <Button type="submit" variant="light" className=''>Add</Button>
                        </Form>
                        <div className="todo-list-container">
                            <h1 className='text-light mb-3 td-header'>To do list</h1>
                        <ListGroup as="ul" className='text-light' >
                           <h1 className='nothing-to-do'>{todos.length === 0 && "Nothing To Do"}</h1> 
                        {todos.map(todo => {
                            return(
                        <ListGroup.Item as="li" className='d-flex to-do-item bg-dark text-light gap-2  mb-3 justify-content-between align-items-center'>
                            <div className='text-start d-flex align-items-center gap-4'>
                            <input // prettier-ignore
                            type="checkbox"
                            id="checkbox"
                            label=""
                            className='mb-2 '
                            checked={todo.completed}
                            onChange={e => toggleTodo(todo.id, e.target.checked)}
                        /><span className=''> <p>{todo.title}</p> </span>
                        </div>
                        <div className="delete-button">
                        <Button type="submit" variant="outline-danger" className='m-1' onClick={() => deleteTodo(todo.id)}> <small>Delete</small></Button>
                        </div>
                        </ListGroup.Item>)
                        
                    })}
                        
                        </ListGroup>
                        </div>
                        
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
