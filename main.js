const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const nav = document.querySelector('.nav')
const headerBtn = document.querySelector('.headerBtn')
const header = document.querySelector('header')


openMenu.addEventListener('click', ()=>{
    openMenu.style.display ='none'
    closeMenu.style.display = 'block'
    header.style.position = 'absolute'
    header.style.zIndex = '10'
    nav.style.display ='block'
    headerBtn.style.display ='block'
    header.style.transition = 'top 1s ease'
    nav.style.transition = 'all ease 2s'
    headerBtn.style.transition = 'top 1s ease'

})

closeMenu.addEventListener('click', ()=>{
    closeMenu.style.display ='none'
    openMenu.style.display = 'block'
    header.style.position = 'static'
    nav.style.display ='none'
    headerBtn.style.display ='none'
})