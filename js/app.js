// recuperation des fleches
const arrowLeft = document.body.querySelector('#arrow-left');
const arrowRight = document.body.querySelector('#arrow-right');

var tableauImage = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo4.jpeg"];
// recuperation de l'image du slider 
const imageInSlide = document.querySelector('.box-slide-image');
let indexImage = 0;
//recuperation div indicateur 
var divIndicators = document.querySelector("#box-slide-blockIndicators");

for (let i = 0; i < tableauImage.length; i++) {
  divIndicators.innerHTML += `<span id="${tableauImage[i]}" class="box-slide-indicator"> ° </span>`;
}
divIndicators.addEventListener('click', e => {
  console.log(e.target.id);
  imageInSlide.src = `assets/images/${e.target.id}`;

})
arrowRight.addEventListener('click', (e) => {
  if (indexImage < tableauImage.length - 1) {
    imageInSlide.src = `assets/images/${tableauImage[indexImage]}`;
    indexImage += 1;
  } else {
    indexImage = 0;
  }
})
// le clique sur la fleche gauche
arrowLeft.addEventListener('click', (e) => {
  if (indexImage >= 0) {
    imageInSlide.src = `assets/images/${tableauImage[indexImage]}`;
    indexImage -= 1;
  } else {
    indexImage = tableauImage.length - 1;
  }

})

