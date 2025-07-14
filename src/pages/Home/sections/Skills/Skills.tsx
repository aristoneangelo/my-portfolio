import { alpha, Avatar, Box, Container, Grid, styled, Typography } from "@mui/material";
import CardSkill from "../../../../components/Cards/CardSkill";
import CodeIcon from '@mui/icons-material/Code';
import * as SkillIcons from '../../../../assets/images/SkillsIcons';

const SkillsIconsList = [
  SkillIcons.html_5, SkillIcons.css_3, SkillIcons.javascript, SkillIcons.tailwind,
  SkillIcons.typescript, SkillIcons.nodejs, SkillIcons.csharp, SkillIcons.php,
  SkillIcons.python, SkillIcons.sql, SkillIcons.firebase, SkillIcons.react, SkillIcons.laravel,
  SkillIcons.Django, SkillIcons.docker, SkillIcons.git, SkillIcons.github, SkillIcons.google_cloud,
  SkillIcons.aws, SkillIcons.azure, SkillIcons.azure_devops, SkillIcons.kubernetes, SkillIcons.material_ui,
  SkillIcons.mysql, SkillIcons.postgresql, SkillIcons.redux,
];



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
                <Grid size={{ xs: 12, md: 12 }}>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4} p={4}>
                        <CardSkill>
                            <CodeIcon fontSize="large"/>
                            <Typography color="primary.contrastText"  variant="h6">Software Developer</Typography> 
                        </CardSkill>
                        <CardSkill>
                            <Typography color="primary.contrastText"  variant="h5">Product Manager</Typography> 
                            <Typography color="primary.contrastText"  variant="body1" pt={2}>
                                A Product Manager is responsible for defining the strategy and roadmap for a product. They work cross-functionally to ensure that the product meets the needs of users and the business.
                            </Typography> 
                        </CardSkill>
                        <CardSkill>
                            <Typography color="primary.contrastText"  variant="h6">Web Designer</Typography> 
                            <Typography color="primary.contrastText"  variant="body1" pt={2}>
                                Responsible for designing the layout, visual appearance, and usability of a website. They work on the user interface and user experience to ensure that the website is both functional and aesthetically pleasing.
                            </Typography> 
                        </CardSkill>
                    </Box>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                </Grid>
                <StyledGrid size={{ xs: 12, md: 12 }} padding={4}>
                    <Typography color="primary.contrastText" display="flex" justifyContent="center">Technologies I use.</Typography>
                    <Grid container spacing={2} padding={2}>  
                        {SkillsIconsList.map((icon) => (
                        <Grid display={"flex"} justifyContent="center" alignItems={"center"}>  
                            <Avatar src={icon}/>
                        </Grid>
                        ))}
                    </Grid>
                </StyledGrid>
            </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;