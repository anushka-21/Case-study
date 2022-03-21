const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});
 
cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
}); 

var f1=function(){
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
}

var f2=function(){
    btn1.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
}

var f3=function(){
    btn2.disabled=true;
    btn1.disabled=true;
    btn4.disabled=true;
}

var f4=function(){
    btn2.disabled=true;
    btn3.disabled=true;
    btn1.disabled=true;
}
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
btn1.onclick=f1;
btn2.onclick=f2;
btn3.onclick=f3;
btn4.onclick=f4;
