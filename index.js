    let Ho= Math.floor(Math.random() * 10) + 1
    let Do= Math.floor(Math.random() * 10) + 1
    let Focale= Math.floor(Math.random() * 10) + 1
    let Miroir = Math.floor(Math.random() * 2) + 1
if (Miroir===1) {
  Miroir = "concave";
} else {
  Miroir = "convexe";
}
let Di = null;
  Di = Do - Focale;
  Di = (Do * Focale) / Di;
let Hi = null;
  Hi = (-Di / Do) * Ho;

let Taille = null;
let Emplacement = null;
let Sens= null;
let Type= null;

if (Math.abs(Hi) < Ho) {
    Taille = "plus petite";
  } else {
    Taille = "plus grande";
  }
  if(Di < Do){
    Emplacement = "Devant";
  }else{
    Emplacement = "Arrière";
  }  
  if(Hi < 0){
    Sens = "à l'envers";
  }else{
    Sens = "à l'endroit";
  }  
  if (Di < 0) {
    Type = "virtuelle";
  } else {
    Type = "réelle";
  }

    function question() { 
        
  document.getElementById("question").innerHTML = 'Décris graphiquement un objet de '+Ho+"cm de hauteur situé "+Do+"cm devant un miroir "+Miroir+" de "+Focale+"cm de longueur focale.";
}


function réponse(){

document.getElementById("réponse").innerHTML = `Distance de l'image = ${Di}cm Hauteur de l'image ⁼ ${Hi}cm Taille= ${Taille} Emplacement= ${Emplacement} Sens= " ${Sens} Type= ${Type}`;

}