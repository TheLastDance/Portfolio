const skillsOpacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.3 * custom },
    })
}


export { skillsOpacityAnimation };