import { motion } from "framer-motion";
import { section } from "../animations/animation-section";



function Timeline() {


    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Timeline" className='timeline sectionDiv'>
            <motion.h1 className="section_name" variants={section}>Timeline</motion.h1>
        </motion.div>
    )
}



export default Timeline;