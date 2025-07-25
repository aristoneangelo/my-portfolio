import React from "react"
import { alpha, Container, Grid, styled } from "@mui/material"
import CardMedia from "../../../../components/Cards/CardMedia"
import * as SkillIcons from "../../../../assets/images/SkillsIcons/index.jsx"
import Skills from "../Skills/Skills"

const ProjectsInfo = [
    {
        img: SkillIcons.html_5,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
    },

    {
        img: SkillIcons.html_5,
        alt: "MY-PORTFOLIO",
        title: "Personal Portfolio",
        desc: "My Personal Blog",
        Skills: [" HTML5"," CSS3"," JAVASCRIPT"," REACTJS"],
    },
]

const Projects = () => {
    const StyledProjects = styled("div")(({theme}) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
        paddingBottom:6,

    }))
    return (
        <>

            <StyledProjects>
                <Container maxWidth="lg">
                <Grid size={{ xs: 12, md: 12 }}>
                        <Grid container spacing={2} >
                            {ProjectsInfo.map(info =>
                                <CardMedia img={info.img} alt={info.alt} title={info.title} desc={info.desc} skills={info.Skills} />
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects