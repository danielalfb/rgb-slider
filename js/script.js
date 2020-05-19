window.addEventListener('load', start);

var outputRed = document.querySelector('#inputRed').addEventListener('input', changeColor);
var outputGreen = document.querySelector('#inputGreen').addEventListener('input', changeColor);
var outputBlue = document.querySelector('#inputBlue').addEventListener('input', changeColor);

function start() {
  showValue();
}

function changeColor() {
  var red = document.querySelector('#inputRed').value;
  var green = document.querySelector('#inputGreen').value;
  var blue = document.querySelector('#inputBlue').value;

  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  var bg = document.querySelector('#boxColor').style.backgroundColor = color;
}

function showValue() {
  var redValue = document.querySelector('#inputRed');
  var outputRedValue = document.querySelector('#inputRedValue');

  redValue.oninput = function () {
    var result = document.querySelector('#inputRedValue').placeholder =
      outputRedValue.innerHTML = this.value;
  }
  var greenValue = document.querySelector('#inputGreen');
  var outputGreenValue = document.querySelector('#inputGreenValue');

  greenValue.oninput = function () {
    var result = document.querySelector('#inputGreenValue').placeholder =
      outputGreenValue.innerHTML = this.value;
  }
  var blueValue = document.querySelector('#inputBlue');
  var outputBlueValue = document.querySelector('#inputBlueValue');

  blueValue.oninput = function () {
    var result = document.querySelector('#inputBlueValue').placeholder =
      outputBlueValue.innerHTML = this.value;
  }
}