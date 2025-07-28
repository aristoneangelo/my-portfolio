
import Avatar from "../../../../assets/images/avatar.jpg";
import {Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { styled} from '@mui/material/styles';
import BubbleBackground from "../../../../components/StyledBackground/StyledBackground";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


const texts = ['FullStack Developer', 'and Product Manager'];
const colors = ['#A8FFDC', '#dfd7daff'];
const cursorColor = '#A8FFDC'; // 🌟 Altere aqui a cor do cursor

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentText = texts[index];
    const speed = isDeleting ? 50 : 120;

    const typingTimeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      } else {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, displayedText, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // pisca a cada 0.5s
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <Typography
      variant="h4"
      sx={{
        color: colors[index],
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 600,
        whiteSpace: 'pre',
        fontSize: 40,
      }}
    >
      {displayedText}
      <span style={{ color: cursorColor, opacity: cursorVisible ? 1 : 0 }}>|</span>
    </Typography>
  );
};



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
                            <Typography color="secondary.contrastText" variant="h1" textAlign="center"> 
                                <TypingEffect />
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                        <motion.div
                                            animate={{ y: [0, -10, 0, 10, 0] }} // movimento vertical em loop
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            style={{ display: 'inline-block' }}
                                        >
                                    <StyledButton onclick={() => console.log("Download CV")}>
                                        <DownloadIcon/>
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                    </motion.div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <motion.div
                                            animate={{ y: [0, 10, 0, -10, 0] }} // movimento vertical em loop
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            style={{ display: 'inline-block' }}
                                        ><StyledButton onclick={() => console.log("Contact Me")}>
                                        <EmailIcon/>
                                        <Typography>Contact Me</Typography>
                                    </StyledButton>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Box textAlign={"center"}>
                                <ArrowDropDownOutlinedIcon />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}


export default Hero