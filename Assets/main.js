function menushow() {
	//menu mobile

	
	let menu = document.getElementById("item-menu-mobile");

	if (menu.classList.contains("add")) {

		document.getElementById("item-menu-mobile").style.display = "block";
		document.getElementById("icon").src = "Imgs/bt2.png";

		menu.classList.remove("add");

	} else {

		document.getElementById("item-menu-mobile").style.display = "none";
		document.getElementById("icon").src = "Imgs/bt1.png";
		menu.classList.add("add");

	}



}