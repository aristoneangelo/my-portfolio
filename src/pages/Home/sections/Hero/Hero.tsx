
import Avatar from "../../../../assets/images/avatar.jpg"
import {Box, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { styled} from '@mui/material/styles';
import BubbleBackground from "../../../../components/StyledBackground/StyledBackground";

const Hero = () => {
    const StyledHero = styled("div")(({theme}) => ({
       backgroundColor: theme.palette.primary.main,
       height: "100vh",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
    }))
    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        
    }))
    return (
        <>
            <BubbleBackground/>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box textAlign={"center"}>  
                                <StyledImage src={Avatar}  />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }} >
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Aristone Diateza</Typography>
                            <Typography color="secondary.contrastText" variant="h4" textAlign="center">I am Software Engineer and Product Manager</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onclick={() => console.log("Download CV")}>
                                        <DownloadIcon/>
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onclick={() => console.log("Contact Me")}>
                                        <EmailIcon/>
                                        <Typography>Contact Me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}


export default Hero