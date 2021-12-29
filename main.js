 const openMenu = document.querySelector('.openMenu');
 const closeMenu = document.querySelector('.closeMenu');
 const test = document.querySelector('.test')
 const checkbox = document.getElementById('checkbox');
 const plan1 = document.querySelector('.plan1');
 const plan2 = document.querySelector('.plan2');
 const plan3 = document.querySelector('.plan3');

// Mobile NAvigation
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

// PRICE CHANGES    
checkbox.addEventListener('click', changePrice);

function changePrice(){
    if(checkbox.checked){
        plan1.innerHTML =`
        <h1>$190.00</h1>
        <p>per year</p>
        `
        plan2.innerHTML =`
        <h1>$390.00</h1>
        <p>per year</p>
        `
        plan3.innerHTML =`
        <h1>$390.00</h1>
        <p>per year</p>
        `
    }else{
        plan1.innerHTML =`
        <h1>$19.00</h1>
        <p>per month</p>
        `
        plan2.innerHTML =`
        <h1>$39.00</h1>
        <p>per month</p>
        `
        plan3.innerHTML =`
        <h1>$99.00</h1>
        <p>per month</p>
        `
    }
}
