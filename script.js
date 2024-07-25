let button = document.getElementById('menu-button');
let body = document.getElementsByTagName('html')[0];
let back = document.getElementById('back-button');
let mainpage = document.getElementById('content');
let menupage = document.getElementById('content-2');
let menubarbutton = document.querySelectorAll('#menu-bar > .items');
let items = document.querySelectorAll('#menu-content > .items');
menubarbutton[0].classList.add('active');
document.addEventListener('scroll',(event)=>{
    items.forEach((el,i)=>{
        if(i == 0){
            if(window.pageYOffset >= 0 && window.pageYOffset < el.nextElementSibling.offsetTop-1){
                menubarbutton[i].classList.add('active');
            }else{
                menubarbutton[i].classList.remove('active');
            }
        }
        else if(i != items.length-1){
            if(window.pageYOffset > el.offsetTop-1 && window.pageYOffset < el.nextElementSibling.offsetTop-1){
                menubarbutton[i].classList.add('active');
            }else{
                menubarbutton[i].classList.remove('active');
            }
        }else{
            if(window.pageYOffset > el.offsetTop-1){
                menubarbutton[i].classList.add('active');
            }else{
                menubarbutton[i].classList.remove('active');
            }
        }
    })
})
button.addEventListener('click',()=>{
    mainpage.style.display = 'none';
    menupage.style.display = 'block';
    menubarbutton.forEach((el)=>{
        el.classList.remove('active');
    })
    menubarbutton[0].classList.add('active');
})
back.addEventListener('click',()=>{
    menupage.style.display = 'none';
    mainpage.style.display = 'block';
})
menubarbutton.forEach((el,i)=>{
    el.setAttribute('href','#menu-'+i)
})
items.forEach((el,i)=>{
    el.setAttribute('id','menu-'+i);
})