let button = document.getElementById ('buttonClick');
button.addEventListener ('click', function(){
    alert("page is in development, try again later")
})
let section1navigation = document.getElementById('section1mainnav');
let burgerstart = document.getElementById('bar1');

burgerstart.addEventListener('click',function(){
    section1navigation.classList.toggle('new')
})
