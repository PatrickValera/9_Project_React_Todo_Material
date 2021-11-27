import React from 'react'
import {Tab,Tabs,Box, Container} from '@mui/material'
const Nav = () => {
    return (
    <Container maxWidth='md' sx={{ pb:'10px',maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Container>
    )
}

export default Nav
