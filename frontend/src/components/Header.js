import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {todos}=useSelector(state=>state.todoList)
    return (
        <Box>
        <Container component='header' maxWidth='md' sx={{p:'50px 30px 30px 30px'}}>
             <Typography variant='h5' fontWeight='700'>Good morning Patrick</Typography>
             <Typography variant='body2' color='grey.700'fontWeight='700' maxWidth='170px'>{todos?`You have ${todos.length} tasks.`:'You have no tasks today'}</Typography>
        </Container>
        </Box>
    )
}

export default Header
