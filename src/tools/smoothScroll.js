const smoothScrollContainer = document.querySelector('.smooth-scroll-container');
const containerStyles = smoothScrollContainer.style;
let scroll = window.scrollY || window.pageYOffset;

export const smoothScrollContainerInit = () => {
    document.addEventListener('scroll', () => {
        setScrollPosition();

    });
    moveOnScroll();
    setContainersProperties();
}

const setContainersProperties = () => {
    setMainContainerStyle();
    setParentContainerStyle();
}

export const setScrollAnimationProperties = (time, timingFunction) => {
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
    smoothScrollContainer.parentElement.style.height = containerStyles.height;
}
export const setScrollPosition = () => {
    scroll = window.scrollY || window.pageYOffset;
}
export const smoothScrollTo = (target, time, timingFunction) => {
    containerStyles.transform = `translateY(${-target}px)`;
    scrollTo(0, target);
    setScrollAnimationProperties(time, timingFunction);
}
const moveOnScroll = () => {
    containerStyles.transform = `translateY(${-scroll}px)`;
    requestAnimationFrame(moveOnScroll);
}