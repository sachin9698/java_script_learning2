function addparagraph(){
	
	//for the heading
	var elementH=document.createElement("h2");
	
	var main = document.getElementById("main");
	
	main.appendChild(elementH);
	
	var head=document.createTextNode("Heading three");
	
	elementH.appendChild(head);
	
	
	//for the paragraph
	var element = document.createElement("p");
	
	
	
	main.appendChild(element);
	
	var text= document.createTextNode("Learn more about digital image processing Image Processing Toolbox.");
	
	element.appendChild(text);
	
}
