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

/*Code for subscribe us button */
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