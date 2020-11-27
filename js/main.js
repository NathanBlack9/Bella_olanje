let header = document.querySelector("#header");
// let headerHeight = header.offsetHeight;
let scrollPos = window.scrollY;

checkScroll(scrollPos);

window.addEventListener('scroll', () => {
    // headerHeight = header.offsetHeight;
    scrollPos = this.scrollY;
    checkScroll(scrollPos);
});

function checkScroll(scrollPos) {
    if( scrollPos > 0){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
}
