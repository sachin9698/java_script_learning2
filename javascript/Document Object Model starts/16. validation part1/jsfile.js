function validateTextbox(){
     var box=document.getElementById("name");
	 if(box.value==""){
		 alert("the name field can't be empty !");
		 return false;
	 }
}
