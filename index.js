const service = document.querySelector(".card");
const serviceImage = document.querySelector('.card-image');
const serviceInfo = document.querySelector('.card-info');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');

function serviceBlur(){
  // service.style.filter = 'blur(10px)';
  console.log('1')
};

service.addEventListener('click', serviceBlur);

rightArrow.addEventListener('click', serviceBlur)
