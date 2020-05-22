document.addEventListener('DOMContentLoaded', function() {
let button = document.createElement('button');
let buttonText = document.createTextNode('Add Square');

button.appendChild(buttonText);
document.body.appendChild(button);
button.addEventListener('click', addDiv);
let idNum = 1

function addDiv() {
    let div = document.createElement('div');
    div.classList = ('squares');
    document.body.appendChild(div);
div.setAttribute('id', idNum); 
idNum++
div.addEventListener('mouseenter', function() {
    div.textContent = div.id;
})
 div.addEventListener('mouseleave', function() {
     div.textContent = ' ';
})
}
}
