//navigation
let button = document.getElementById('menu-button');
let body = document.getElementsByTagName('html')[0];
let back = document.getElementById('back-button');
let mainpage = document.getElementById('content');
let menupage = document.getElementById('content-2');
let menubarbutton = document.querySelectorAll('#menu-bar > .items');
let items = document.querySelectorAll('#menu-content > .items');
let childitems = document.querySelectorAll('#menu-content > .items > .items');
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
childitems.forEach((el,i)=>{
    el.setAttribute('id','menu-c-'+i);
})
//calculator

//divs
let caldiv = document.getElementById('content-3');
let ordersNumbersDiv = document.getElementById('orders-number');
let replacejs = document.getElementById('cal-replace-js');
let closeButton = document.getElementById('close-poup');
let addButton = document.querySelectorAll('#menu-content .items .button');

//all products
let allproductsvalue = 0;
//first buttons
addButton.forEach((el)=>{
    el.addEventListener('click',()=>{
        allproductsvalue++;
        ordersNumbersDiv.style.display = 'block';
        ordersNumbersDiv.querySelectorAll('#num')[0].innerHTML = allproductsvalue;
    })
})

//show cal div
ordersNumbersDiv.addEventListener('click',()=>{
    caldiv.previousElementSibling.style.display = 'none';
    caldiv.style.display = 'block';
})
closeButton.addEventListener('click',()=>{
    caldiv.previousElementSibling.style.display = 'block';
    caldiv.style.display = 'none';
})


//replace java
let replace = function (id,img,name,price){
    if(caldiv.querySelectorAll('#'+id).length == 0){
        caldiv.querySelectorAll('.content')[0].innerHTML += `<div id="${id}" class="items border-[2px] border-dotted border-zinc-300 rounded-xl p-4">
                    <div class="details flex gap-3">
                        <img class="inline-block w-[140px] rounded-lg" src="${img}">
                        <div class="inline-block">
                            <p class="title">${name}</p>
                            <span class="price text-zinc-400"><span class="final-price" first-price="${price}">${price}</span> تومان</span>
                        </div>
                    </div>
                    <div class="count flex gap-1 justify-end">
                        <div class="leading-[0] border-[1px] border-black rounded-full py-[12px] px-[7px] hover:cursor-pointer add">+</div>
                        <div class="text leading-[26px]">1</div>
                        <div class="leading-[0] border-[1px] border-black rounded-full py-[12px] px-[8px] hover:cursor-pointer remove">-</div>
                    </div>
                </div>`;
                //add buttons2
                document.querySelectorAll(`#cal-replace-js div .items .count .add`).forEach((el)=>{
                    el.addEventListener('click',()=>{
                        allproductsvalue += 1;
                        ordersNumbersDiv.querySelectorAll('#num')[0].innerHTML = allproductsvalue;
                        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML)+1;
                        el.parentElement.parentElement.querySelectorAll(`.final-price`)[0].innerHTML = parseInt(el.parentElement.parentElement.querySelectorAll(`.final-price`)[0].getAttribute('first-price'))*parseInt(el.parentElement.parentElement.querySelectorAll(`.count .text`)[0].innerHTML);
                        finalprice();
                    })
                })
                document.querySelectorAll(`#cal-replace-js div .items .count .remove`).forEach((el)=>{
                    el.addEventListener('click',()=>{
                        allproductsvalue -= 1;
                        ordersNumbersDiv.querySelectorAll('#num')[0].innerHTML = allproductsvalue;
                        if(allproductsvalue <= 0){
                            ordersNumbersDiv.style.display = 'none';
                            allproductsvalue=0;
                        }
                        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML)-1;
                        if(el.previousElementSibling.innerHTML == 0){
                            el.parentElement.parentElement.remove();
                        }
                        el.parentElement.parentElement.querySelectorAll(`.final-price`)[0].innerHTML = parseInt(el.parentElement.parentElement.querySelectorAll(`.final-price`)[0].getAttribute('first-price'))*parseInt(el.parentElement.parentElement.querySelectorAll(`.count .text`)[0].innerHTML);
                        finalprice();
                    })
                })
                finalprice();
    }
    else{
        caldiv.querySelectorAll(`#${id} .count .text`)[0].innerHTML = parseInt(caldiv.querySelectorAll(`#${id} .count .text`)[0].innerHTML)+1;
        caldiv.querySelectorAll(`#${id} .final-price`)[0].innerHTML = price*parseInt(caldiv.querySelectorAll(`#${id} .count .text`)[0].innerHTML);
        finalprice();
    }
}


addButton.forEach((el)=>{
    el.addEventListener('click',()=>{
        replace(el.parentElement.getAttribute('id'),el.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src'),el.previousElementSibling.previousElementSibling.previousElementSibling.querySelectorAll('strong')[0].innerHTML,el.previousElementSibling.querySelectorAll('span')[0].innerHTML)
    })
})

//final price
function finalprice(){
    let price =0;
    for(let i =0;i < document.querySelectorAll('.content .price .final-price').length;i++){
        price += parseInt(document.querySelectorAll('.content .price .final-price')[i].innerHTML);
    }
    console.log(price)

    if(document.querySelectorAll('#cal-replace-js .content div').length == 0){
        document.querySelectorAll('#cal-replace-js > .final-price')[0].innerHTML='';
        document.querySelectorAll('#cal-replace-js > .final-price')[0].classList.remove('p-3');
    }
    else if(document.querySelectorAll('#cal-replace-js > .final-price')[0].innerHTML == ''){
        document.querySelectorAll('#cal-replace-js > .final-price')[0].innerHTML = `مجموع : <span class="final-price">${price}</span> تومان`;
        document.querySelectorAll('#cal-replace-js > .final-price')[0].classList.add('p-3');
    }
    else{
        document.querySelectorAll('#cal-replace-js > .final-price .final-price')[0].innerHTML = price;
    }
}
