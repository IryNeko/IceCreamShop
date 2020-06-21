//this is to detect the screen width and height
//if the height>width switch to full bar size
function lookHere(){
	if (screen.width < screen.height){
	var items2=document.getElementsByTagName("input");
	var i=0;
	//alert(items2.length);
	for (i=0;i<items2.length;i++){
		items2[i].style.width="95%";
		items2[i].style.padding="20px 20px";
		items2[i].type="text";
		items2[i].style.fontSize="24px";
		items2[i].style.textAlign="center";
	}
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
	items[i].style.textAlign="center";
		}
	document.getElementById("manu_des").style.width="95%";
	//document.getElementById("manu_des").style.clear="both";
	document.getElementById("manu_img_frame").style.width="100%";
	//document.getElementById("manu_img_frame").style.clear="both";
	
	
	}
}