$(document).foundation()
//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting;
//greeting according to time of day
if(hourNow>18){
greeting = 'Good Evening';
}
else if(hourNow>12){
  greeting = 'Good Afternoon';
}
else if(hourNow>0){
  greeting = 'Good Morning';
}
else {
  greeting = 'Welcome';
}
document.write(greeting);
