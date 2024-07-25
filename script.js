let button = document.getElementById('menu-button');
let body = document.getElementsByTagName('html')[0];
let back = document.getElementById('back-button');
let mainpage = document.getElementById('content');
let menupage = document.getElementById('content-2');
button.addEventListener('click',()=>{
    mainpage.style.display = 'none';
    menupage.style.display = 'block';
})
back.addEventListener('click',()=>{
    menupage.style.display = 'none';
    mainpage.style.display = 'block';
})
let menubarbutton = document.querySelectorAll('#menu-bar > .items');
menubarbutton.forEach((el,i)=>{
    el.setAttribute('href','#menu-'+i)
    el.addEventListener('click',()=>{
        menubarbutton.forEach((el)=>{
            el.classList.remove('active');
        })
        el.classList.add('active');
    })
})
let items = document.querySelectorAll('#menu-content > .items');
items.forEach((el,i)=>{
    el.setAttribute('id','menu-'+i);
})