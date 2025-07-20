import { alpha, styled } from "@mui/material"

const Projects = () => {
    const StyledProjects = styled("div")(({theme}) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
    }))
    return (
        
        <StyledProjects>
            <h1>Projects</h1>
        </StyledProjects>
    )
}

export default Projects