import { Container, Grid, styled, Typography } from "@mui/material";

const Skills = () => {

    const StyledSkills = styled("div")(({theme}) => ({
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
    }));

    return (
        <StyledSkills>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Typography color="primary.contrastText" display="flex" justifyContent="center">Skills</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography color="primary.contrastText" display="flex" justifyContent="center">Soft Skills</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography color="primary.contrastText" display="flex" justifyContent="center">Technical Skills</Typography>
                </Grid>
            </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;