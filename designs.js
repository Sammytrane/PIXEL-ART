// Select color input
var gridColor =document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById("submitBtn");
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click' , function(y) { 
    console.log("When the user will click submit the grid button");
    grid.innerHTML = " ";
    y.preventDefault();
    makeGrid();
});
//color selected cell
grid.addEventListener('click', function(y) {
    if(y.target.nodeName === 'TD') {
		y.target.style.backgroundColor = gridColor.value; 
		}
});

function makeGrid(y) {
	for(var i = 0; i < gridHeight.value; i++){
		const row = grid.insertRow (0);
		for( var j = 0; j < gridWidth.value; j++){
			row.insertCell (0);
		}
	}
// Your code goes here!

}
