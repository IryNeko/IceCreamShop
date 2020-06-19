//this is to detect the screen width and height
//if the height>width switch to full bar size
function lookHere(){
	if (screen.width < screen.height){
	//alert(screen.width);
	//var items=document.getElementsByClassName("board");
	//for (var i=0;i<item.length;i++){
	//	items[i].style.width="100%";
	//}
	//alert("true");
	//change the board tag to full size on mobile;
	var items=document.getElementsByClassName("board");
	var i=0;
	for (i=0;i<items.length;i++){
	items[i].style.width="100%";
		}
	document.getElementById("manu_des").style.width="95%";
	//document.getElementById("manu_des").style.clear="both";
	document.getElementById("manu_img_frame").style.width="100%";
	//document.getElementById("manu_img_frame").style.clear="both";
	}
}