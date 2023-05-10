import SmoothScroll from 'smooth-scroll';

function smoothScroll() {

const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
    speed: 700,
    speedAsDuration: true,

});
}

export default smoothScroll;
