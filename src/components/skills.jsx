import skillsData from "../data/skills_svg";
import { motion } from "framer-motion";
import { skillsOpacityAnimation } from "../animations/animation-skills-list";

function Skills() {


    return (
        <div id="Skills" className="skills">
            <div className="skills_2">
                {skillsData.map((item, index) => <motion.div custom={index + 1} initial='hidden' whileInView="visible" viewport={{ once: true }} variants={skillsOpacityAnimation} className="skills_svg" title={item.name} key={index}>{item.src}</motion.div>)}
            </div>
        </div>
    )
}

export default Skills;