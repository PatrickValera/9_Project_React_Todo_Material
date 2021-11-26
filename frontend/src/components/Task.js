import React,{useState} from 'react'
import {Paper,Box, Typography,IconButton} from '@mui/material'

const Task = ({task:{title,time,checked},index,changeState}) => {
    const handleClick=()=>{
        changeState(index)
    }
    return (
            <Paper elevation={checked?0:10} sx={{display:'flex',p:'20px',mb:'10px',bgcolor:`${checked&&'transparent'}`}}>


                <Box sx={{
                    width:'4px', 
                    height:'auto',
                    bgcolor:`${checked?'transparent':'primary.main'}`,
                    borderRadius:'2px'}}
                />

                <Box sx={{minWidth:'30px'}}>
                    <IconButton onClick={handleClick} color='primary'>
                        {checked?<i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </IconButton>
                </Box>


                <Box>
                    <Typography variant='body1' fontWeight='500' color={checked?'grey.500':'grey:900'}>{title}</Typography>
                    <Typography variant='body2' color={checked?'grey.300':'grey:500'}>{time}</Typography>
                </Box>


            </Paper>
    )
}

export default Task
