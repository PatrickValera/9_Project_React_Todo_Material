import React,{useState,useEffect} from 'react'
import {Container,Box, IconButton,TextField, Button, Typography, Zoom} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { height } from '@mui/system'


const Input = () => {
    const [taskName,setTaskName]=useState()
    const [time,setTime]=useState()
    const [id,setId]=useState(1)
    const [inputActive,setInputActive]=useState(false)
    const dispatch = useDispatch()
    const {todos,idCounter}=useSelector(state=>state.todoList)
    // ======================================================
    // EVENT HANDLERS========================================
    // ======================================================
    const addTask=()=>{
        const newTask={
            title:taskName,
            time:!time==='--:--'?time:'Today',
            priority:false,
            checked:false,
            id:idCounter
        }
        setId(state=>state+1)
        dispatch({
            type:"ADD_TODO",
            payload:newTask
        })
        setTaskName('')
        setTime('--:--')
        window.scrollTo({ top: document.body.scrollHeight })
    }
    const handleClick=()=>{
        setInputActive(state=>!state)
    }
    useEffect(() => {
        localStorage.setItem('idCounter',(idCounter))
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [idCounter])
    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight })
    }, [inputActive])
    // ======================================================
    // COMPONENT DEFINITION==================================
    // ======================================================
    
    return (
        <>
        <Box sx={{minHeight:`${inputActive?'230px':'0'}`}}/>
        <Box sx={{position:'fixed',bottom:'0',width:'100%'}}>
           {inputActive?
           <Zoom in={inputActive}>
           <Container maxWidth='md'   sx={{p:'20px 10px',bgcolor:'white',border:{md:'2px solid'},borderTop:{xs:'2px solid',md:'2px solid '},borderColor:{xs:'primary.main'}, borderRadius:'0 0'}}>
            <Box display='flex' sx={{alignItems:'center', flexWrap:'wrap'}}>
                <Box display='flex' sx={{flex:'100% 1 1'}}>
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
                    
                </Box>
                <Box display='flex' sx={{flex:'100% 1 1',mt:'10px'}}>
                    <Button fullWidth variant='contained' disableRipple color='primary' onClick={addTask}>
                        <Typography disableRipple sx={{p:'0'}} >
                            ADD
                        </Typography>
                    </Button>
                    <Button onClick={handleClick}>
                    Close
                    </Button>
                </Box>
            </Box>
          </Container>
          </Zoom>
            :
            <Container maxWidth='md'>
                <Zoom in={true}>
                <Button color='primary' variant='contained' onClick={handleClick} sx={{float:'right',m:'0 20px 20px 0',minHeight:'50px',minWidth:'50px',borderRadius:'25px'}}>
                    <i className="fas fa-plus"></i>
                </Button>
                </Zoom>
            </Container>
            }
        </Box>
        </>

    )
}

export default Input
