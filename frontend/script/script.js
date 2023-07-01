let navbarCollection = document.getElementsByClassName('linkes');

window.addEventListener('scroll', function() {
  for (let i = 0; i < navbarCollection.length; i++) {
    if (window.scrollY > 0) {
      navbarCollection[i].classList.add('nav-dark');
    } else {
      navbarCollection[i].classList.remove('nav-dark');
    }
  }
});



function toggleDarkMode() {
  document.body.classList.toggle('dm');
  let navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('nav-dark');
}
