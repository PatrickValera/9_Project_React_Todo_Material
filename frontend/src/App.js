import './App.css';
import {useState} from 'react'
import {Container,} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './theme';
import Header from './components/Header';
import Task from './components/Task'
import Input from './components/Input'
import Nav from './components/Nav'
import {useSelector} from 'react-redux'


function App() {

  const [tasks,setTasks]=useState([])
  const {todos}=useSelector(state=>state.todoList)
  const changeState=(key)=>{
    let newAr=[...tasks]
    newAr[key]={title:'CHANGED',time:'111',checked:!tasks[key].checked}
    setTasks(newAr)
  }

  return (
    <ThemeProvider theme={mainTheme}>
        <Header/>

        <Nav/>
        <Container maxWidth='md' sx={{mb:'100px'}} >
          {todos.map((task,index)=>(
            <Task key={index} index={index} task={{...task}} changeState={changeState}/>
          ))}
        </Container>


        
        <Input/>




    </ThemeProvider>
  );
}

export default App;
