//first, get the cookie
var x=document.cookie;
//second, cut the cookie up
//third, parse it to a good list
function parseCookie(){
	var cutCookies=document.cookie.split(';');
	var cartList="";
	for (var i=0;i<cutCookies.length;i++){
		cartList+=cutCookies[i].replace("="," : ")+"<br>";
	}
	//display the list on the innerHTML
	//var cartList2=cartList.replace("="," : ");
	document.getElementById("orders").innerHTML=cartList;
	
}
	

