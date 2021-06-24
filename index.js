const btnUp = document.querySelector('.button--up');
const btnDown = document.querySelector('.button--down');
const sliderImages = document.querySelector('.slider__images');
const sidebar = document.querySelector('.slider__sidebar');
const sliderWrapper = document.querySelector('.slider__wrapper');
const countImages = sliderImages.querySelectorAll("div.image__item").length;

let activeImage = 0;

const height = sliderWrapper.clientHeight;
// sliderImages.style.top = `-${activeImage * 100}vh`;

const slideImage = direction => {
  switch (direction) {
    case "up":
      activeImage++;
      if (activeImage === countImages) activeImage = 0;
      break;
      
    case "down":
      activeImage--;
      if (activeImage < 0) activeImage = countImages - 1;
      break;
    }

    sliderImages.style.transform = `translateY(-${activeImage * height}px)`;  
    // sidebar.style.transform = `translateY(${activeImage * height}px)`;
}
    
btnUp.addEventListener('click', () => slideImage("up"));
btnDown.addEventListener('click', () => slideImage("down"));

