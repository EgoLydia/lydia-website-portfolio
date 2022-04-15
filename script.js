const navLinks = document.getElementById('nav-links')
const hamburger = document.getElementById('hamburger')

 hamburger.addEventListener('click', () => {
     console.log(navLinks.style.display);
    if(navLinks.style.display === 'block'){
        navLinks.style.display = "none";
    }else{
        navLinks.style.display ="block";
    }
 });

