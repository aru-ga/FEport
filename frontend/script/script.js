window.addEventListener('scroll', function() {
    let navbar = document.getElementById('header-bg');
    
    if (window.scrollY > 0) {
      navbar.classList.add('sticky-nav');
    } else {
      navbar.classList.remove('sticky-nav');
    }
  });
  
