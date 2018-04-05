function addparagraph(){
	
	//for the heading add
	var elementH=document.createElement("h2");
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var head=document.createTextNode("Heading three");
	elementH.appendChild(head);
	
	//for the paragraph add
	var element = document.createElement("p");
	main.appendChild(element);
	var text= document.createTextNode("Learn more about digital image processing Image Processing Toolbox.");
	element.appendChild(text);
	
	//to add blue color to  the p[aragraph( creating a attribue )
	var pattribute=document.createAttribute("id");
	pattribute.value="test";
	element.setAttributeNode(pattribute);
	
}

function removepara(){
	//removing heading
	var elementH=document.getElementsByTagName("h2")[2];
	var parent1=elementH.parentNode;
	parent1.removeChild(elementH);
	
	//removing paragraph
	var elementP=document.getElementsByTagName("p")[2];
	parent1.removeChild(elementP);
	
	
}