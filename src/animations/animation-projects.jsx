const projectsAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "linear", delay: 0.7 },
    },
}


const moreProjectsAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", delay: 0.5 * custom },
    }),
}


export { projectsAnimation, moreProjectsAnimation };