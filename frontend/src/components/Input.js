import React,{useState} from 'react'
import {Container,Box, IconButton,TextField} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'


const Input = () => {
    const [taskName,setTaskName]=useState()
    const [time,setTime]=useState()
    const dispatch = useDispatch()
    const {todos} = useSelector(state => state.todoList)
    // ======================================================
    // EVENT HANDLERS========================================
    // ======================================================
    const addTask=()=>{
        const newTask={
            title:taskName,
            time:!time==='--:--'?time:'Today',
            priority:false,
            checked:false,
            id:todos.length
        }
        dispatch({
            type:"ADD_TODO",
            payload:newTask
        })
        setTaskName('')
        setTime('--:--')
    }
    // ======================================================
    // COMPONENT DEFINITION==================================
    // ======================================================
    return (
        <Box sx={{position:'fixed',bottom:'0',width:'100%',pt:'10px'}}>
          <Container maxWidth='md'   sx={{p:'10px 0',bgcolor:'white',border:'2px solid',borderColor:'primary.main', borderRadius:'0 0'}}>
            <Box display='flex' sx={{alignItems:'center'}}>
                <TextField 
                    value={taskName} 
                    onChange={(e)=>{setTaskName(e.target.value)}} 
                    onKeyPress={(e)=>{
                        if(e.key==='Enter')addTask()
                    }}
                    fullWidth 
                    id="outlined-basic" 
                    label="New Task" 
                    variant="outlined" 
                    size='small'
                    autoComplete='off'
                />
        
                <TextField
                    id="time"
                    label="Deadline"
                    type="time"
                    value={time}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ minWidth: 140 }}
                    onChange={(e)=>{setTime(e.target.value)}}
                    sx={{ minWidth: {sx:'5px',md:'140px'} }}
                    size='small'
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
    )
}

export default Input
