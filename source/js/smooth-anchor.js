const pageAnchors = document.querySelectorAll('a[href*="#"]');

pageAnchors.forEach(link => {
  console.log(link);
  link.addEventListener('click', evt => {
    evt.preventDefault();

    const blockID = link.getAttribute('href');
    document.querySelector(`${blockID}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
