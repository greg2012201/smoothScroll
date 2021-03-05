import {
    setScrollAnimationProperties,
    smoothScrollContainerInit,

} from './smoothScroll';
const time = '1000ms';
const timingFunction = 'cubic-bezier(0.23, 1, 0.32, 1)';

addEventListener('DOMContentLoaded', () => {
    smoothScrollContainerInit();
    setScrollAnimationProperties(time, timingFunction);
});

addEventListener('wheel', () => {
    console.log('wywołanie wheel');
    setScrollAnimationProperties(time, timingFunction)
});
addEventListener('touchmove', () => {

    console.log('wywołanie touch');
    setScrollAnimationProperties(time, timingFunction)
});