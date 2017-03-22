'use strict';

var itemListArray   = [];
var previouslyShownUserPageArray  = [];
var labelNameArray  = [];
var labelClickArray = [];
var labelShownArray = [];
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var totalClicks = 0;
var clickLimit = 25;

//////////////////////////////////////////
////////////// Constructor
//////////////////////////////////////////

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemShownTotal = 0;
  itemListArray.push(this);
  this.numberOfTimesClicked = 0;
}

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

function randomItemSelectionFunc(){
  return Math.floor(Math.random() * (itemListArray.length));
};

function randomPictureGenerator(){
  var currentlyShownUserPageArray   = [];
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

if(localStorage.sumOfDataArray){
  var someNewArray = JSON.parse(localStorage.sumOfDataArray);
  for(var i = 0; i < someNewArray.length; i++){
    itemListArray[i].itemClick += someNewArray[i].itemClick;
  }
}

function handleTheClick(){
  randomPictureGenerator();
  totalClicks++;
  var productIdx = this.alt;
  itemListArray[productIdx].numberOfTimesClicked++;
  labelShownArray.push(itemListArray[productIdx].itemShownTotal);

  if (totalClicks === clickLimit ) {
    localStorage.sumOfDataArray = JSON.stringify(itemListArray);
    image1.removeEventListener('click', handleTheClick);
    image2.removeEventListener('click', handleTheClick);
    image3.removeEventListener('click', handleTheClick);
    image1.src = 'http://i.imgur.com/zugsAYb.gif';
    image2.src = 'http://i.imgur.com/zugsAYb.gif';
    image3.src = 'http://i.imgur.com/zugsAYb.gif';
    itemClickedFunc();
  }
}
//adds clicks to the numberOfTimesClicked for each item
image1.addEventListener('click', handleTheClick);
image2.addEventListener('click', handleTheClick);
image3.addEventListener('click', handleTheClick);

//show user how many times was clicked
function itemClickedFunc(){
  var content = document.getElementById('content');
  var ul      = document.createElement('ul');
  content.appendChild(ul);
  for (var i = 0; i < itemListArray.length; i++){
    labelClickArray.push(itemListArray[i].numberOfTimesClicked);
    // var li = document.createElement('li');
    // var dataStr = itemListArray[i].numberOfTimesClicked + ' clicks for ' + itemListArray[i].itemName;
    // li.innerText = dataStr;
    // ul.appendChild(li);
  }

////////////////////////////////////////////////////////////////////////////////////
/////////////////////
///////////////////// Chart JS Stuff
/////////////////////
////////////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < itemListArray.length; i++){
    labelNameArray.push(itemListArray[i].itemName);
  };
  console.log(labelClickArray);
  console.log(labelNameArray);

  // var itemNumbersClicked = labelClickArray;

  var data = {
    labels: labelNameArray,
    datasets: [{
      label: 'Item Clicked',
      data: labelClickArray,
      backgroundColor: 'blue'
    }, {
      label: 'Times Shown',
      data: labelShownArray,
      backgroundColor: 'green'
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
