// const div = document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello World"
// div[0].style.color="white"
// div[0].style.background="black"

const container=document.getElementsByClassName('container');
console.log(container);
container[0].innerHTML = '<h2 style=color:cyan>Welcome to ABES</h2>'
const h1 = document.createElement('h1');
h1.innerText='Computer Science and Engineering';
h1.style.color='brown';
console.log(h1);
container[0].appendChild(h1);

const img = document.createElement('img');
img.src = 'https://picsum.photos/200/300';
img.setAttribute("height",'200px');
img.setAttribute("width",'200px');
console.log(img);

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    
    container[0].appendChild(img);
    console.log("hello Ji")
});