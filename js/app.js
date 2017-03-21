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
  var imageLeft   = itemListArray[currentlyShownUserPageArray[0]].itemPath;
  var imageCenter = itemListArray[currentlyShownUserPageArray[1]].itemPath;
  var imageRight  = itemListArray[currentlyShownUserPageArray[2]].itemPath;
  console.log('current' + currentlyShownUserPageArray);
  document.getElementById('image1').src = imageLeft;
  document.getElementById('image2').src = imageCenter;
  document.getElementById('image3').src = imageRight;
}


randomPictureGenerator();

image1.addEventListener("click", randomPictureGenerator);
image2.addEventListener("click", randomPictureGenerator);
image3.addEventListener("click", randomPictureGenerator);

//need to get index of currentlyShownUserPageArray[] and use the value to select item from itemListArray; and display image

//compare image value itemListArray[] [1(image index)]


//runs randomItemSelectionVar, can't be the same as each other
//pushes into currentlyShownUserPageArray
//compares currentlyShownUserPageArray > previouslyShownUserPageArray

//////////////////////////////////////////
