function validateTextbox(){
     var box=document.getElementById("name");
	 var box2=document.getElementById("address");
	
	 if(box.value.length < 5|| box2.value.length < 5){
		 alert("enter atleast more than 5 character");
		 return false;
	 }
}
