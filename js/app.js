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
greeting.style.color = '#D40056';
image.src = 'images/dark_sam_web.png';
}
else if(hourNow>12){
  greeting.innerHTML = 'Good Afternoon!';
  greeting.style.color = '#093DA4';
  image.src = 'images/buddha_blue_web.jpg';
}
else if(hourNow>0){
  greeting.innerHTML = 'Good Morning!';
  greeting.style.color = '#F6A100';
  image.src = 'images/eggato.png';
}
else {
  greeting.innerHTML = 'Welcome!';
  greeting.style.color = '#494847';
  image.src = 'images/dwayne_bird_web.png';
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
