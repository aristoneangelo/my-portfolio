import { alpha, Avatar, Box, ClickAwayListener, Container, Grid, Icon, styled, Tooltip, Typography, Zoom } from "@mui/material";
import Soft from "../../../../assets/images/soft.png";
import CardSkill from "../../../../components/Cards/CardSkill";
import StyledSectionTitle from "../../../../components/Typography/StyledSectionTitle";
import CodeIcon from '@mui/icons-material/Code';
import * as SkillIcons from '../../../../assets/images/SkillsIcons';
import ProgressSoftSkillBar from "../../../../components/Progress/ProgressSoftSkill";
import { motion } from "motion/react";
import React from "react";

const SkillsIconsList = [
  { src: SkillIcons.html_5, desc: "HTML5"},
  { src: SkillIcons.css_3, desc: "CSS3"}, 
  { src: SkillIcons.javascript, desc: "JAVASCRIPT"}, 
  { src: SkillIcons.bootstrap, desc: "BOOTSTRAP"},
  { src: SkillIcons.tailwind, desc: "TAILWIND"},
  { src: SkillIcons.typescript, desc: "TYPESCRIPT"}, 
  { src: SkillIcons.nodejs, desc: "NODEJS"}, 
  { src: SkillIcons.csharp, desc: "CSHARP"}, 
  { src: SkillIcons.php, desc: "PHP"},
  { src: SkillIcons.python, desc: "PYTHON"}, 
  { src: SkillIcons.sql, desc: "SQL"}, 
  { src: SkillIcons.firebase, desc: "FIREBASE"}, 
  { src: SkillIcons.react, desc: "REACT"}, 
  { src: SkillIcons.laravel, desc: "LARAVEL"},
  { src: SkillIcons.Django, desc: "DJANGO"}, 
  { src: SkillIcons.docker, desc: "DOCKER"}, 
  { src: SkillIcons.git, desc: "GIT"}, 
  { src: SkillIcons.github, desc: "GITHUB"}, 
  { src: SkillIcons.google_cloud, desc: "GOOGLE CLOUD"},
  { src: SkillIcons.aws, desc: "AWS"}, 
  { src: SkillIcons.azure, desc: "AZURE"}, 
  { src: SkillIcons.azure_devops, desc: "AZURE DEVOPS"}, 
  { src: SkillIcons.kubernetes, desc: "KUBERNETES"}, 
  { src: SkillIcons.material_ui, desc: "MATERIAL-UI"},
  { src: SkillIcons.mysql, desc: "MYSQL"}, 
  { src: SkillIcons.postgresql, desc: "POSTGRESQL"}, 
  { src: SkillIcons.redux, desc: "REDUX"},
  { src: SkillIcons.jira, desc: "JIRA" },
  { src: SkillIcons.productboard, desc: "PRODUCT BOARD"},
  { src: SkillIcons.slack, desc: "SLACK"},
  { src: SkillIcons.trello, desc: "TRELLO"},
  { src: SkillIcons.zapier, desc: "ZAPIER"},
  { src: SkillIcons.zoom, desc: "ZOOM"},
];

const SoftSkillList = [
    {
        skill : "Critical Thinking", percent: 87,
    },
    {
        skill : "Collaborative Communication", percent: 92,
    },
    {
        skill : "Adaptability", percent: 85,
    },
    {
        skill : "Curiosity with Purpose", percent: 90,
    },
    {
        skill : "Ownership & Initiative", percent: 88,
    },
]


const Skills = () => {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

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

    const StyledImg = styled("img")(({theme}) => ({
        //zIndex: -1,
        height: "90%",
        width: "90%",
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }))

    return (
        <StyledSkills>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={12} display="flex" justifyContent="center" pt={6}>
                    <StyledSectionTitle underlineWidth="100%">My Services</StyledSectionTitle>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} p={4}>
                        
                        <CardSkill>
                            <motion.div 
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block' }}>
                            <CodeIcon htmlColor="#A8FFDC" fontSize="large"/>
                            <Typography color="primary.contrastText"  variant="h6">Software Developer</Typography>
                            <Typography color="primary.contrastText"  variant="body1" pt={2}>
                                Full Stack Developer crafting responsive UIs and scalable back-end systems with modern tools and cloud solutions.
                            </Typography>
                            </motion.div>
                        </CardSkill>
                        <CardSkill>
                            <motion.div 
                            initial= {{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block' }}>
                            <CodeIcon htmlColor="#A8FFDC" fontSize="large"/>
                            <Typography color="primary.contrastText"  variant="h5">Product Manager</Typography> 
                            <Typography color="primary.contrastText"  variant="body1" pt={2}>
                                Product Manager defining clear goals and leading teams to deliver smart and scalable user solutions.
                            </Typography>
                            </motion.div>
                        </CardSkill>
                        <CardSkill>
                            <motion.div 
                            initial= {{opacity:0, scale:0}}
                            whileInView={{opacity:1 ,scale:1}}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ display: 'inline-block' }}>
                            <CodeIcon htmlColor="#A8FFDC" fontSize="large"/>
                            <Typography color="primary.contrastText"  variant="h6">AI enthusiast</Typography> 
                            <Typography color="primary.contrastText"  variant="body1" pt={2}>
                                AI Enthusiast applying machine learning and exploring intelligent systems to build creative solutions.
                            </Typography>
                            </motion.div>
                        </CardSkill>
                    </Box>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">

                    </Grid>
                </Grid>

                <StyledGrid container size={{ xs: 12, md: 12 }} padding={4} spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledSectionTitle underlineWidth="50%" underlineSide="left">
                            Tools & Technologies
                        </StyledSectionTitle>
                        <Typography variant="h2" color="primary.contrastText" display="flex" justifyContent="left">
                            I Work With
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Grid container spacing={2} padding={2}>
                            {SkillsIconsList.map((icon) => (
                                <ClickAwayListener onClickAway={handleTooltipClose}>
                                    <Tooltip title={icon.desc} disableFocusListener slots={{transition: Zoom}} enterDelay={500} leaveDelay={200}>
                                        <Grid display={"flex"} justifyContent="center" alignItems={"center"}>  
                                            <Avatar src={icon.src}/>
                                        </Grid>
                                    </Tooltip>
                                </ClickAwayListener>
                            ))}
                        </Grid>
                    </Grid>
                </StyledGrid>
                <StyledGrid container size={{ xs: 12, md: 12 }} padding={2}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Grid container spacing={2} padding={2}>
                        {SoftSkillList.map((info) => (
                            <StyledGrid size={{ xs: 12, md: 12 }} display={"flex"} justifyContent="center" alignItems={"center"} padding={2}>  
                                 <ProgressSoftSkillBar name={info.skill} target={info.percent} speed={50} />
                            </StyledGrid>
                        ))}
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Box display={"flex"} 
                        alignContent={"center"} 
                        alignItems={"center"} 
                        alignSelf={"center"}
                        justifyContent={"center"}
                        justifyItems={"center"}
                        justifySelf={"center"}>
                            <StyledSectionTitle underlineWidth="70%" underlineSide="right">
                                Human Intelligence
                            </StyledSectionTitle>
                        </Box>
                        <Typography variant="h6" color="primary.contrastText">
                           They’re the hidden engines that convert raw talent into  
                           <Typography variant="h2">real-world value.</Typography> 
                        </Typography>
                        <StyledImg src={Soft}  />
                    </Grid>
                </StyledGrid>
            </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;