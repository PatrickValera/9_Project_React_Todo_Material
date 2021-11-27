import React,{useState,useEffect} from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'
import {Container} from '@mui/material'

const TasksContainer = () => {
  const {todos}=useSelector(state=>state.todoList)
  const {currentTab}=useSelector(state=>state.appState)
  const [filteredList,setFilteredList]=useState([])
  useEffect(() => {
    if(todos.length>0){
      switch(currentTab){
          case '1':setFilteredList([...todos].filter(todo=>todo.checked===false))
            break
          case '2':setFilteredList([...todos].filter(todo=>todo.priority===true))
            break
        case '3':setFilteredList(todos)
            break
        case '4':setFilteredList([...todos].filter(todo=>todo.checked===true))
            break
      }
    }
  }, [currentTab,todos])
      useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    return (
        <Container maxWidth='md' sx={{mb:'100px'}} >
          {filteredList.map((task,index)=>(
            <Task key={index} task={{...task}}/>
          ))}
        </Container>
    )
}

export default TasksContainer
