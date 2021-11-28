import React, {useState} from 'react'
import {Tab,Tabs,TabPanel, Container} from '@mui/material'
import { useDispatch } from 'react-redux'
const Nav = () => {
  const dispatch=useDispatch()
  const [value,setValue]=useState('1')
  const handleChange=(e,newValue)=>{
    dispatch({
      type:'CHANGE_TAB',
      payload:newValue
    })
    setValue(newValue)
  }
    return (
    <Container maxWidth='md' sx={{ pb:'10px',maxWidth: 480, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab disableRipple value='1' label="Today" />
        <Tab disableRipple value='2' label="Priority" />
        <Tab disableRipple value='3' label="All Tasks" />
        <Tab disableRipple value='4' label="Completed" />
      </Tabs>
    </Container>
    )
}

export default Nav
