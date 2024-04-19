const serviceContainer = document.getElementById("service-container")
const rightArrow = document.querySelector("#right-arrow")
const leftArrow = document.querySelector("#left-arrow")




/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////         Carousel Logic         //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
const serviceCardWidth = 290
const maxCarouselRightClicks = 3
let carouselClicks = 0
let startingPoint = 0


const checkClickCount = () => {
  switch (true) {
    case carouselClicks <= 0:
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'block';
      break;
    case carouselClicks === 1:
      leftArrow.style.display = 'block';
      rightArrow.style.display = 'block';
      break;
    case carouselClicks === 2:
      rightArrow.style.display = 'block';
      break;
    case carouselClicks == 3:
      rightArrow.style.display = 'none';
      // console.log("this is the max");
      break;
  }
}

const leftArrowCLickConditions = () => {
  if(startingPoint < 0) {
    carouselClicks--
  } 
}


const leftArrowClick = () => {
  checkClickCount()
  leftArrowCLickConditions()
  startingPoint+=serviceCardWidth
  serviceContainer.style.transform = `translate(${startingPoint}px)`
  // console.log(carouselClicks + "this is the count")
  checkClickCount()
}


const rightArrowClick = () => {
  startingPoint-=serviceCardWidth
  carouselClicks++
  serviceContainer.style.transform = `translateX(${startingPoint}px)`
  checkClickCount()
  // console.log(carouselClicks + "this is the count")
}




checkClickCount()
rightArrow.addEventListener("click", rightArrowClick)
leftArrow.addEventListener("click", leftArrowClick)

// console.log(carouselClicks + "this is the count")