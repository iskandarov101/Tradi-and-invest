//======= HEADER====
const elOpenBtn =  document.querySelector('.burger-menu');
const elCloseBtn = document.querySelector('.navbar__btn');
const elNavbar = document.querySelectorAll('.navbar')
const elHeader = document.querySelector('.header');

elOpenBtn.addEventListener('click', ()=> {
  elNavbar.forEach(item => item.classList.add('visible'))
});

elCloseBtn.addEventListener('click', () => {
  elNavbar.forEach(item => item.classList.remove('visible'))
});

const headerScroll = () => {
  if(window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight * 0.8) {
    elHeader.classList.add('header-scroll')
  }
  if(window.pageXOffset == 0) {
    elHeader.classList.remove('header-scroll')
  }
}
window.addEventListener('scroll', headerScroll)