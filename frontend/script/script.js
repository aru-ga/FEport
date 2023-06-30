window.addEventListener('scroll', function() {
  let navbar = document.querySelector('.nav-links'); 

  if (window.scrollY > 0) {
    navbar.classList.add('nav-dark');
  } else {
    navbar.classList.remove('nav-dark');
  }
});

function darkMode(){
  let bodie = document.body;
  bodie.classList.toggle("dm");
}