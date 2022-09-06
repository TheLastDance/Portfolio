const aboutLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

const aboutRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

const aboutLeftY = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

const aboutRightY = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.3, delay: 0.1 },
    },
}

export { aboutLeft, aboutRight, aboutLeftY, aboutRightY };