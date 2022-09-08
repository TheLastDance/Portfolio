const skillsOpacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.25 * custom },
    })
}

export { skillsOpacityAnimation };