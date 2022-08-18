var slide_navigation = document.getElementById("side-nav");
function openNav(){
    slide_navigation.style.width = "100%";
}
function closeNav(){
    slide_navigation.style.width = "0";
}
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
)
wow.init();