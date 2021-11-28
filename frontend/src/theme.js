import { createTheme, responsiveFontSizes } from "@mui/material";

let mainTheme = createTheme({
    palette: {
    primary: {
      main: '#FF7560',
    },
    secondary: {
      main: '#f50057',
    },
    error:{
        main:'#DE4646'
    },
    background:{
        default:'#fff',
        paper:'#fff'
    },
    text:{
        primary:'#111'
    }
  },
})
let darkTheme = createTheme({
    palette: {
    type: 'dark',
    primary: {
      main: '#FF7560',
    },
    secondary: {
      main: '#f50057',
    },
    error:{
        main:'#DE4646'
    },
    background:{
        default:'#242627',
        paper:'#424242'
    },
    text:{
        primary:'#eee'
    }
  },
})
mainTheme=responsiveFontSizes(mainTheme)
darkTheme=responsiveFontSizes(darkTheme)
export {mainTheme,darkTheme}