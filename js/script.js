document.getElementById('burger-menu').onclick = (event) => {
  document.getElementById('burger-menu').classList.toggle('open')
  document.getElementById('main-menu').classList.toggle('active')
  // document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

//Scroll+fixed menu
const nav = document.getElementById('menu-stiky')

function checkMarginToTop () {

  window.pageYOffset > nav.offsetTop
    ? nav.classList.add('sticky-menu')
    : nav.classList.remove('sticky-menuy')
}

window.onscroll = (event) => checkMarginToTop()
