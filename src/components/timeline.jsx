import { motion } from "framer-motion";
import { section } from "../animations/animation-section";
import { timeline_data } from "../data/timeline_data";
import { timelineAnimationLeft, timelineAnimationRight } from "../animations/animation-timeline";



function Timeline() {

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Timeline" className='timeline sectionDiv'>
            <motion.h1 className="section_name" variants={section}>My road</motion.h1>

            <div className="timeline_2">
                {[...timeline_data].map((item, index) => <motion.div initial={window.innerWidth > 1200 ? 'hidden' : 'hiddenY'} whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? timelineAnimationLeft : timelineAnimationRight} key={index} className={index % 2 === 0 ? 'container left' : 'container right'}>
                    <div title="End time" className="date">{item.date}</div>
                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg></div>
                    <div className="content">
                        <h2>{item.header}</h2>
                        <p>
                            {item.text}
                        </p>
                    </div>
                </motion.div>
                )}
            </div>

            <div className="download_view_buttons">
                <a href="files/CV.pdf" target="_blank" rel="noreferrer" download="CV"><button>download CV</button></a>
                <a href="files/CV.pdf" target="_blank" rel="noreferrer"><button>view CV</button></a>
            </div>
        </motion.div>
    )
}



export default Timeline;