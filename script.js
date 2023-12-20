let hidenIcon=document.getElementById("hidenIcon1")
let hidenIcon2=document.getElementById("hidenIcon2")
let hidenIcon3=document.getElementById("hidenIcon3")
let visibleIcon=document.getElementById("sign1")
let visibleIcon2=document.getElementById("sign2")
let visibleIcon3=document.getElementById("sign3")
let text=document.getElementById("text1")
let text2=document.getElementById("text2")
let text3=document.getElementById("text3")

visibleIcon.addEventListener('click', function(){
    visibleIcon.style.display="none"
    text.style.display="block"
    hidenIcon.style.display="block"
});
hidenIcon.addEventListener("click",function(){
    hidenIcon.style.display='none'
    text.style.display='none'
    visibleIcon.style.display='block'  
})
visibleIcon2.addEventListener('click', function(){
    visibleIcon2.style.display="none"
    text2.style.display="block"
    hidenIcon2.style.display="block"
});
hidenIcon2.addEventListener("click",function(){
    hidenIcon2.style.display='none'
    text2.style.display='none'
    visibleIcon2.style.display='block'  
})
visibleIcon3.addEventListener('click', function(){
    visibleIcon3.style.display="none"
    text3.style.display="block"
    hidenIcon3.style.display="block"
});
hidenIcon3.addEventListener("click",function(){
    hidenIcon3.style.display='none'
    text3.style.display='none'
    visibleIcon3.style.display='block'  
    if(text){
        text3.style.display="none"
        hidenIcon3.classList.remove("hidenIcon3")
    }
});

