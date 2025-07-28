import { Padding } from "@mui/icons-material"
import { Container, Grid, styled, Typography } from "@mui/material"

const Copyright = () => {
    const StyledCopyright = styled("div")(({theme}) =>({
        background: theme.palette.primary.main,
        fontFamily: "cursive",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        
    }))
    return (
        <StyledCopyright>
            <Container maxWidth="lg">
            <Grid container spacing={12} padding={4}>
                <Grid size={{ xs: 12, md: 12}}>
                    <Typography> This website is developed by Aristone Diateza</Typography>
                    <Typography> © 2025 Aristone Diateza. All rights reserved.</Typography>
                </Grid>
            </Grid>
            </Container>
        </StyledCopyright>
    )
}

export default Copyright