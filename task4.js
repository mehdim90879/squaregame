/* Lab 6 - Task 4 - Use prototype library. Also, look at the DOM lecture
   to remember how to remove elements  */
/* Provided is simple code to create a box. Modify to create 100 boxes
   at random locations (between 0 and 400) in the container div.

   When a box is clicked, you should delete it from the div.
   When the div has no more children, pop up an alert that says
   "Last one!".

   Also, if the user clicks on the button in the HTML file,  generate
   100 more random oxes. */
window.onload = function()
{
  createBoxes();
  document.getElementById("myButton").onclick = createBoxes;
}

/* You are given a simple function that creates a single box at a fixed
   location and with one two color options (red, green). Modify this code
   to create 100 boxes with random locations from randing from top (0 to 400)
   and left (0 to 400). Also, have at least 5 different colors.

  When a mouse is moved over a box, have it delete itself from the container
  div.
*/
function createBoxes()
{
	var i = 0;
  var colors = ["red", "green", "orange", "yellow", "blue"];

for (i =0; i < 100; i++){
  var tall= Math.floor((Math.random() * 400) + 0);
  var left = Math.floor((Math.random() * 400) + 0);
  var newP = document.createElement("p");
  newP.style.top  = tall + "px";
  newP.style.left  = left + "px";
  newP.style.backgroundColor = colors[ Math.floor( Math.random() *5 )];
  /* hint - you can add how to handle the mouse over event before appending
     this element */
  $(newP).observe("mouseover", removeBox);
  $("container").appendChild(newP);
}
}

function removeBox(event)
{
  /* write your code to remove the box here */
  /* think about (1) which element is doing the removing and (2) what element is being removed */
  var r = 0;
    var removeme = document.getElementById("container");
	var eachone = removeme.getElementsByTagName("p");
	if (eachone.length == 1)
    {alert("This the last one!");
    removeme.removeChild(this)
    }
	else if (eachone.length > 1)
	{removeme.removeChild(this);}
}
