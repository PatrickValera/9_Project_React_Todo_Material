import React,{useState} from 'react'
import {Paper, Typography,IconButton} from '@mui/material'
import { useDispatch } from 'react-redux'
import {Container,Box,TextField} from '@mui/material'


const Task = ({task:{title,time,checked,priority},index}) => {
    const [editActive,setEditActive]=useState(false)
    const [newTaskName,setNewTaskName]=useState(title)
    const [newTime,setTime]=useState(time)
    const dispatch=useDispatch()

    const changeStatus=()=>{
        dispatch({
            type:"CHANGE_STATUS",
            payload:index
        })
    }
    const changePriority=()=>{
        dispatch({
            type:"CHANGE_PRIORITY_STATUS",
            payload:index
        })
    }
    const editTask=()=>{
        dispatch({
            type:"EDIT_TODO",
            payload:{
                id:index,
                title:newTaskName,
                time:newTime
            }
        })
        setEditActive(state=>!state)
    }
    return (
            <Paper elevation={checked?0:4} sx={{display:'flex',p:'20px',mb:'10px',bgcolor:`${checked&&'transparent'}`}}>

            {editActive?
                <Box display='flex' sx={{flexGrow:1}}>
                    {/* INPUT FOR NEW TASK NAME */}
                    <TextField 
                        value={newTaskName} 
                        onChange={(e)=>{setNewTaskName(e.target.value)}} 
                        onKeyPress={(e)=>{
                            if(e.key==='Enter')editTask()
                        }}
                        fullWidth 
                        id="outlined-basic" 
                        label="New Task" 
                        variant="filled" 
                        size='small'
                    />
                    {/* INPUT FOR NEW TASK TIME */}
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
                        sx={{ minWidth: {sx:'5px',md:'140px'} }}
                        onChange={(e)=>{setTime(e.target.value)}}
                        size='small'
                    />
                    <IconButton 
                        onClick={editTask} 
                        disableRipple 
                        color='primary'
                    >
                        <i className="fas fa-pencil-alt"></i>
                    </IconButton>
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
    )
}

export default Task
