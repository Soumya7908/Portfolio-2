//   Sticky navbar

let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
})


// Scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    navbar.classList.remove('active');
};



// Swiper Js code for testimonials
$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('.navbar').toggleClass('active')
    });
});



// Dark light mode
let darkmodeIcon = document.querySelector('#darkmode-icon');
 darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
 };

 