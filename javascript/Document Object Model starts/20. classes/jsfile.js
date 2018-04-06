function changestyle(){
	
	function car(name, styles, miles){
		this.name=name;
		this.styles=styles;
		this.miles=miles;
	
	}
	
    var car1=new car("nano","auto","123");
	
	var cars=document.getElementById("para1").innerHTML=car1.name+" "+car1.styles+" "+car1.miles;
}