const smoothScrollContainer = document.querySelector('.smooth-scroll-container');
let scroll = window.scrollY || window.pageYOffset;
const containerStyles = smoothScrollContainer.style;
export const smoothScrollInit = () => {



    document.addEventListener('scroll', setScrollPosition);
    requestAnimationFrame(moveOnScroll);


    setContainersProperties();
}

const setContainersProperties = () => {

    setMainContainerStyle();
    setParentContainerStyle();


    setTimeout(() => {
        smoothScrollContainer.style.transition = 'transform 0.4s linear';

    }, 1000);


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
const setScrollPosition = () => {
    scroll = window.scrollY || window.pageYOffset;
}
const moveOnScroll = () => {

    containerStyles.transform = `translateY(${-scroll}px)`;
    requestAnimationFrame(moveOnScroll);
}