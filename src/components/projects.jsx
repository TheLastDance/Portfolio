import { motion } from "framer-motion";
import { section } from "../animations/animation-section";
import data_projects from "../data/projects_data";
import { projectOpacityAnimation } from "../animations/animation-project-honey";


function Projects() {


    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} id="Projects" className='projects sectionDiv'>
            <motion.h1 className="section_name" variants={section}>Projects</motion.h1>
            <div className="gallery-body">
                <div className="gallery">

                    {data_projects.map((item, index) => <motion.a initial='hidden' whileInView='visible' viewport={{ once: true }} custom={index + 1} variants={projectOpacityAnimation} className="project_item" key={index} href={item.url} title={item.name} target="_blank" rel="noreferrer" style={{ background: `url(${item.img})` }} onMouseOver={() => document.getElementById(`project-${index}`).classList.remove('hide')} onMouseOut={() => document.getElementById(`project-${index}`).classList.add('hide')}>
                        <div id={`project-${index}`} className="project_info hide">
                            <div className="project_name">
                                <p>{item.name}</p>
                            </div>
                            <ul className="project_technologies">
                                {item.svg.map((icon, index) => <li key={index}> {icon} </li>)}
                            </ul>
                            <div className="project_date">
                                {item.date}
                            </div>
                        </div>
                    </motion.a>)}

                </div>
            </div>
            {data_projects.map((item, index) => <div key={index} style={{ width: '30%', height: '300px', background: `url(${item.img})` }}> <ul> {item.svg.map((item, index) => <li key={index}> {item} </li>)} </ul></div>)}
        </motion.div>
    )
}

export default Projects;


// {data_projects.map((item, index) => <div id={'project' + index} key={index} onMouseOver={() => document.getElementById('test').style.color = 'red'} style={{ width: 200, height: 200, background: `url(${item.url})`, transition: '0.5s' }}><p id="test">HELLO WORLD</p> </div>)}