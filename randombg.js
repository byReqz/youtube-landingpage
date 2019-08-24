randomNumber = Math.floor(Math.random()*4+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("backgroundvideo1").style.display = "inline";
		document.getElementById("backgroundvideo2").style.display = "none";
		document.getElementById("backgroundvideo3").style.display = "none";
		document.getElementById("backgroundvideo4").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("backgroundvideo1").style.display = "none";
		document.getElementById("backgroundvideo2").style.display = "inline";
		document.getElementById("backgroundvideo3").style.display = "none";
		document.getElementById("backgroundvideo4").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("backgroundvideo1").style.display = "none";
		document.getElementById("backgroundvideo2").style.display = "none";
		document.getElementById("backgroundvideo3").style.display = "inline";
		document.getElementById("backgroundvideo4").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("backgroundvideo1").style.display = "none";
		document.getElementById("backgroundvideo2").style.display = "none";
		document.getElementById("backgroundvideo3").style.display = "none";
		document.getElementById("backgroundvideo4").style.display = "inline";
	}
}