import React,{useState} from 'react'
import {Paper, Typography,IconButton, Button, Zoom} from '@mui/material'
import { useDispatch } from 'react-redux'
import {Container,Box,TextField} from '@mui/material'


const Task = ({task:{title,time,checked,priority,id}}) => {
    const [editActive,setEditActive]=useState(false)
    const [newTaskName,setNewTaskName]=useState(title)
    const [newTime,setTime]=useState(time)
    const dispatch=useDispatch()

    const changeStatus=()=>{
        dispatch({
            type:"CHANGE_STATUS",
            payload:id
        })
    }
    const changePriority=()=>{
        dispatch({
            type:"CHANGE_PRIORITY_STATUS",
            payload:id
        })
    }
    const editTodo=()=>{
        dispatch({
            type:"EDIT_TODO",
            payload:{
                id:id,
                title:newTaskName,
                time:newTime
            }
        })
        setEditActive(state=>!state)
    }
    const deleteTodo=()=>{
        dispatch({
            type:"DELETE_TODO",
            payload:id
        })
        setEditActive(false)
    }
    return (
        <Zoom in={true}>
            <Paper elevation={checked?0:4} sx={{display:'flex',p:'20px',mb:'10px',borderRadius:'10px',bgcolor:`${checked&&'transparent'}`}}>
            {editActive?
                <Box display='flex' sx={{flexGrow:1,flexWrap:'wrap'}}>
                    <Box display='flex' sx={{flex:'100% 1 1', mb:'10px'}}>
                    {/* INPUT FOR NEW TASK NAME */}
                    <TextField 
                        value={newTaskName} 
                        onChange={(e)=>{setNewTaskName(e.target.value)}} 
                        onKeyPress={(e)=>{
                            if(e.key==='Enter')editTodo()
                        }}
                        autoFocus={editActive}
                        fullWidth 
                        id="outlined-basic" 
                        label="New Task" 
                        variant="outlined" 
                        size='small'
                        sx={{flexGrow:'1',mr:'10px'}}
                        color='primary'
                    />
                    </Box>
                    <Box display='flex' sx={{flex:'100% 1 1'}}>
                        {/* INPUT FOR NEW TASK TIME */}
                        <TextField
                            id="time"
                            label="Time"
                            type="time"
                            defaultValue={time}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                            sx={{ minWidth: {sx:'20px',md:'140px'} }}
                            onChange={(e)=>{setTime(e.target.value)}}
                            size='small'
                        />
                        {/* BUTTON FOR TRASH AND SUBMIT */}
                        <Button variant='contained' color='error' sx={{flexGrow:'1',m:'0 10px'}} onClick={deleteTodo} >
                            <IconButton size='small' sx={{p:'0'}}>
                                <i className="fas fa-trash-alt"></i>
                            </IconButton>
                        </Button>
                        <Button variant='contained' disableRipple color='primary' onClick={editTodo} >
                            <IconButton size='small'sx={{p:'0'}}>
                                <i className="fas fa-pencil-alt"></i>
                            </IconButton>
                        </Button>
                    </Box>
                </Box>
                :
                <>
                    <Box sx={{
                        minWidth:'4px', 
                        height:'auto',
                        bgcolor:`${priority?'rgb(254,216,52)':'primary.main'}`,
                        borderRadius:'2px'}}
                    />

                    <Box sx={{minWidth:'40px'}}>
                        <IconButton onClick={changeStatus} color='primary'>
                            {checked?<i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                        </IconButton>
                    </Box>

                    <Box sx={{flexGrow:1,overflow:'hidden',whiteSpace: 'nowrap'}}>
                        <Typography variant='body1' fontWeight='500' color={checked?'grey.500':'grey:900'} sx={{textOverflow:'ellipsis'}}>{title}</Typography>
                        <Typography variant='body2' color={checked?'grey.300':'grey:500'}>{time}</Typography>
                    </Box>
                    
                    <Box sx={{minWidth:'30px'}}>
                        <IconButton onClick={changePriority}>
                            {priority?<i style={{color:'rgb(254,216,52)'}} className="fas fa-star"/>:<i style={{color:'rgb(254,216,52)'}} className="far fa-star"/>}
                        </IconButton>
                    </Box>
                    <Box sx={{minWidth:'30px'}}>
                        <IconButton onClick={()=>setEditActive(state=>!state)} color='primary'>
                            <i className="fas fa-pencil-alt"></i>
                        </IconButton>
                    </Box>
                </>
            }
            </Paper>
            </Zoom>
    )
}

export default Task
