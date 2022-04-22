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

//More item
const btnMoreItem = document.querySelector('.more-item')
const itemMore = document.querySelector('.item-more')
const itemHide = document.querySelector('.item-hide')

btnMoreItem.onclick = (event) => {
  const itemsGallery = document.querySelectorAll('.gallery__bound')

  for (let item of itemsGallery) {
    item.classList.toggle('active-item')
  }

  itemMore.classList.toggle('show')
  itemHide.classList.toggle('show')
}
