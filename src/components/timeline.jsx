import { motion } from "framer-motion";
import { useState } from "react";
import { section } from "../animations/animation-section";
import { timeline_data } from "../data/timeline_data";
import Item from "./timeline_item";
import CV from "../assets/files/CV ENG.pdf";



function Timeline() {

    const [reverse, setReverse] = useState(true);
    // eslint-disable-next-line
    const [more, setMore] = useState(false);

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Timeline" className='timeline sectionDiv'>
            <motion.h1 className="section_name" variants={section}>My road</motion.h1>
            <div className="button_div"><button onClick={() => setReverse(prev => !prev)}>reverse</button></div>

            <div className="timeline_2">
                {!reverse && !more ? [...timeline_data].map((item, index) => index < 6 && <Item key={`${item.header}-${index}`} index={index} date={item.date} header={item.header} text={item.text} />)
                    : !reverse && more ? [...timeline_data].map((item, index) => <Item key={`${item.header}-${index}`} index={index} date={item.date} header={item.header} text={item.text} />)
                        : reverse && !more ? [...timeline_data].reverse().map((item, index) => index < 6 && <Item key={`${item.header}-${index}`} index={index} date={item.date} header={item.header} text={item.text} />)
                            : [...timeline_data].reverse().map((item, index) => <Item key={`${item.header}-${index}`} index={index} date={item.date} header={item.header} text={item.text} />)}
                {/* <div className="button_div"><button className="more_timeline_button" onClick={() => setMore(prev => !prev)}>{!more ? 'read more' : 'hide'}</button></div> */}
            </div>

            <div className="download_view_buttons">
                <a href={CV} target="_blank" rel="noreferrer" download="CV"><button>download CV</button></a>
                <a href={CV} target="_blank" rel="noreferrer"><button>view CV</button></a>
            </div>
        </motion.div>
    )
}



export default Timeline;