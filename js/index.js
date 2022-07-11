window.addEventListener('scroll', () => {
  let header = document.getElementById('js-header');
  let section = document.getElementById('js-section');
  let elemTop = section.getBoundingClientRect().top;
  // console.log(elemTop);
  if (0 >= elemTop) {
    header.classList.add('js-header-bgc');
  } else {
    header.classList.remove('js-header-bgc');
  };
});
let hgBtn = document.getElementById('js-button');
let isOpen = document.getElementById('js-hg-menu');

let clickEnabled = (el) => {
  el.classList.toggle('close-button');
  isOpen.classList.toggle('is-open');

  isOpen.onclick = function(){
    el.classList.remove('close-button');
    isOpen.classList.remove('is-open');
  }
}

//上記関数をボタンクリック時に実行
hgBtn.addEventListener('click', () => {
  clickEnabled(hgBtn);
}, false);