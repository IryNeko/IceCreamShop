//function constructor:
//Item:name，Price,Calores,picture,description,
function showItem(name,price,cal,pic,des){
	//alert("debug:"+name);
	document.getElementById("manu_des").innerHTML="Item Name:"+name+"<br>"+"Price:$"+price+"<br>Calories:"+cal+"<br>"+des;
	document.getElementById("manu_img").src=pic;
	itemPos();
}
function itemPos(){
	//change the item position based on the image width
	//the element width is 700, so should leave that much for image
	//var width=document.getElementById("manu_img").width;
	//alert(width);
	//var add=(700-parseInt(width))/2;
	//alert(add);
	//document.getElementById("manu_img").marginLeft=add;
}