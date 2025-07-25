import { styled } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { motion } from "motion/react"

const Home = () => {
  const SlyledHome = styled("div")(({theme}) => ({
    background: "#000000ff",
  })) 
  return (
    <SlyledHome>
      <NavBar />
      <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration: 2}}>
        <Hero />
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
    </SlyledHome>
  );
}

export default Home;