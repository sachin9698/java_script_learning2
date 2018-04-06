function validateTextbox(){
     var box=document.getElementById("name");
	 var box2=document.getElementById("address");
	 if(box.value=="" || box2.value==""){
		 alert("the name field can't be empty !");
		 return false;
	 }
}
