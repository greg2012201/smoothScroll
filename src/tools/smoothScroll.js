const smoothScrollContainer = document.querySelector('.smooth-scroll-container');
const parentContainer = smoothScrollContainer.parentElement;
const containerStyles = smoothScrollContainer.style;
let scroll = window.scrollY || window.pageYOffset;
let isValid = false;

export const smoothScrollInit = (time, timingFunction) => {
    paramsValid(time, timingFunction);

    if (isValid) {
        smoothScrollContainerInit(time, timingFunction);
        initListiners(time, timingFunction);
        setScrollAnimationProperties(time, timingFunction)

    }
}
export const smoothScrollTo = (target, time, timingFunction) => {


    paramsValid(time, timingFunction);
    containerStyles.transform = `translateY(${-target}px)`;
    setTimeout(() => {
        scrollTo(0, target);
    }, 2)

    setScrollAnimationProperties(time, timingFunction);
}
const paramsValid = (time, timingFunction) => {

    const valid = typeof (time) === 'string' && typeof (timingFunction) === 'string';
    if (valid) {
        isValid = true;
    } else {
        throw Error('The params value must be a type of string. Valid value must be similar to: "1000ms","linear"');
    }

}
const initListiners = (time, timingFunction) => {
    addEventListener('wheel', () => {
        setScrollAnimationProperties(time, timingFunction);

    });
    addEventListener('touchmove', () => {
        setScrollAnimationProperties(time, timingFunction)
    });

}

const smoothScrollContainerInit = () => {
    document.addEventListener('scroll', () => {
        setScrollPosition();
        goOutside();


    });
    moveOnScroll();
    setContainersProperties();
}

const setContainersProperties = () => {
    setMainContainerStyle();
    setParentContainerStyle();
}

const setScrollAnimationProperties = (time, timingFunction) => {
    smoothScrollContainer.style.transition = `transform ${time} ${timingFunction}`;

}
const setMainContainerStyle = () => {
    containerStyles.position = 'fixed';
    containerStyles.left = '0';
    containerStyles.top = '0';
    containerStyles.width = '100%';
    containerStyles.overflow = 'hidden';
    containerStyles.transform = `translateY(${-scrollY}px)`;
}
const setParentContainerStyle = () => {

    console.log(containerStyles.height);
    parentContainer.style.height = containerStyles.height
}
const setScrollPosition = () => {
    scroll = window.scrollY || window.pageYOffset;
}

const moveOnScroll = () => {
    containerStyles.transform = `translateY(${-scroll}px)`;
    requestAnimationFrame(moveOnScroll);
}