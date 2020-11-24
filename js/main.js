let header = document.querySelector("#header");
let headerHeight = header.offsetHeight;
let scrollPos = window.scrollY;

checkScroll(scrollPos,headerHeight);

window.addEventListener('scroll', () => {
    headerHeight = header.offsetHeight;
    scrollPos = this.scrollY;
    checkScroll(scrollPos,headerHeight);
});

function checkScroll(scrollPos,headerHeight) {
    if( scrollPos > headerHeight){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
}
