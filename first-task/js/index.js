window.addEventListener('scroll', () => {
  let header = document.getElementById('js-header');
  let section = document.getElementById('js-section');
  let elemTop = section.getBoundingClientRect().top;
  console.log(elemTop);
  if (0 >= elemTop) {
    header.classList.add('js-header-bgc');
  } else {
    header.classList.remove('js-header-bgc');
  };
});
