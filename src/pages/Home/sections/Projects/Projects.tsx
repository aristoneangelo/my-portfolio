
import { alpha, Box, Container, Grid, styled, Typography } from "@mui/material"
import CardMedia from "../../../../components/Cards/CardMedia"
import * as SkillIcons from "../../../../assets/images/SkillsIcons/index.jsx"
import StyledSectionTitle from "../../../../components/Typography/StyledSectionTitle.js"

const ProjectsInfo = [
    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },

    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },

    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },

    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },

    
    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },

    
    {
        img: SkillIcons.javascript,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
        repository: "https://github.com/aristoneangelo/my-portfolio"
    },
]

const Projects = () => {
    const StyledProjects = styled("div")(({theme}) => ({
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.dark,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],

    }))
    return (
        <>
            <StyledProjects>
                <Container maxWidth="lg" >
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Grid container spacing={2} >
                            <Grid size={12} display="flex" pt={{xs:12, md: 12}} justifyContent={"center"} alignItems={"center"}>
                                <StyledSectionTitle underlineWidth="60%" underlineSide="left">
                                    <Box display={"flex"} justifyContent="center" alignItems="center" gap={1}>
                                        <Typography variant="h2" fontFamily={"cursive"}>Featured Projects</Typography>
                                    </Box>
                                </StyledSectionTitle>
                                
                            </Grid>
                            <Grid size={{ xs:12, md: 12}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Typography color="#ffffff">
                                    A showcase of my creative work and technical expertise
                                </Typography>
                            </Grid>
                                {ProjectsInfo.map(info =>
                                    <CardMedia img={info.img} alt={info.alt} title={info.title} desc={info.desc} repository={info.repository} skills={info.Skills} />
                                )}
                        </Grid>
                    </Grid>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects