window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('header-transparent');
    } else {
      header.classList.remove('header-transparent');
    }
  });