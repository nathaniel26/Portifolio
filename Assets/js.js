function faz(){
//menu mobile
    
	var nome = document.getElementById("img_bt").src;

    
    document.getElementById("img_bt").src = "Imgs/bt2.png";
    document.getElementById("nav_ul_mob").style.display = "block";
  
 
    
    if(nome == "Imgs/bt2.png"){

        document.getElementById("img_bt").src = "Imgs/bt1.png"
        document.getElementById("nav_ul_mob").style.display = "none";

    }




       

    
}

    