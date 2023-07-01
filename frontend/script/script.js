const navbarCollection = document.getElementsByClassName('linkes');

function handleScroll() {
  if (!document.body.classList.contains('dm')) {
    const scrollThreshold = window.innerHeight * 0.8;
    for (let i = 0; i < navbarCollection.length; i++) {
      if (window.scrollY > scrollThreshold) {
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
}

window.addEventListener('scroll', handleScroll);




function toggleDarkMode() {
  document.body.classList.toggle('dm');
  let navLinks = document.getElementsByClassName('linkes');

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('nav-dark');
  }
}
