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
  image.src = 'images/Curious jungle citizen.jpg';
}
else if(hourNow>0){
  greeting.innerHTML = 'Good Morning!';
  greeting.style.color = '#43f9b0';
  image.src = 'images/eggato.png';
}
else {
  greeting.innerHTML = 'Welcome!';
  greeting.style.color = '#43f9b0';
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




carouselSlide.style.transform = 'translateX(' + (-size + counter) + 'px)';

///btn listeners

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transform = "transfrom 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size + counter) + 'px)';

});

prevtBtn.addEventListener('click', () => {
  carouselSlide.style.transform = "transfrom 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size + counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ( =>{
if (carouselImages [counter].id =='lastClone'){
  carouselSlide.style.transition = 'none';
}
}));



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
