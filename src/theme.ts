import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {
        primary: {
        main: "#0b022fff",
        },
        secondary: {
        main: "#1b6517",
        },
    },
    typography:{
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    }
});
theme = responsiveFontSizes(theme);
export default theme;