
import { alpha, Box, Container, Grid, styled, Typography } from "@mui/material"
import * as SkillIcons from '../../../../assets/images/SkillsIcons';
import { motion } from "motion/react";
import StyledSectionTitle from "../../../../components/Typography/StyledSectionTitle";
import theme from "../../../../theme";

const Contact = () => {
    const transparentColor = alpha(theme.palette.primary.contrastText, 0.8);
    const StyledContact = styled("div")(({theme}) => ({
        padding: theme.spacing(2),
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        textAlign: "center"
    }))

    return (
        <StyledContact>
            <Container maxWidth="lg">
                <Grid size={12} display="flex" justifyContent="center" pt={6}>
                    <StyledSectionTitle underlineWidth="60%" underlineSide="left">
                        <Box display={"flex"} justifyContent="center" alignItems="center" gap={1}>
                            <Typography variant="h2" fontFamily={"cursive"}>Get in</Typography>
                            <Typography variant="h6" color="#ffffff">Touch</Typography>
                        </Box>
                    </StyledSectionTitle>
                </Grid>
                <Grid size={12} display="flex" justifyContent="center" pt={6}>
                    <Typography variant="body2" sx={{ color: transparentColor }}>
                        If you're looking for someone who understands both code and customers — you just found them.
                    </Typography>
                </Grid>
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ minHeight: '20vh' }}>
                
                <Grid size={4}>
                    <motion.div
                        whileHover={{
                            scale: [null, 1.1, 1.6],
                            rotate: [0, 0, 180, 180, 0],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}>  
                        <a href="https://github.com/aristoneangelo">
                            <img src={SkillIcons.github} width={"10%"} height={"10%"} />
                            <Typography variant="body2" sx={{ color: transparentColor }}>
                                aristoneangelo
                            </Typography>
                        </a>
                    </motion.div>
                    </Grid>
                    
                    <Grid size={4}>
                        <motion.div
                        whileHover={{
                            scale: [null, 1.1, 1.6],
                            rotate: [0, 0, 180, 180, 0],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}>  
                        <a href="www.linkedin.com/in/aristone-diateza">
                            <img src={SkillIcons.linkedin} width={"10%"} height={"10%"} />
                            <Typography variant="body2" sx={{ color: transparentColor }}>
                                Aristone Diateza
                            </Typography>
                        </a>
                        </motion.div>
                    </Grid>
                    <Grid size={4}>
                        <motion.div
                        whileHover={{
                            scale: [null, 1.1, 1.6],
                            rotate: [0, 0, 180, 180, 0],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}>  
                        <a href="mailto:aristoneangelo@hotmail.com">
                            <img src={SkillIcons.email} width={"10%"} height={"10%"} />
                            <Typography variant="body2" sx={{ color: transparentColor }}>
                                aristoneangelo@hotmail.com
                            </Typography>
                        </a>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </StyledContact>
    )
}

export default Contact