
let carouselWidth = 500; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("work-image-row");


let imageNum = 0;


function showNextImage() {
	
	 imageNum+= 1; 
	 checkControls();
	let next= -carouselWidth * imageNum;		
	imageRow.style.left = next + "px";	

}


nextButton.onclick= showNextImage;

function showPrevImage() {

	imageNum-= 1;
	checkControls();
	let prev= -carouselWidth* imageNum;
	imageRow.style.left = prev + "px";
	
}



prevButton.onclick= showPrevImage;


let totalImages = document.getElementsByClassName("workimage").length;



function checkControls() {

	if (imageNum===0) {
	
		prevButton.classList.add("hidden");

	}
	else if (prevButton.classList.contains("hidden")) {
		
		prevButton.classList.remove("hidden");
	}
	
	if (imageRow===totalImages-1) {
		
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
	
		nextButton.classList.remove("hidden");

	}
} 

