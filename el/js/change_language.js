function change_language_gr(){
	var htmlElement = document.getElementsByTagName("html")[0];
	if (htmlElement.lang != "el") {
		var newPage = "http://" + location.host + "/el" + location.pathname;
		window.location = newPage;
	}

}


function change_language_en(){
	var htmlElement = document.getElementsByTagName("html")[0];
	if (htmlElement.lang != "en") {
		var newPage = "http://" +  location.host  + location.pathname.replace('/el','');
		window.location =  newPage;
	}

}
