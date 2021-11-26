import './App.css';
import {useState} from 'react'
import {Container,Box, IconButton,TextField} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './theme';
import Header from './components/Header';
import Task from './components/Task'
import TaskClass from './TaskClass'
function App() {
  // const task1 = {title:'Task 1', time:'8:00 AM', checked:false, color:'primary'}
  // const task2 = {title:'Task 2', time:'10:00 AM', checked:false, color:'primary'}
  const [taskName,setTaskName]=useState('A TASK')
  const [tasks,setTasks]=useState([])
  const [time,setTime]=useState('12:12')

  const addTask=()=>{
    const taskNew={title:taskName,time:time,checked:false}
    setTasks([...tasks,taskNew])
    // setTaskName('')
  }
  const changeState=(key)=>{
    let newAr=[...tasks]
    newAr[key]={title:'CHANGED',time:'111',checked:!tasks[key].checked}
    setTasks(newAr)
  }

  return (
    <ThemeProvider theme={mainTheme}>
        <Header/>

        
        <Container maxWidth='md' >
          {tasks.map((task,index)=>(
            <Task key={index} index={index} task={{...task}} changeState={changeState}/>
          ))}
        </Container>



          
        <Box sx={{position:'fixed',bottom:'0',width:'100%',pt:'10px'}}>
          <Container maxWidth='md'   sx={{p:'10px 0',bgcolor:'white',border:'2px solid',borderColor:'primary.main', borderRadius:'10px 10px 0 0'}}>
            <Box display='flex'>
              <TextField 
                value={taskName} 
                onChange={(e)=>{setTaskName(e.target.value)}} 
                fullWidth 
                id="outlined-basic" 
                label="New Task" 
                variant="filled" 
              />
    
              <TextField
                id="time"
                label="Deadline"
                type="time"
                defaultValue={time}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ minWidth: 140 }}
                onChange={(e)=>{setTime(e.target.value)}}
              />
              <IconButton 
                onClick={addTask} 
                disableRipple 
                color='primary'
              >
                  <i style={{fontSize:'40px'}} className="fas fa-pen-square"/>
              </IconButton>
            </Box>
          </Container>
        </Box>



    </ThemeProvider>
  );
}

export default App;
