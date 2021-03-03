import {
    setScrollAnimationProperties,
    smoothScrollContainerInit,

} from './smoothScroll';
const time = '200ms';
const timingFunction = 'linear'

addEventListener('DOMContentLoaded', () => {
    smoothScrollContainerInit();
    setScrollAnimationProperties(time, timingFunction);
});

addEventListener('wheel', () => {
    setScrollAnimationProperties(time, timingFunction)
});
addEventListener('scroll', () => {
    setScrollAnimationProperties(time, timingFunction)
});