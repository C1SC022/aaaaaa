
function position() {
    var maxX = window.innerWidth;  
    var maxY = window.innerHeight; 
console.log(maxX,maxY);
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    console.log('Random Coordinates - X: ' + randomX + ', Y: ' + randomY);
  let button= document.getElementsByClassName('no')[0];
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}

function popUp() {
  document.getElementById("modal").style.display = "block";
}

function closePopUp() {
  document.getElementById("modal").style.display = "none";
}