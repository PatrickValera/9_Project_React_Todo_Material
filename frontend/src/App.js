import './App.css';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './theme';
import Header from './components/Header';
import Input from './components/Input'
import Nav from './components/Nav'
import TasksContainer from './components/TasksContainer';


function App() {



  return (
    <ThemeProvider theme={mainTheme}>
        <Header/>
        <Nav/>
        <TasksContainer/>
        <Input/>
    </ThemeProvider>
  );
}

export default App;
