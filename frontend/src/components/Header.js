import { Container, Box, Typography, Button, Menu,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Header = () => {
    const [anchorEl,setAnchorEl]=useState(false)
    const dispatch=useDispatch()
    const {todos}=useSelector(state=>state.todoList)
    const {currentTheme}=useSelector(state=>state.appState)
    let length=todos.filter(todo=>todo.checked===false).length

    const handleClick=(event)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteAll=()=>{
        dispatch({type:"DELETE_ALL"})
    }
    const changeTheme=()=>{
        dispatch({
            type:"CHANGE_THEME",
            payload:currentTheme==='dark'?'default':'dark'
        })
    }
    return (
        <Box>
            <Container component='header' maxWidth='md' sx={{p:'50px 30px 30px 20px'}}>
                <Box display='flex' sx={{flexWrap:'wrap'}}>
                    <Box display='flex' sx={{flex:'100% 1 1'}}>
                        <Typography variant='h5' color='primary' fontWeight='700' sx={{flexGrow:'1'}}>Good morning Patrick</Typography>
                        <Button variant='outlined' color='primary' onClick={handleClick}>
                            <i className="fas fa-cogs"></i>
                        </Button>
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={anchorEl?true:false}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={changeTheme}>Change Theme</MenuItem>
                            <MenuItem onClick={deleteAll}>Delete All</MenuItem>
                        </Menu>

                    </Box>
                    <Typography variant='body2' color='grey.600'fontWeight='700' maxWidth='170px'>{todos?`You have ${length} ${length>1?'tasks':'task'}.`:'You have no tasks today'}</Typography>
                </Box>

            </Container>
        </Box>
    )
}

export default Header
