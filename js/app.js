$(document).foundation()
//////////////greeting script/////////////////
//new date object//
var today = new Date();
//current hr//
var hourNow = today.getHours();
var greeting;
//greeting according to time of day
if(hourNow>18){
greeting = '<h3>Good Evening!</h3>';
}
else if(hourNow>12){
  greeting = '<h3>Good Afternoon!</h3>';
}
else if(hourNow>0){
  greeting = '<h3>Good Morning!</h3>';
}
else {
  greeting = '<h3>Welcome</h3>';
}
document.write(greeting);
