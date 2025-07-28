import { alpha, styled } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { motion, useScroll } from "motion/react"
import Copyright from "../../components/Copyright/Copyright";
import About from "./sections/About/About";

//import mouse from './assets/css/mouse.css';

const Home = () => {
  const SlyledHome = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
  })) 
  const { scrollYProgress } = useScroll();
  return (
    <SlyledHome>
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#A8FFDC",
                }}
            />
      <NavBar />
      <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration: 2}}>
        <Hero />
      </motion.div>
      <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration: 2}}>
        <About />
      </motion.div>
      <motion.div 
        initial={{opacity:0, translateX:"100%"}}
        whileInView={{opacity:1, translateX:0}}
        transition={{duration: 1}}>
        <Skills />
      </motion.div>
      <motion.div
        initial={{opacity:0, rotateX:"90deg"}}
        whileInView={{opacity:1, rotateX:0}}
        transition={{duration: 2}}>
            <Projects/>
       </motion.div>
        <motion.div>
            <Contact/>
        </motion.div>
        <motion.div>
            <Copyright/>
        </motion.div>
    </SlyledHome>
  );
}

export default Home;