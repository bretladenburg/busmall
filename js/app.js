'use strict';

var itemListArray = [];

//////////////////////////////////////////
////////////// Constructor
//////////////////////////////////////////

function Item(itemName, itemPath){
  this.itemName       = itemName;
  this.itemPath       = itemPath;
  this.itemShownTotal = 0;
  this.numberOfTimesClicked = 0;
  itemListArray.push(this);
}
////////////// Individual items
//////////////////////////////////////////
var a = new Item ('bag', 'assets/bag.jpg');
var b = new Item ('banana', 'assets/banana.jpg');
var c = new Item ('bathroom', 'assets/bathroom.jpg');
var d = new Item ('boots', 'assets/boots.jpg');
var e = new Item ('breakfast', 'assets/breakfast.jpg');
var f = new Item ('bubblegum', 'assets/bubblegum.jpg');
var g = new Item ('chair', 'assets/chair.jpg');
var h = new Item ('chtulu', 'assets/cthulhu.jpg');
var i = new Item ('dog-duck', 'assets/dog-duck.jpg');
var j = new Item ('dragon', 'assets/dragon.jpg');
var k = new Item ('pen', 'assets/pen.jpg');
var l = new Item ('pet-sweep', 'assets/pet-sweep.jpg');
var m = new Item ('scissors', 'assets/scissors.jpg');
var n = new Item ('shark', 'assets/shark.jpg');
var o = new Item ('sweep', 'assets/sweep.png');
var p = new Item ('tauntaun', 'assets/tauntaun.jpg');
var q = new Item ('unicorn', 'assets/unicorn.jpg');
var r = new Item ('usb', 'assets/usb.gif');
var s = new Item ('water-can', 'assets/water-can.jpg');
var t = new Item ('wine glass', 'assets/wine-glass.jpg');
//old items will fill previouslyShownUserPageArray, currentlyShownUserPageArray will //compare to previouslyShownUserPageArray and have different results. itemListArray will hold list of all items

function randomItemSelectionFunc(){
  return Math.floor(Math.random() * (itemListArray.length));
};

var previouslyShownUserPageArray  = [];

function randomPictureGenerator(){
  var currentlyShownUserPageArray   = [];
  console.log('previous' + previouslyShownUserPageArray);
  while(currentlyShownUserPageArray.length < 3){
    var randomItemSelectionVar = randomItemSelectionFunc();
    if(!previouslyShownUserPageArray.includes(randomItemSelectionVar) && !currentlyShownUserPageArray.includes(randomItemSelectionVar)){
      currentlyShownUserPageArray.push(randomItemSelectionVar);
    }
  }
  previouslyShownUserPageArray = currentlyShownUserPageArray;
  var imageLeft   = itemListArray[currentlyShownUserPageArray[0]];//.itemPath;
  var imageCenter = itemListArray[currentlyShownUserPageArray[1]];//.itemPath;
  var imageRight  = itemListArray[currentlyShownUserPageArray[2]];//;.itemPath;
//assign .src to image to access "source" file from itemPath
  image1.src = imageLeft.itemPath;
  image2.src = imageCenter.itemPath;
  image3.src = imageRight.itemPath;

  console.log('current' + currentlyShownUserPageArray);
//increments the itemShownTotal to the Individual item shown
  imageLeft.itemShownTotal++;
  imageCenter.itemShownTotal++;
  imageRight.itemShownTotal++;
//setting alt attribute so the product that was clicked can be kept trak of
  image1.alt = currentlyShownUserPageArray[0];
  image2.alt = currentlyShownUserPageArray[1];
  image3.alt = currentlyShownUserPageArray[2];
}
randomPictureGenerator();

//function to increment clicks for numberOfTimesClicked for each item, to be used for event listener
function handleTheClick(){
  randomPictureGenerator();
  this.numberOfTimesClicked++;
}
//adds clicks to the numberOfTimesClicked for each item
image1.addEventListener("click", handleTheClick);
image2.addEventListener("click", handleTheClick);
image3.addEventListener("click", handleTheClick);



//need to get index of currentlyShownUserPageArray[] and use the value to select item from itemListArray; and display image

//compare image value itemListArray[] [1(image index)]


//runs randomItemSelectionVar, can't be the same as each other
//pushes into currentlyShownUserPageArray
//compares currentlyShownUserPageArray > previouslyShownUserPageArray

//////////////////////////////////////////
