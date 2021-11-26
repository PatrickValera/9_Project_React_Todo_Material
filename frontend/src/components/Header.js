import { Container, Paper, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <Container component='header' maxWidth='md' sx={{p:'25px'}}>
            <Paper elevation={1} sx={{p:'15px',maxWidth:'180px',borderRadius:'25px'}}>
             <Typography variant='h5' fontWeight='700' maxWidth='170px'> Hello Anna<br/>Good morning,</Typography>
             <Typography variant='body2' color='grey.700'fontWeight='700' maxWidth='170px'> You have some important tasks to do for today</Typography>
            </Paper>
        </Container>
    )
}

export default Header
