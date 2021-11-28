import './App.css';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme,darkTheme } from './theme';
import Header from './components/Header';
import Input from './components/Input'
import Nav from './components/Nav'
import TasksContainer from './components/TasksContainer';
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

function App() {
  const [theme,setTheme]=useState(mainTheme)
  const {currentTheme}=useSelector(state=>state.appState)

  useEffect(() => {
    if(currentTheme==='default')setTheme(mainTheme)
    else if(currentTheme==='dark')setTheme(darkTheme)
  }, [currentTheme])
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{pb:'20px',bgcolor:'background.default',minHeight:'100vh'}}>
        <Header/>
        <Nav/>
        <TasksContainer/>
        <Input/>
        </Box>
    </ThemeProvider>
  );
}

export default App;
