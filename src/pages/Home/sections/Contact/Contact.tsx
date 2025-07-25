
import { Grid, styled } from "@mui/material"
import * as SkillIcons from '../../../../assets/images/SkillsIcons';

const Contact = () => {
    const StyledContact = styled("div")(({theme}) => ({
        background: theme.palette.primary.main,
    }))
    return (
        <StyledContact>
            <Grid container spacing={2}>
                <Grid size={12} padding={1} display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <a href="http://">
                        <img src={SkillIcons.github} width={"40%"} height={"40%"} />
                    </a>
                    <a href="http://">
                        <img src={SkillIcons.linkedin} width={"40%"} height={"40%"} />
                    </a>
                    <a href="http://">
                        <img src={SkillIcons.email} width={"40%"} height={"40%"} />
                    </a>
                </Grid>
            </Grid>
        </StyledContact>
    )
}

export default Contact