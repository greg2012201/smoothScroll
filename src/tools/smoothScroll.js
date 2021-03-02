const smoothScrollContainer = document.querySelector('.smooth-scroll-container');
const body = document.querySelector('body');
const containerStyles = smoothScrollContainer.style;
export const smoothScrollInit = () => {



    document.addEventListener('scroll', moveOnScroll);



    setContainersProperties();
}
const setContainersProperties = () => {


    containerStyles.position = 'fixed';
    containerStyles.left = '0';
    containerStyles.top = '0';
    containerStyles.width = '100%';
    containerStyles.overflow = 'hidden';

    setTimeout(() => {
        smoothScrollContainer.style.transition = 'transform 0.4s linear';

    }, 1000);


}





function moveOnScroll() {
    const scroll = window.scrollY || window.pageYOffset;


    containerStyles.transform = `translateY(${-scroll}px)`;

}