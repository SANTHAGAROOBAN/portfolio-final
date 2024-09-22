var online=document.querySelector('.online');
var onlinediv=document.querySelector('.con');

function onFunction(){
        console.log('working')
        onlinediv.style.color='red';
        onlinediv.textContent='! SYSTEM IS OFFLINE';
        online.style.visibility='visible';
    
}

function offFunction(){
        online.style.transition='3s';
        onlinediv.textContent='! SYSTEM IS ONLINE';
        onlinediv.style.color='green';
        online.style.visibility='hidden';
}

var resumeview=document.querySelector('.view_resume');
var header=document.querySelector('header');
var prev=window.pageYOffset;
var socialicons=document.querySelector('.social_icons')
window.addEventListener('scroll',function(){
    var current=window.pageYOffset;
    if(prev>current){
        header.classList.remove('headerremove')
        resumeview.classList.remove('visi')
        console.log('hello')
    }
    else{
        header.classList.add('headerremove')
        resumeview.classList.add('visi');
        console.log('no')
    }
   prev=current;
});





