const div =document.querySelectorAll('.div');
const button=document.querySelector('input[type="button"]')

div.forEach(divs=>{
button.addEventListener('click',()=>{
    divs.classList.toggle('on');
    button.classList.toggle('on')
});

});
