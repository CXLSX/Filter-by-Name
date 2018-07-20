function filterSearch(){
		var input = document.getElementById("mysearch");
		var ul = document.getElementById("my-names");
		var li = ul.getElementsByTagName("li");
		var filter = input.value.toUpperCase();


	for(i = 0; i < li.length; i++){
		a = li[i].getElementsByTagName("a")[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";

		} 
		else {
			li[i].style.display = "none";

			
			}
		}
	}