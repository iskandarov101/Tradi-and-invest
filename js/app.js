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
window.addEventListener('scroll', headerScroll);

//====== TABS=======

const elTab = document.querySelectorAll('.tabpanel__item')
const elTabContents = document.querySelectorAll('.tabs__item')
const elTabs = document.querySelector('.tabpanel__list')

const noneTabs = () => {
  elTabContents.forEach(elTabContent => {
    elTabContent.classList.remove('show');
    elTabContent.classList.add('hide')
  })

  elTab.forEach(tab => {
    tab.classList.remove('tabpanel__item--active');
  })
}


const showTabs = (i = 0) => {
  elTabContents[i].classList.add('show', 'fade')
  elTabContents[i].classList.remove('hide')
  elTab[i].classList.add('tabpanel__item--active')
}

noneTabs()
showTabs()

elTabs.addEventListener('click', (evt) => {
  if (evt.target.matches('.tabpanel__item')) {

    elTab.forEach((tab, i) => {
      if (evt.target == tab) {
        noneTabs()
        showTabs(i)
      }
    })
  }
})

//=========   TABS =========





