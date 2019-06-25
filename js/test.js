//////carouselSlide

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

/////////buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

////counter to monitor what image on
///////////start on 1st img, hence counter 1
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

///btn listeners

nextBtn.addEventListener('click', () => {
  if(counter >= carouselImges.length -1) return;
  carouselSlide.style.transform = "transform 0.5 s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
  carouselSlide.style.transform = "transfrom 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
////////////end of transition to avoid jump when loop end
carouselSlide.addEventListener('transitionend', () =>{
if (carouselImages[counter].id ==='lastClone'){
  carouselSlide.style.transition = "none";
  counter = carouselImages.length - 2;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if (carouselImages[counter].id ==='firstClone'){
  carouselSlide.style.transition = "none";
  counter = carouselImages.length - counter;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
}));
