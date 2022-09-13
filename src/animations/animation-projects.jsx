const projectsAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.5 * custom },
    }),
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