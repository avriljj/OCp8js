const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dots = document.querySelector(".dots");
let dot = document.querySelector(".dot");
let bannerImg = document.querySelector(".banner-img");
let tagLineM = document.querySelector("#banner p");


var currentDotIndex = 0; 
var nbDots = slides.length;
console.log(nbDots);


arrowLeft.onclick = function () {
	
	if (currentDotIndex == 0) {
		
		currentDotIndex = nbDots-1;
		updateSlide();
		console.log("left");
		console.log(currentDotIndex);
		
	} else {
		currentDotIndex -= 1;
		updateSlide();
		console.log("left");
		console.log(currentDotIndex);
	}
	
}

arrowRight.onclick = function () {
	if (currentDotIndex == nbDots - 1) {
		currentDotIndex = 0;
		updateSlide();
		console.log(currentDotIndex);
	} else {
		console.log("right");
		currentDotIndex += 1;
		updateSlide();
		console.log(currentDotIndex);
	
	}
	
}

// ajouts des classes dot sous classe dots pour chaque elements de slides//
slides.forEach(element => {
	let dotContainer = document.createElement('div');
	dotContainer.classList.add('dot');
	dots.appendChild(dotContainer);
});



function changeCurrentDot() {
	const dotsNb = dots.getElementsByClassName('dot');
    for (let i = 0; i < dotsNb.length; i++) {
      dotsNb[i].classList.remove('dot_selected');
    }
	dotsNb[currentDotIndex].classList.add('dot_selected');
}
	
function updateSlide() {
	bannerImg.src = 'assets/images/slideshow/'+slides[currentDotIndex].image;
	tagLineM.innerHTML = 'assets/images/slideshow/'+ slides[currentDotIndex].tagLine;
	changeCurrentDot();

}
// pour mettre le dot sur le premier des dots : initiaslise le code //
updateSlide();