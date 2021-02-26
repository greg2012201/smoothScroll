const smoothScrollContainer = document.querySelector('.smooth-scroll-container');
const translatePosition = 0;


export const smoothScrollInit = () => {
    document.addEventListener('wheel', () => move());
    document.addEventListener('scroll', smoothScrollInit);
    document.addEventListener('touchstart', smoothScrollInit);


    setContainerProperties();
}
const setContainerProperties = () => {
    const containerStyles = smoothScrollContainer.style;
    containerStyles.position = 'fixed';
    containerStyles.left = '0';
    containerStyles.top = '0';
    containerStyles.transform = `translateY(${-translatePosition}px)`;
    containerStyles.width = '100%';

}