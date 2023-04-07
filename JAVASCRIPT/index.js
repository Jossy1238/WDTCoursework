//script for Header section 
const hamburger = document.querySelector('.mobile-view');
const navMenu = document.querySelector('.navigation-list');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".navigation-field").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// This is script file for testimonial carousel from owl carousel
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})
/**/

let subInput = document.getElementById('sub-text');
let subButton = document.getElementById('sub-btn');
let SuccessMessage = document.querySelector('.subscribe');

subButton.addEventListener("click", () => {
    if (subInput.value!=""){
        SuccessMessage.classList.remove('d-none');
        subInput.value="";

    setTimeout(() =>
     {SuccessMessage.classList.add("d-none")}, 2000);
    }
    
} )