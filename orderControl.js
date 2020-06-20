//first, get the cookie
var x=document.cookie;
//second, cut the cookie up
//third, parse it to a good list
function parseCookie(){
	var cutCookies=document.cookie.split(';');
	var cartList="";
	for (var i=0;i<cutCookies.length;i++){
		cartList+=cutCookies[i]+"<br>";
	}
	//display the list on the innerHTML
	document.getElementById("orders").innerHTML=cartList;
	
}
	

