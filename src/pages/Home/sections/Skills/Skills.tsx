import { alpha, Box, Container, Grid, styled, Typography } from "@mui/material";
import CardSkill from "../../../../components/Cards/CardSkill";
import CodeIcon from '@mui/icons-material/Code';
import html_5_svgrepo2 from "../../../../assets/images/SkillsIcons/html_5_svgrepo2.svg";

const Skills = () => {

    const StyledSkills = styled("div")(({theme}) => ({
        padding: theme.spacing(2),
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
    }));

    const StyledGrid = styled(Grid)(({theme}) => ({
        border: `1px solid ${alpha(theme.palette.primary.contrastText, 0.1)}`,
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        
    }));
    
    return (
        <StyledSkills>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Typography color="primary.contrastText" variant="h4" display="flex" justifyContent="center">My Services</Typography>
                </Grid>
                <StyledGrid size={{ xs: 12, md: 12 }}>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4} p={4}>
                        <CardSkill>
                            <CodeIcon fontSize="large"/>
                            <Typography color="primary.main"  variant="h6">Software Developer</Typography> 
                            <Typography color="primary.main"  variant="body1" pt={2}>
                               <img src={html_5_svgrepo2} alt="" />
                            </Typography> 
                        </CardSkill>
                        <CardSkill>
                            <Typography color="primary.main"  variant="h6">Product Manager</Typography> 
                            <Typography color="primary.main"  variant="body1" pt={2}>
                                A Product Manager is responsible for defining the strategy and roadmap for a product. They work cross-functionally to ensure that the product meets the needs of users and the business.
                            </Typography> 
                        </CardSkill>
                        <CardSkill>
                            <Typography color="primary.main"  variant="h6">Web Designer</Typography> 
                            <Typography color="primary.main"  variant="body1" pt={2}>
                                Responsible for designing the layout, visual appearance, and usability of a website. They work on the user interface and user experience to ensure that the website is both functional and aesthetically pleasing.
                            </Typography> 
                        </CardSkill>
                    </Box>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                </StyledGrid>
                <StyledGrid size={{ xs: 12, md: 6 }}>
                    <Typography color="primary.contrastText" display="flex" justifyContent="center">Technical Skills</Typography>
                </StyledGrid>
            </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;