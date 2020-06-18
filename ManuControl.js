//function constructor:
//Item:name，Price,Calores,picture,description,
function showItem(name,price,cal,pic,des){
	//alert("debug:"+name);
	document.getElementById("manu_des").innerHTML="Item Name:"+name+"<br>"+"Price:"+price+"<br>Calories:"+cal+"<br>"+des;
	document.getElementById("manu_img").src=pic;
}