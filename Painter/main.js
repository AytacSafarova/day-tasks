let color= document.querySelector('input')
let canvas = document.querySelector("canvas")
console.log(color)
window.onload = function () {

 









    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
  

    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = 'black'; // initial brush color
    context.lineWidth = 1; // initial brush width
    var isDrawing = false;
  
  
    // Handle Colors
    var colors = document.getElementsByClassName('colors')[0];
  
    colors.addEventListener('click', function(event) {
      context.strokeStyle = event.target.value || 'black';
    });
  
    // Handle Brushes
    var brushes = document.getElementsByClassName('brushes')[0];
  
    brushes.addEventListener('click', function(event) {
      context.lineWidth = event.target.value || 1;
    });
}