let navbarCollection = document.getElementsByClassName('linkes');

window.addEventListener('scroll', function() {
  if (!document.body.classList.contains('dm')) {
    for (let i = 0; i < navbarCollection.length; i++) {
      if (window.scrollY > (window.innerHeight * 0.8)) {
        navbarCollection[i].classList.add('nav-dark');
      } else {
        navbarCollection[i].classList.remove('nav-dark');
      }
    }
  } else {
    for (let i = 0; i < navbarCollection.length; i++) {
      navbarCollection[i].classList.remove('nav-dark');
    }
  }
});



function toggleDarkMode() {
  document.body.classList.toggle('dm');
  let navLinks = document.getElementsByClassName('linkes');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('nav-dark');
  }
}
