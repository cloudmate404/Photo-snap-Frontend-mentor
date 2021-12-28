// const openMenu = document.querySelector('.openMenu')
// const closeMenu = document.querySelector('.closeMenu')
// const nav = document.querySelector('.nav')
// const test = document.querySelector('.test')
// // const headerBtn = document.querySelector('.headerBtn')
// const header = document.querySelector('.header')
// const headerIcons = document.querySelector('.headerIcons')


// openMenu.addEventListener('click', ()=>{
//     openMenu.style.display ='none'
//     closeMenu.style.display = 'block'
    

//     test.style.position = 'fixed'
//     test.style.top = '64px'

//     test.style.flexDirection ='column'
//     test.style.display = 'block'

    

//     // header.style.transition = 'top 1s ease'
//     // nav.style.transition = 'all ease 2s'
//     // headerBtn.style.transition = 'top 1s ease'

// })

// closeMenu.addEventListener('click', ()=>{
//     closeMenu.style.display ='none'
//     openMenu.style.display = 'block'
//     // header.style.position = 'static'
//     // nav.style.display ='none'
//     // headerBtn.style.display ='none'
//     test.style.display = 'none'
//     test.style.transition = 'all 2s'

// })

// window.addEventListener('click', function(e){
//     if (!test.contains(e.target)&& (!headerIcons.contains(e.target))){
//      test.style.display="none"
//      closeMenu.style.display ='none'
//     openMenu.style.display = 'block'

//   } 
// })



 const openMenu = document.querySelector('.openMenu');
 const closeMenu = document.querySelector('.closeMenu');
 const test = document.querySelector('.test')



 openMenu.addEventListener('click', navOpen);
 closeMenu.addEventListener('click', navClose);
 const headerIcons = document.querySelector('.headerIcons')

 function navOpen(){
    openMenu.style.display ='none';
    closeMenu.style.display = 'block';
    test.classList.toggle("open");
    if(test.classList.contains("open")){
    	test.style.maxHeight = test.scrollHeight + "px";
    }else{
    	test.removeAttribute("style");
    }
 }

 function navClose(){
    closeMenu.style.display ='none';
    openMenu.style.display = 'block';
    test.classList.remove("open");
    test.style.maxHeight = '0px'
   
 }


 window.addEventListener('click', function(e){
    if (!test.contains(e.target)&& (!headerIcons.contains(e.target))){
     navClose()

  } 
})

