function addparagraph(){
	var element = document.createElement("p");
	
	var main = document.getElementById("main");
	
	main.appendChild(element);
	
	var text= document.createTextNode("Learn more about digital image processing Image Processing Toolbox.");
	
	element.appendChild(text);
	
}
