const timelineAnimationLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    hiddenY: {
        y: 100,
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { ease: "easeOut", delay: 0.5 },
    },
}

const timelineAnimationRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    hiddenY: {
        y: 100,
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { ease: "easeOut", delay: 0.5 },
    },
}


export { timelineAnimationLeft, timelineAnimationRight };