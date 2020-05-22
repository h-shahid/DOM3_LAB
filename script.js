document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square");
  let colorArray = ["red", "blue", "green", "purple","grey","pink"];

  button.appendChild(buttonText);
  document.body.appendChild(button);
  button.addEventListener("click", addDiv);
  let idNum = 1;

  function addDiv() {
    let div = document.createElement("div");
    div.classList = "squares";
    document.body.appendChild(div);
    div.setAttribute("id", idNum);
    idNum++;
    div.addEventListener("mouseenter", function () {
      div.textContent = div.id;
    });
    div.addEventListener("mouseleave", function () {
      div.textContent = " ";
    });
    div.addEventListener('click', function() { 
    div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    } )
  div.addEventListener('dblclick', function() {
      if(div.id % 2 === 0) {
          if(div.nextElementSibling){
              div.nextElementSibling.remove();
          } else{
              alert('Nothing after this.');
          }
      }
      if(div.id & 2 == 1) { 
        if(div.previousElementSibling) 
        div.previousElementSibling.remove();
    } else {
        alert('Nothing before this.');
    }
  } )
      
  
}
});


