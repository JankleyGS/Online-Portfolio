//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting = document.getElementById("greeting");
var image = document.getElementById("image");
var navigation = document.getElementById("navigation");

console.log(hourNow);

//greeting && image according to time of day
if(hourNow>18){
greeting.innerHTML = 'Good Evening!';
greeting.style.color = '#ffffff';
image.src = 'images/dark_sam_web.png';
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
