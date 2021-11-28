import React, {useState} from 'react'
import {Tab,Tabs, Container} from '@mui/material'
import { useDispatch } from 'react-redux'
import {styled,alpha}from '@mui/material/styles'
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

const StyledTabs = styled(Tabs)(({ theme }) => ({
    borderRadius:'10px',
    '& .Mui-selected': {
      margin:'5px 0',
      background: theme.palette.primary.main,
      borderRadius:'15px',
      boxShadow: `0px 0px 0px 5px ${alpha(theme.palette.primary.main, 0.16)}`,
  },
}));  
  const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize:'.65rem',
    color:theme.palette.text.primary,
    minHeight:'25px'
  }));  
    return (
    <Container maxWidth='md' sx={{mb:'20px', pb:'10px'}}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor='none'
        textColor='text.primary'
        aria-label="scrollable auto tabs example"
      >
        <StyledTab  disableRipple value='1' label="Today" />
        <StyledTab disableRipple value='2' label="Priority" />
        <StyledTab disableRipple value='3' label="All Tasks" />
        <StyledTab disableRipple value='4' label="Completed" />
      </StyledTabs>
    {/* <SuccessSlider/> */}
    </Container>
    )
}

export default Nav
