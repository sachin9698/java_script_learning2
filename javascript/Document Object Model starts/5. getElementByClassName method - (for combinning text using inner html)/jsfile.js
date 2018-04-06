function changestyle(){
	
	var conf=confirm("These changes are final !");
	
	if(conf == true){
	var text=document.getElementsByClassName("para");
	//indexed based
	//innerHTML is used to replace the text of the selected class.
	var ch1=text[0].innerHTML;
	var ch2=text[1].innerHTML;
	var ch3=text[2].innerHTML=ch1+ch2;
	
	//to remove the aabove two lines
	var ch1=text[0].innerHTML=" ";
	var ch2=text[1].innerHTML=" ";
	
	//to hide the button after one click
	document.getElementById("test").style.visibility="hidden";
	}
}
