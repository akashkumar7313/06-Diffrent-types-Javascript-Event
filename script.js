// click event

// An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.

// If the button is pressed on one element and the pointer is moved outside the element before the button is released,
//  the event is fired on the most specific ancestor element that contained both elements.

const boxElement = document.getElementById("box");

// add a click event listener to the element
boxElement.addEventListener("click", function () {
  alert("you just clicked me 👍");
});

//  dbclick event

// The dblclick event fires when a pointing device button (such as a mouse's primary button)
//  is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.

const box2Element = document.getElementById("box2");

// adding a dblclick event listener to the element
box2Element.addEventListener("dblclick", function () {
  alert("doubleClick event is working properly 👍");
});

// mouseover
// The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad)
//  is used to move the cursor onto the element or one of its child elements.

const box3Element = document.getElementById("box3");

// add a mouseover event listener to the element
box3Element.addEventListener("mouseover", function () {
  alert(
    "you entered in Restricted Area 🙅 (mouse over event is working properly)"
  );
});

//  mouseout event

// The mouseout event is fired at an Element when a pointing device (usually a mouse)
//  is used to move the cursor so that it is no longer contained within the element or one of its children.

const box4Element = document.getElementById("box4");

// add a mouseout event listener to the element
box4Element.addEventListener("mouseout", function () {
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});

//keypress

// The keypress event is fired when a key that produces a character value is pressed down.



let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})


// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

let container = document.getElementById("container");
let display1 = document.getElementById("display1");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display1.style.color = "red";
  display1.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display1.style.color = "green";
  display1.innerText = e.key + " is keyUp";
});