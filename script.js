const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

// Ensure initial state shows Graphic Designing projects
window.addEventListener('DOMContentLoaded', () => {
    filterProjects('graphic');
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.projects');
    
    // Hide all projects
    projects.forEach(project => {
        project.classList.remove('active');
    });

    // Show only the selected category
    const selectedProjects = document.querySelectorAll(`.projects.${category}`);
    selectedProjects.forEach(project => {
        project.classList.add('active');
    });
}


