//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting = document.getElementById("greeting");
var image = document.getElementById("image");
var navigation = document.getElementById("navigation");

///////////carousels////
// var slideIndex = 0;
// carousel();


///////dot slide
var slideIndex = 1;
var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}



//greeting && image according to time of day
console.log(hourNow);

if(hourNow>18){
greeting.innerHTML = 'Good Evening!';
greeting.style.color = '#ffffff';
image.src = 'images/dogAndGod.png';
}
else if(hourNow>12){
  greeting.innerHTML = 'Good Afternoon!';
  greeting.style.color = '#ffffff';
  image.src = 'images/Old Memories.jpg';
}
else if(hourNow>0){
  greeting.innerHTML = 'Good Morning!';
  greeting.style.color = '#ffffff';
  image.src = 'images/eggato.png';
}
else {
  greeting.innerHTML = 'Welcome!';
  greeting.style.color = '#ffffff';
  image.src = 'images/T33N4G3R.jpg';
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//////////////carousel function

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

//////////////////carousel dot slideIndex


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " white";
}
// window.onscroll = function(){
//
//   var y = window.pageYOffset;
//   var x = window.pageXOffset;
//       console.log(y);
//       console.log(x);
//
//   if( y > 1){
//         navigation.style.backgroundColor = "#000000";
//         } else {
//         navigation.style.backgroundColor = "#ffffff";
//         }
// }
