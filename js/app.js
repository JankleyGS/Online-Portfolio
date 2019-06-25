//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting = document.getElementById("greeting");
var image = document.getElementById("image");
var navigation = document.getElementById("navigation");



//greeting && image according to time of day
console.log(hourNow);

if(hourNow>18){
greeting.innerHTML = 'Good Evening!';
greeting.style.color = '#43f9b0';
image.src = 'images/dogAndGod.png';

}
else if(hourNow>12){
  greeting.innerHTML = 'Good Afternoon!';
  greeting.style.color = '#43f9b0';
  image.src = 'images/ShreddBot_SideCity.png';
}
else if(hourNow>0){
  greeting.innerHTML = 'Good Morning!';
  greeting.style.color = '#43f9b0';
  image.src = 'images/seraCafe.png';
}
else {
  greeting.innerHTML = 'Welcome!';
  greeting.style.color = '#43f9b0';
  image.src = 'images/T33N4G3R 3000.jpg';
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
