//this is to detect the screen width and height
//if the height>width switch to full bar size
function lookHere(){
	if (screen.width < screen.height){
	//alert(screen.width);
	
	document.querySelectorAll('.board').style.width="100%";
	
	}
}