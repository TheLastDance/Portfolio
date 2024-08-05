import skillsData from "../data/skills_svg";
import { motion } from "framer-motion";
import { skillsOpacityAnimation } from "../animations/animation-skills-list";
import { section } from "../animations/animation-section";


function Skills() {


    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Skills" className="skills">
            <motion.h1 className="section_name" variants={section}>Skills</motion.h1>
            <div className="skills_2">
                {skillsData.map((item, index) => <motion.div custom={index + 1} variants={skillsOpacityAnimation} className="skills_svg" title={item.name} key={index}>{item.src}</motion.div>)}
            </div>
        </motion.div>
    )
}

export default Skills;