const projectOpacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { ease: "easeOut", delay: 0.2 * custom },
    })
}


export { projectOpacityAnimation };