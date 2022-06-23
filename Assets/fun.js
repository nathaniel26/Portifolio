function faz(){
//menu mobile
    
var nome = document.getElementById("img_bt").src

    
    document.getElementById("img_bt").src = "Imgs/bt2.png";
    document.getElementById("nav_ul_mob").style.display = "block";
  
 
    

    
    if(nome == "file:///C:/Users/Nathaniel/Desktop/Curso%20html-css-javascript-php/Projetos/Portifolio%202.0/Portifolio/Imgs/bt2.png"){

        document.getElementById("img_bt").src = "Imgs/bt1.png"
        document.getElementById("nav_ul_mob").style.display = "none";

    }




       

    
}

    