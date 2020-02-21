function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.header-paralax', '.parallaxMedium', 'parallaxEnd');
    scrollPos = window.scrollY;


}
window.addEventListener('scroll', scrollBanner);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}