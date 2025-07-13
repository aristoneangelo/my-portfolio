import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {
        primary: {
        main: "#0b022fff",
        },
        secondary: {
        main: "#046523ff",
        },
    },
    typography:{
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    }
});
theme = responsiveFontSizes(theme);
export default theme;