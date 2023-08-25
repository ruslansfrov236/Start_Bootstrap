 const hamburger = document.querySelector('.hamburger');
 const navbar= document.querySelector('.navbar');


 hamburger.addEventListener('click' , ()=>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('toggle');
 })

function scroll() {
  let lastScrollPosition = 0;
  const nav_scroll= document.querySelector('nav');
  const navItem= document.querySelectorAll('.nav-link')

  const logo = document.querySelector(".logo")
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
   {
  
    nav_scroll.classList.add('nav-scroll');
    navItem.forEach(item=>item.classList.add('nav-scroll-link'));
    logo.classList.add('logo-scroll');
   

   }
    else
     {
      nav_scroll.classList.remove('nav-scroll');
      navItem.forEach(item=>item.classList.remove('nav-scroll-link'));
      logo.classList.remove('logo-scroll');
 
     }
  });
}

scroll();