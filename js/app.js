//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting = document.getElementById("greeting");
var image = document.getElementById("image");
var navigation = document.getElementById("navigation");



//greeting according to time of day
if(hourNow>18){
greeting = '<h3>Good Evening!</h3>';
image.src = 'images/dark_sam_web.png';


}
else if(hourNow>12){
  greeting = '<h3>Good Afternoon!</h3>';
  image.src = 'images/buddha_blue.png';
}
else if(hourNow>0){
  greeting = '<h3>Good Morning!</h3>';
  image.src = 'images/eggato.png';
}
else {
  greeting = '<h3>Welcome!</h3>';
}

// img change depending on time
if(hourNow>18){
image.src = 'images/dark_sam_web.png';
}
else if(hourNow>12){
  image.src = 'images/buddha_blue.png';
}
else if(hourNow>0){
  image.src = 'images/eggato.png';
}
else {
  image.src = 'images/dwayne_bird_web.png';
}

document.write(greeting);



window.onscroll = function(){

  var y = window.pageYOffset;
  var x = window.pageXOffset;
      console.log(y);
      console.log(x);

  if( y > 1){
        navigation.style.backgroundColor = "#000000";
        } else {
        navigation.style.backgroundColor = "#ffffff";
        }
}
