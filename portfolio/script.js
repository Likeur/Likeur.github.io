const btnMenu=document.getElementById('btn-menu');
const navigation=document.querySelector('nav');
let barUn=document.getElementById('bar-1');
let barDeux=document.getElementById('bar-2');


btnMenu.addEventListener('click', ()=>{
    barUn.classList.toggle('rotate-45');
    barUn.classList.toggle('absolute');
    barUn.classList.toggle('mt-2');
    barDeux.classList.toggle('w-9');
    barDeux.classList.toggle('-rotate-45');
    navigation.classList.toggle('scale-x-100');
})

setTimeout(() => {
    document.querySelector('.preloader').classList.add('scale-0');
    

}, 2340);