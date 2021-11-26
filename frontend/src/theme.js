import { createTheme, responsiveFontSizes } from "@mui/material";

let mainTheme = createTheme()

mainTheme=responsiveFontSizes(mainTheme)

export {mainTheme}