import {

    smoothScrollInit,

} from './smoothScroll';
const time = '1000ms';
const timingFunction = 'cubic-bezier(0.23, 1, 0.32, 1)';

addEventListener('DOMContentLoaded', () => {
    smoothScrollInit(time, timingFunction);
});