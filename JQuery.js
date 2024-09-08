/**import from index.html**/

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach[src =>{
        let top = window.onscrollY;
        let offset = sec.offsetTop = 150;
        
    }]
}

menuIcon.onClick =() =>{
    menuIcon.classList.toggle('bx=x');
    navbar.classList.toggle('active')
}