import { motion } from "framer-motion";
import { section } from "../animations/animation-section";
import { data_certifications } from "../data/certifications_data";


function Certifications() {


    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Certifications" className="certifications sectionDiv">
            <motion.h1 className="section_name" variants={section}>Certifications</motion.h1>

            <div className="certifications_2">
                {data_certifications.map((item, index) => <p key={index}> {item.hasOwnProperty('url') ? <a href={item.url} title="Click to view" target="_blank" rel="noreferrer">{item.name}</a> : item.name} <span title="End time">{item.date}</span> </p>)}
            </div>
        </motion.div>
    )
}


export default Certifications;