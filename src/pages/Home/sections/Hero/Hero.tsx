import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.jpg"
import { Container, Grid, Typography } from "@mui/material"

const Hero = () => {
    const StyledHero = styled("div")(()=> ({
       backgroundColor: "#0b022fff",
       height: "100vh",
    }))
    const StyledImage = styled("img")(() => ({
        borderRadius: "50%",
        width: "50%",
    }))
    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <StyledImage src={Avatar} alt="" />
                        </Grid>
                        <Grid size={8}>
                            <Typography color="primary" variant="h1">Aristone Diateza</Typography>
                            <Typography variant="body1">I Software Engineer and Product Manager</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero