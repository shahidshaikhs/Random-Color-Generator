window.onload = function() {
  var randomColorValue;
  document.getElementById('colorDivID').onclick = function() {

    randomColorValue = getRandomColor();

    document.getElementById('colorDivID').style.backgroundColor = randomColorValue;
    document.getElementById('colorStringVal').innerHTML = randomColorValue;
    document.getElementById('colorStringVal').style.color = randomColorValue;
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
