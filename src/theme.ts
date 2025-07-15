import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {
        primary: {
        main: "#0b022fff",
        },
        secondary: {
        main: "#A8FFDC",
        },
        
    },
    typography:{
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    }
});
theme = responsiveFontSizes(theme);
export default theme;